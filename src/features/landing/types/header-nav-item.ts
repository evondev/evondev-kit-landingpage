import type { Dictionary } from "@/features/landing/types/dictionary";

export interface HeaderNavItem {
  href: string;
  labelKey: keyof Pick<Dictionary["header"], "modes" | "designer" | "showcase" | "install" | "roadmap">;
}
