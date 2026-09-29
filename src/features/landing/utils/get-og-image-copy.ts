import type { Dictionary, SplitTitle } from "@/features/landing/types/dictionary";
import type { SitePage } from "@/features/landing/types/site-page";

interface OgImageCopy {
  title: SplitTitle;
  subtitle: string;
  /** Tên skill hiện sau logo, như breadcrumb trên header. Trang chủ thì không có */
  skillName: string | null;
}

/** Chữ trên ảnh OG của từng trang: trang chủ nói về cả bộ, trang skill nói về skill đó. */
export function getOgImageCopy(dictionary: Dictionary, page: SitePage): OgImageCopy {
  if (page === "home") {
    return { title: dictionary.kitHome.hero.title, subtitle: dictionary.kitHome.hero.badge, skillName: null };
  }

  return { title: dictionary.hero.title, subtitle: dictionary.hero.badge, skillName: page };
}
