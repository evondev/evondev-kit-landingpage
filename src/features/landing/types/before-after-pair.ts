import type { BeforeAfterStage } from "@/features/landing/types/before-after-stage";

/** Một cặp ảnh đem ra so: `left` nằm bên trái thanh kéo, `right` bên phải. */
export interface BeforeAfterPair {
  id: string;
  left: BeforeAfterStage;
  right: BeforeAfterStage;
}
