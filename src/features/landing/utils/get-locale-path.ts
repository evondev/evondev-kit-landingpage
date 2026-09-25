import type { Locale } from "@/features/landing/types/locale";

/** Tiếng Việt ở `/`, tiếng Anh ở `/en`. */
export function getLocalePath(locale: Locale) {
  return locale === "vi" ? "/" : "/en";
}
