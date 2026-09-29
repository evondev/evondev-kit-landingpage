import { Sparkle } from "lucide-react";
import { cn } from "@/utils/cn";

interface HeroSparkleProps {
  className?: string;
}

/** Vòng tròn có ngôi sao cam, đặt ở giao điểm lưới hero. */
export default function HeroSparkle({ className }: HeroSparkleProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute hidden size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background md:grid",
        className,
      )}
    >
      <Sparkle className="size-4 fill-heat text-heat" />
    </span>
  );
}
