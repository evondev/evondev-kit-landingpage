import { sitePagePaths } from "@/features/landing/constants/site-page-paths";
import type { Locale } from "@/features/landing/types/locale";
import type { SitePage } from "@/features/landing/types/site-page";

/** Tiếng Việt không tiền tố (`/`, `/ui-ux`), tiếng Anh thêm `/en` (`/en`, `/en/ui-ux`). */
export function getLocalePath(locale: Locale, page: SitePage = "home") {
  const pagePath = sitePagePaths[page];

  if (locale === "vi") return pagePath || "/";

  return `/en${pagePath}`;
}
