import type { ReactNode } from "react";
import FrameCross from "@/features/landing/components/frame-cross";
import { cn } from "@/utils/cn";

interface SectionFrameProps {
  id?: string;
  labelledBy?: string;
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Khung chung của mọi section: đường kẻ ngang tràn hết bề ngang, hai đường ray dọc
 * ôm khung 1112px, dấu + ở hai giao điểm phía trên.
 */
export default function SectionFrame({ id, labelledBy, ariaLabel, children, className }: SectionFrameProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
      className="border-t border-border px-4 sm:px-6"
    >
      <div className={cn("relative mx-auto w-full max-w-[1112px] border-x border-border", className)}>
        <FrameCross side="left" />
        <FrameCross side="right" />
        {children}
      </div>
    </section>
  );
}
