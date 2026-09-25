import { enDictionary } from "@/features/landing/constants/dictionaries/en";
import { viDictionary } from "@/features/landing/constants/dictionaries/vi";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { Locale } from "@/features/landing/types/locale";

const dictionaries: Record<Locale, Dictionary> = {
  vi: viDictionary,
  en: enDictionary,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
