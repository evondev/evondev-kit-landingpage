import type { SeverityTone } from "@/features/landing/types/severity-tone";
import { cn } from "@/utils/cn";

/** Chấm màu theo hạng lỗi: Hỏng đỏ, Lệch hệ vàng, Gu xám. */
export function getSeverityDotClasses(tone: SeverityTone) {
  return cn(
    "size-2 shrink-0 rounded-full",
    tone === "broken" && "bg-red-500",
    tone === "off-system" && "bg-amber-400",
    tone === "taste" && "bg-faint",
  );
}
