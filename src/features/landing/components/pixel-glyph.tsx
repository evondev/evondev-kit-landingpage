import type { PixelPattern } from "@/features/landing/types/pixel-pattern";
import { getPixelCellClasses } from "@/features/landing/utils/get-pixel-cell-classes";
import { cn } from "@/utils/cn";

interface PixelGlyphProps {
  pattern: PixelPattern;
  className?: string;
}

/** Hình ô vuông nhỏ trang trí trong lưới hero, vẽ bằng lưới 4×4 ô 6px. */
export default function PixelGlyph({ pattern, className }: PixelGlyphProps) {
  const cells = pattern.rows.flatMap((row) => row.split(""));

  return (
    <span aria-hidden className={cn("grid grid-cols-4 gap-[3px]", className)}>
      {cells.map((cell, index) => (
        <span key={`${pattern.id}-${index}`} className={getPixelCellClasses(cell)} />
      ))}
    </span>
  );
}
