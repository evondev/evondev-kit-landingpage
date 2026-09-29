import type { FrameSide } from "@/features/landing/types/frame-side";
import { cn } from "@/utils/cn";

/** Dấu + 9px đặt đúng giao điểm của đường ray dọc với đường kẻ ngang phía trên. */
export function getFrameCrossClasses(side: FrameSide) {
  return cn(
    "pointer-events-none absolute -top-[5px] z-10 size-[9px]",
    "before:absolute before:inset-x-0 before:top-1/2 before:h-px before:-translate-y-1/2 before:bg-faint",
    "after:absolute after:inset-y-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-faint",
    side === "left" && "-left-[5px]",
    side === "right" && "-right-[5px]",
  );
}
