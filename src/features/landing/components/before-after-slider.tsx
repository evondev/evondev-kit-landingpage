"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { ChevronsLeftRight } from "lucide-react";
import type { ShowcaseImage } from "@/features/landing/types/showcase-image";
import { getNextSliderPercent } from "@/features/landing/utils/get-next-slider-percent";
import { getSliderPercent } from "@/features/landing/utils/get-slider-percent";

interface BeforeAfterSliderSide {
  image: ShowcaseImage;
  label: string;
  alt: string;
}

interface BeforeAfterSliderProps {
  left: BeforeAfterSliderSide;
  right: BeforeAfterSliderSide;
  sliderLabel: string;
}

const imageSizes = "(min-width: 1112px) 1000px, 100vw";

/**
 * Hai ảnh chồng lên nhau, ảnh trái bị cắt tới vị trí thanh kéo. Kéo ở bất kỳ đâu trong khung,
 * hoặc focus vào tay nắm rồi dùng phím mũi tên. `touch-action: pan-y` để vuốt dọc vẫn cuộn trang.
 */
export default function BeforeAfterSlider({ left, right, sliderLabel }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  function updateFromPointer(clientX: number) {
    const frame = frameRef.current;

    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    setPosition(getSliderPercent(clientX, rect.left, rect.width));
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;

    isDraggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromPointer(event.clientX);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isDraggingRef.current) return;

    updateFromPointer(event.clientX);
  }

  function handlePointerEnd() {
    isDraggingRef.current = false;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const nextPosition = getNextSliderPercent(event.key, position, event.shiftKey);

    if (nextPosition === null) return;

    event.preventDefault();
    setPosition(nextPosition);
  }

  return (
    <div
      ref={frameRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      className="relative w-full cursor-ew-resize touch-pan-y overflow-hidden select-none"
      style={{ aspectRatio: `${right.image.width} / ${right.image.height}` }}
    >
      <Image
        src={right.image.src}
        alt={right.alt}
        fill
        sizes={imageSizes}
        draggable={false}
        className="object-cover object-top"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image
          src={left.image.src}
          alt={left.alt}
          fill
          sizes={imageSizes}
          draggable={false}
          className="object-cover object-top"
        />
      </div>

      <span className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-foreground/80 px-2 py-1 font-mono text-xs text-white uppercase backdrop-blur-sm">
        {left.label}
      </span>
      <span className="pointer-events-none absolute right-3 bottom-3 rounded-md bg-heat px-2 py-1 font-mono text-xs text-white uppercase">
        {right.label}
      </span>

      <div
        role="slider"
        tabIndex={0}
        aria-label={sliderLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)}% ${left.label}`}
        onKeyDown={handleKeyDown}
        className="group absolute inset-y-0 -ml-5 flex w-10 justify-center outline-hidden"
        style={{ left: `${position}%` }}
      >
        <span aria-hidden className="h-full w-0.5 bg-white shadow-[0_0_0_1px_rgb(0_0_0/0.08)]" />
        <span
          aria-hidden
          className="absolute top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-surface text-foreground shadow-float transition-transform duration-150 group-hover:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-heat group-focus-visible:ring-offset-2"
        >
          <ChevronsLeftRight className="size-4" />
        </span>
      </div>
    </div>
  );
}
