import type { CSSProperties } from "react";
import { heroGrid } from "@/features/landing/constants/hero-grid";
import type { HeroCellAnchor } from "@/features/landing/types/hero-cell-anchor";

/**
 * Vị trí bám lưới nền hero, tính theo số cột, số hàng. Phần tử dùng kèm
 * -translate-x-1/2 -translate-y-1/2 để tâm của nó nằm đúng điểm này.
 */
export function getHeroCellStyle(column: number, row: number, anchor: HeroCellAnchor): CSSProperties {
  const offset = anchor === "center" ? 0.5 : 0;

  return {
    left: `calc(100% * ${column + offset} / ${heroGrid.columnCount})`,
    top: `${(row + offset) * heroGrid.rowHeight}px`,
  };
}
