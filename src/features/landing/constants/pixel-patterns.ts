import type { PixelPattern } from "@/features/landing/types/pixel-pattern";

/**
 * Hình ô vuông trang trí trong lưới hero. Mỗi chuỗi là một hàng:
 * "#" ô cam, "o" ô xám, "." ô trống.
 */
export const pixelPatterns: PixelPattern[] = [
  { id: "cursor", rows: ["#...", "##..", "###.", "#.#."] },
  { id: "grid", rows: ["oo.o", "o#oo", ".oo#", "oo.o"] },
  { id: "window", rows: ["####", "o..o", "o..o", "oooo"] },
  { id: "steps", rows: ["...#", "..oo", ".ooo", "oooo"] },
];
