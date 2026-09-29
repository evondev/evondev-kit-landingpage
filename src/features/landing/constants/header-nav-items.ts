import type { HeaderNavItem } from "@/features/landing/types/header-nav-item";

/** Link trên header, theo thứ tự section trên trang. Nhãn lấy từ dictionary.header. */
export const headerNavItems: HeaderNavItem[] = [
  { href: "#modes", labelKey: "modes" },
  { href: "#designer", labelKey: "designer" },
  { href: "#showcase", labelKey: "showcase" },
  { href: "#install", labelKey: "install" },
  { href: "#roadmap", labelKey: "roadmap" },
];
