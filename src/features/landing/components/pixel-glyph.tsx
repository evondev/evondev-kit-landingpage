import type { CSSProperties } from "react";
import type { PixelPattern } from "@/features/landing/types/pixel-pattern";
import { getPixelBlinkDelay } from "@/features/landing/utils/get-pixel-blink-delay";
import { getPixelCellClasses } from "@/features/landing/utils/get-pixel-cell-classes";
import { cn } from "@/utils/cn";

interface PixelGlyphProps {
  pattern: PixelPattern;
  className?: string;
  style?: CSSProperties;
}

/** Hình ô vuông nhỏ trang trí trong lưới hero, lưới 4×4 ô 6px, từng ô nhấp nháy lệch nhịp. */
export default function PixelGlyph({ pattern, className, style }: PixelGlyphProps) {
  const cells = pattern.rows.flatMap((row) => row.split(""));

  return (
    <span aria-hidden className={cn("grid grid-cols-4 gap-[3px]", className)} style={style}>
      {cells.map((cell, index) => (
        <span
          key={`${pattern.id}-${index}`}
          className={getPixelCellClasses(cell)}
          style={{ animationDelay: getPixelBlinkDelay(index) }}
        />
      ))}
    </span>
  );
}
