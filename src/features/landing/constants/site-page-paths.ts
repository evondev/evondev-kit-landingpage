import type { SitePage } from "@/features/landing/types/site-page";

/** Đường dẫn của từng trang, chưa gắn tiền tố ngôn ngữ. */
export const sitePagePaths: Record<SitePage, string> = {
  home: "",
  "ui-ux": "/ui-ux",
};
