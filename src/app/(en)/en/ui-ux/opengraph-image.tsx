import { enDictionary } from "@/features/landing/constants/dictionaries/en";
import { createOgImage, ogImageSize } from "@/features/landing/utils/create-og-image";

export const alt = enDictionary.meta["ui-ux"].title;
export const size = ogImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage("en", "ui-ux");
}
