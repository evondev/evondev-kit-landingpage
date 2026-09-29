"use client";

import { useEffect, useRef, useState } from "react";
import { motionTimings } from "@/features/landing/constants/motion-timings";
import { useInView, usePrefersReducedMotion } from "@/features/landing/hooks";
import { scrambleCharacters } from "@/features/landing/utils/scramble-characters";

interface ScrambleTextProps {
  text: string;
}

/**
 * Chữ nhảy ký tự rồi đứng yên từ trái sang phải khi cuộn tới, một lần.
 * Chỉ dùng cho chữ mono: mọi ký tự cùng bề ngang nên chữ không xô dòng khi nhảy.
 */
export default function ScrambleText({ text }: ScrambleTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [displayedText, setDisplayedText] = useState(text);

  const prefersReducedMotion = usePrefersReducedMotion();
  const isInView = useInView(textRef, { isOnce: true });

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const totalSteps = motionTimings.scrambleLeadSteps + text.length;
    let step = 0;

    const timer = window.setInterval(() => {
      step += 1;
      setDisplayedText(scrambleCharacters(text, step, motionTimings.scrambleLeadSteps));

      if (step >= totalSteps) window.clearInterval(timer);
    }, motionTimings.scrambleStepMs);

    return () => window.clearInterval(timer);
  }, [isInView, prefersReducedMotion, text]);

  return (
    <span ref={textRef}>
      <span aria-hidden>{displayedText}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
