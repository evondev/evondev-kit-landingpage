import type { ShowcaseImageSet } from "@/features/landing/types/showcase-image";
import type { ShowcaseLevel } from "@/features/landing/types/showcase-level";

/** Một ô showcase đã chọn đúng thứ tiếng, sẵn sàng đưa xuống client component. */
export interface ShowcaseEntry {
  id: string;
  level: ShowcaseLevel;
  title: string;
  prompt: string;
  isUnprecedented: boolean;
  images: ShowcaseImageSet | null;
}
