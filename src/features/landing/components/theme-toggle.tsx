"use client";

import { Moon, Sun } from "lucide-react";
import { useLayoutEffect } from "react";
import { Button } from "@/components/button";
import { themeStorageKey } from "@/features/landing/constants/theme-storage-key";
import { getResolvedTheme } from "@/features/landing/utils/get-resolved-theme";
import { readStoredTheme } from "@/features/landing/utils/read-stored-theme";

interface ThemeToggleProps {
  label: string;
}

/**
 * Nút đổi sáng / tối. Không giữ state React: theme nằm ở data-theme trên <html>, icon đổi bằng
 * biến thể dark: của CSS, nên HTML server ra khớp với lúc hydrate dù người xem đang ở theme nào.
 */
export default function ThemeToggle({ label }: ThemeToggleProps) {
  // Script trong <head> đã gắn data-theme. Ở dev, Strict Mode mount lại và React xoá thuộc tính
  // không khai trong JSX khỏi <html>, nên gắn lại trước khi vẽ. Ở bản build là việc thừa, vô hại.
  useLayoutEffect(() => {
    const storedTheme = readStoredTheme();

    if (storedTheme) document.documentElement.dataset.theme = storedTheme;
  }, []);

  function handleToggleTheme() {
    const nextTheme = getResolvedTheme() === "dark" ? "light" : "dark";

    // Tắt transition trong lúc đổi: không thì nút, link có transition-colors đổi màu trễ hơn phần
    // còn lại, trang loang từng mảng. Đọc lại style để trình duyệt áp màu mới khi transition còn tắt.
    const transitionBlocker = document.createElement("style");

    transitionBlocker.textContent = "*,*::before,*::after{transition:none!important}";
    document.head.appendChild(transitionBlocker);
    document.documentElement.dataset.theme = nextTheme;
    void window.getComputedStyle(document.body).backgroundColor;
    requestAnimationFrame(() => transitionBlocker.remove());

    try {
      localStorage.setItem(themeStorageKey, nextTheme);
    } catch {
      // Không lưu được thì theme vẫn đổi cho lần xem này, tải lại trang mới về theo máy.
    }
  }

  return (
    <Button
      variant="ghost"
      aria-label={label}
      title={label}
      onClick={handleToggleTheme}
      className="size-9 p-0 text-foreground"
    >
      <Moon className="size-4.5 dark:hidden" aria-hidden />
      <Sun className="hidden size-4.5 dark:block" aria-hidden />
    </Button>
  );
}
