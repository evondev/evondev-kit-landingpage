import type { Metadata } from "next";
import type { Locale } from "@/features/landing/types/locale";
import { getDictionary } from "@/features/landing/utils/get-dictionary";
import { getLocalePath } from "@/features/landing/utils/get-locale-path";
import { getSiteUrl } from "@/features/landing/utils/get-site-url";

const openGraphLocales: Record<Locale, string> = {
  vi: "vi_VN",
  en: "en_US",
};

/** Metadata của một bản ngôn ngữ, kèm hreflang trỏ sang bản kia. Ảnh OG do opengraph-image.tsx cạnh page lo. */
export function buildPageMetadata(locale: Locale): Metadata {
  const dictionary = getDictionary(locale);
  const path = getLocalePath(locale);

  return {
    metadataBase: new URL(getSiteUrl()),
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical: path,
      languages: {
        vi: getLocalePath("vi"),
        en: getLocalePath("en"),
        "x-default": getLocalePath("vi"),
      },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "evondevKit",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      locale: openGraphLocales[locale],
      alternateLocale: locale === "vi" ? openGraphLocales.en : openGraphLocales.vi,
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
    },
  };
}
