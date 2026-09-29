import { Sparkle } from "lucide-react";
import type { CSSProperties } from "react";

interface HeroSparkleProps {
  style?: CSSProperties;
}

/** Vòng tròn có ngôi sao cam, đặt ở giao điểm lưới hero. */
export default function HeroSparkle({ style }: HeroSparkleProps) {
  return (
    <span
      aria-hidden
      style={style}
      className="absolute hidden size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background lg:grid"
    >
      <Sparkle className="size-4 fill-heat text-heat motion-safe:animate-spin-slow" />
    </span>
  );
}
