import { viDictionary } from "@/features/landing/constants/dictionaries/vi";
import { createOgImage, ogImageSize } from "@/features/landing/utils/create-og-image";

export const alt = viDictionary.meta.title;
export const size = ogImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage("vi");
}
