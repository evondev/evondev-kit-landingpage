"use client";

import { useEffect, useRef } from "react";
import { asciiGlyphs } from "@/features/landing/constants/ascii-glyphs";
import { motionTimings } from "@/features/landing/constants/motion-timings";
import { useInView, usePrefersReducedMotion, useResolvedTheme } from "@/features/landing/hooks";
import type { AsciiShape } from "@/features/landing/types/ascii-shape";
import { getAsciiDensity } from "@/features/landing/utils/get-ascii-density";
import { cn } from "@/utils/cn";

interface AsciiFieldProps {
  shape?: AsciiShape;
  className?: string;
}

const cellWidth = 7;
const cellHeight = 12;
const densityThreshold = 0.26;
const heatSparkChance = 0.006;

/**
 * Đám ký tự ASCII trôi chậm trên canvas, kiểu nền trang trí của firecrawl.
 * Chỉ vẽ khi nằm trong khung nhìn, tối đa 14 hình/giây; giảm chuyển động thì vẽ một hình đứng yên.
 */
export default function AsciiField({ shape = "blob", className }: AsciiFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const prefersReducedMotion = usePrefersReducedMotion();
  const isInView = useInView(canvasRef, { rootMargin: "120px" });
  // Màu chữ đọc từ token CSS một lần mỗi lần chạy effect, nên đổi theme phải chạy lại để lấy màu mới.
  const resolvedTheme = useResolvedTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context || !isInView) return;

    const canvasStyle = getComputedStyle(canvas);
    const inkColor = canvasStyle.getPropertyValue("--color-faint").trim() || "#a3a3a3";
    const heatColor = canvasStyle.getPropertyValue("--color-heat").trim() || "#fa5d19";
    const fontFamily = canvasStyle.fontFamily;

    function resizeCanvas() {
      if (!canvas || !context) return;

      const pixelRatio = window.devicePixelRatio || 1;

      canvas.width = canvas.clientWidth * pixelRatio;
      canvas.height = canvas.clientHeight * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.font = `10px ${fontFamily}`;
      context.textBaseline = "top";
    }

    function drawFrame(time: number) {
      if (!canvas || !context) return;

      const columnCount = Math.floor(canvas.clientWidth / cellWidth);
      const rowCount = Math.floor(canvas.clientHeight / cellHeight);

      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      for (let row = 0; row < rowCount; row++) {
        for (let column = 0; column < columnCount; column++) {
          const density = getAsciiDensity(column / columnCount, row / rowCount, time, shape);

          if (density < densityThreshold) continue;

          const glyphIndex = Math.min(asciiGlyphs.length - 1, Math.floor(density * asciiGlyphs.length * 1.4));
          const isHeatSpark = Math.random() < heatSparkChance * density;

          context.fillStyle = isHeatSpark ? heatColor : inkColor;
          context.globalAlpha = isHeatSpark ? 0.9 : Math.min(0.6, density * 0.9);
          context.fillText(asciiGlyphs[glyphIndex], column * cellWidth, row * cellHeight);
        }
      }

      context.globalAlpha = 1;
    }

    // Đổi kích thước canvas là xoá sạch hình, nên bản đứng yên phải vẽ lại ngay.
    function handleResize() {
      resizeCanvas();

      if (prefersReducedMotion) drawFrame(0);
    }

    const resizeObserver = new ResizeObserver(handleResize);

    handleResize();
    resizeObserver.observe(canvas);

    if (prefersReducedMotion) return () => resizeObserver.disconnect();

    const frameInterval = 1000 / motionTimings.asciiFramesPerSecond;
    let frameId = 0;
    let lastFrameTime = 0;

    function tick(now: number) {
      frameId = requestAnimationFrame(tick);

      if (now - lastFrameTime < frameInterval) return;

      lastFrameTime = now;
      drawFrame(now / 1000);
    }

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, [isInView, prefersReducedMotion, resolvedTheme, shape]);

  return <canvas ref={canvasRef} aria-hidden className={cn("pointer-events-none font-mono select-none", className)} />;
}
