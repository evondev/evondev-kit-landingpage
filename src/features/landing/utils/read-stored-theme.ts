import { themeStorageKey } from "@/features/landing/constants/theme-storage-key";
import type { ColorTheme } from "@/features/landing/types/color-theme";

/** Theme người xem đã chọn, null nếu chưa chọn hoặc trình duyệt chặn localStorage. */
export function readStoredTheme(): ColorTheme | null {
  try {
    const storedTheme = localStorage.getItem(themeStorageKey);

    if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
  } catch {
    // Chế độ riêng tư hoặc chặn dữ liệu trang: coi như chưa chọn, trang theo máy.
  }

  return null;
}
