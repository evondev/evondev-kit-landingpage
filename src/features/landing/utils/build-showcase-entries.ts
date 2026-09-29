import { showcaseItems } from "@/features/landing/constants/showcase-items";
import type { Locale } from "@/features/landing/types/locale";
import type { ShowcaseEntry } from "@/features/landing/types/showcase-entry";
import { getShowcaseImages } from "@/features/landing/utils/get-showcase-images";

export function buildShowcaseEntries(locale: Locale): ShowcaseEntry[] {
  return showcaseItems.map((item) => ({
    id: item.id,
    level: item.level,
    title: item.title[locale],
    prompt: item.prompt[locale],
    images: getShowcaseImages(item.id),
  }));
}
