import type { MetadataRoute } from "next";
import { getLocalePath, getSiteUrl } from "@/features/landing/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const languages = {
    vi: `${siteUrl}${getLocalePath("vi")}`,
    en: `${siteUrl}${getLocalePath("en")}`,
  };

  return [
    { url: languages.vi, alternates: { languages } },
    { url: languages.en, alternates: { languages } },
  ];
}
