import type { MetadataRoute } from "next";
import { sitePagePaths } from "@/features/landing/constants/site-page-paths";
import type { SitePage } from "@/features/landing/types/site-page";
import { getLocalePath, getSiteUrl } from "@/features/landing/utils";

/** Mỗi trang hai bản ngôn ngữ, bản nào cũng khai hreflang trỏ sang bản kia. */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const pages = Object.keys(sitePagePaths) as SitePage[];

  return pages.flatMap((page) => {
    const languages = {
      vi: `${siteUrl}${getLocalePath("vi", page)}`,
      en: `${siteUrl}${getLocalePath("en", page)}`,
    };

    return [
      { url: languages.vi, alternates: { languages } },
      { url: languages.en, alternates: { languages } },
    ];
  });
}
