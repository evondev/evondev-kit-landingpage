import type { ColorTheme } from "@/features/landing/types/color-theme";

export const darkSchemeQuery = "(prefers-color-scheme: dark)";

/** Theme đang hiện thật: data-theme trên <html> nếu đã chọn, không thì theo máy. Chỉ gọi ở trình duyệt. */
export function getResolvedTheme(): ColorTheme {
  const chosenTheme = document.documentElement.dataset.theme;

  if (chosenTheme === "light" || chosenTheme === "dark") return chosenTheme;

  return window.matchMedia(darkSchemeQuery).matches ? "dark" : "light";
}
