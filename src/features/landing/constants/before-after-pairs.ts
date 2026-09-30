import type { BeforeAfterPair } from "@/features/landing/types/before-after-pair";

/** Các cặp so sánh trên hàng tab, cặp đầu là mặc định. */
export const beforeAfterPairs: BeforeAfterPair[] = [
  { id: "before-after", left: "before", right: "after" },
  { id: "before-wireframe", left: "before", right: "wireframe" },
  { id: "wireframe-after", left: "wireframe", right: "after" },
];
