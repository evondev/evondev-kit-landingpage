import { ImageResponse } from "next/og";
import OgImageContent from "@/features/landing/components/og-image-content";
import type { Locale } from "@/features/landing/types/locale";
import type { SitePage } from "@/features/landing/types/site-page";
import { getDictionary } from "@/features/landing/utils/get-dictionary";
import { getOgImageCopy } from "@/features/landing/utils/get-og-image-copy";
import { loadOgFonts } from "@/features/landing/utils/load-og-fonts";
import { loadOgLogo } from "@/features/landing/utils/load-og-logo";

export const ogImageSize = { width: 1200, height: 630 };

export async function createOgImage(locale: Locale, page: SitePage) {
  const [fonts, logoSrc] = await Promise.all([loadOgFonts(), loadOgLogo()]);
  const copy = getOgImageCopy(getDictionary(locale), page);

  return new ImageResponse(
    <OgImageContent title={copy.title} subtitle={copy.subtitle} skillName={copy.skillName} logoSrc={logoSrc} />,
    { ...ogImageSize, fonts },
  );
}
