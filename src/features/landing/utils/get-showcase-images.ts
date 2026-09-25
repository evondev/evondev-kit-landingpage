import showcaseManifest from "@/features/landing/constants/showcase-manifest.json";
import type { ShowcaseImageSet } from "@/features/landing/types/showcase-image";

const imagesById = showcaseManifest as Record<string, ShowcaseImageSet | undefined>;

/** Ảnh đã chụp của một mục. Chưa chụp thì null, ô showcase hiện placeholder. */
export function getShowcaseImages(id: string) {
  return imagesById[id] ?? null;
}
