"use client";

import { useEffect, useRef, useState } from "react";
import { motionTimings } from "@/features/landing/constants/motion-timings";
import { useInView, usePrefersReducedMotion } from "@/features/landing/hooks";
import { easeOutCubic } from "@/features/landing/utils/ease-out-cubic";

interface CountUpNumberProps {
  value: string;
}

/**
 * Số đếm từ 0 lên khi cuộn tới, một lần. HTML từ server đã có số cuối,
 * nên tắt JavaScript hay bật giảm chuyển động vẫn thấy đúng số.
 */
export default function CountUpNumber({ value }: CountUpNumberProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const targetNumber = Number.parseInt(value, 10);
  const [displayedNumber, setDisplayedNumber] = useState(targetNumber);

  const prefersReducedMotion = usePrefersReducedMotion();
  const isInView = useInView(numberRef, { isOnce: true });

  useEffect(() => {
    if (!isInView || prefersReducedMotion || Number.isNaN(targetNumber)) return;

    let frameId = 0;
    const startTime = performance.now();

    function renderFrame(now: number) {
      const progress = Math.min((now - startTime) / motionTimings.countUpMs, 1);

      setDisplayedNumber(Math.round(easeOutCubic(progress) * targetNumber));

      if (progress < 1) frameId = requestAnimationFrame(renderFrame);
    }

    frameId = requestAnimationFrame(renderFrame);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, prefersReducedMotion, targetNumber]);

  if (Number.isNaN(targetNumber)) return <>{value}</>;

  return (
    <span ref={numberRef}>
      <span aria-hidden>{displayedNumber}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
