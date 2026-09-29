import { cn } from "@/utils/cn";

/** "#" ô cam, "o" ô xám, còn lại ô trống. */
export function getPixelCellClasses(cell: string) {
  return cn(
    "size-1.5 rounded-[1px]",
    cell === "#" && "bg-heat motion-safe:animate-pixel-blink",
    cell === "o" && "bg-border-strong motion-safe:animate-pixel-blink",
  );
}
