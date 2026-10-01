import { themeStorageKey } from "@/features/landing/constants/theme-storage-key";

/**
 * Chạy đồng bộ trong <head>, trước lần vẽ đầu: gắn data-theme nếu người xem đã chọn theme.
 * Chưa chọn thì để trống, CSS tự theo prefers-color-scheme. try/catch vì localStorage có thể bị chặn.
 */
export const themeInitScript = `(function(){try{var storedTheme=localStorage.getItem(${JSON.stringify(themeStorageKey)});if(storedTheme==="light"||storedTheme==="dark")document.documentElement.dataset.theme=storedTheme}catch(error){}})()`;
