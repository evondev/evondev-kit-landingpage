import type { Dictionary } from "@/features/landing/types/dictionary";

export interface HeaderNavItem {
  href: string;
  labelKey: keyof Dictionary["header"]["nav"];
}
