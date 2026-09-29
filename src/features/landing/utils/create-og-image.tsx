import { ImageResponse } from "next/og";
import OgImageContent from "@/features/landing/components/og-image-content";
import type { Locale } from "@/features/landing/types/locale";
import { getDictionary } from "@/features/landing/utils/get-dictionary";
import { loadOgFonts } from "@/features/landing/utils/load-og-fonts";
import { loadOgLogo } from "@/features/landing/utils/load-og-logo";

export const ogImageSize = { width: 1200, height: 630 };

export async function createOgImage(locale: Locale) {
  const [fonts, logoSrc] = await Promise.all([loadOgFonts(), loadOgLogo()]);

  return new ImageResponse(<OgImageContent dictionary={getDictionary(locale)} logoSrc={logoSrc} />, {
    ...ogImageSize,
    fonts,
  });
}
