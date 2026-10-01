import { useSyncExternalStore } from "react";
import type { ColorTheme } from "@/features/landing/types/color-theme";
import { darkSchemeQuery, getResolvedTheme } from "@/features/landing/utils/get-resolved-theme";

/** Theo dõi cả hai nguồn: nút đổi theme (thuộc tính data-theme) và theme của máy. */
function subscribeToThemeChange(onChange: () => void) {
  const mediaQuery = window.matchMedia(darkSchemeQuery);
  const attributeObserver = new MutationObserver(onChange);

  mediaQuery.addEventListener("change", onChange);
  attributeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  return () => {
    mediaQuery.removeEventListener("change", onChange);
    attributeObserver.disconnect();
  };
}

/** Server không biết theme của người xem, HTML ra theo bản sáng. */
function getThemeServerSnapshot(): ColorTheme {
  return "light";
}

/** Theme đang hiện, cho chỗ phải tự đọc màu bằng JavaScript (canvas). Chỗ khác dùng token CSS là đủ. */
export function useResolvedTheme() {
  return useSyncExternalStore(subscribeToThemeChange, getResolvedTheme, getThemeServerSnapshot);
}
