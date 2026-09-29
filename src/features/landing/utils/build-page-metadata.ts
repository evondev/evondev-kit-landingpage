import type { Metadata } from "next";
import type { Locale } from "@/features/landing/types/locale";
import type { SitePage } from "@/features/landing/types/site-page";
import { getDictionary } from "@/features/landing/utils/get-dictionary";
import { getLocalePath } from "@/features/landing/utils/get-locale-path";
import { getSiteUrl } from "@/features/landing/utils/get-site-url";

const openGraphLocales: Record<Locale, string> = {
  vi: "vi_VN",
  en: "en_US",
};

/** Metadata của một trang ở một thứ tiếng, kèm hreflang trỏ sang bản kia. Ảnh OG do opengraph-image.tsx cạnh page lo. */
export function buildPageMetadata(locale: Locale, page: SitePage): Metadata {
  const meta = getDictionary(locale).meta[page];
  const path = getLocalePath(locale, page);

  return {
    metadataBase: new URL(getSiteUrl()),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: path,
      languages: {
        vi: getLocalePath("vi", page),
        en: getLocalePath("en", page),
        "x-default": getLocalePath("vi", page),
      },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "evondevKit",
      title: meta.title,
      description: meta.description,
      locale: openGraphLocales[locale],
      alternateLocale: locale === "vi" ? openGraphLocales.en : openGraphLocales.vi,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
