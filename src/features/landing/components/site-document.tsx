import type { ReactNode } from "react";
import "@/app/globals.css";
import { interFont, jetbrainsMonoFont } from "@/features/landing/constants/fonts";
import { themeInitScript } from "@/features/landing/constants/theme-init-script";
import type { Locale } from "@/features/landing/types/locale";
import { cn } from "@/utils/cn";

interface SiteDocumentProps {
  locale: Locale;
  children: ReactNode;
}

/**
 * Khung <html> chung cho hai root layout (vi) và (en), chỉ khác thuộc tính lang.
 * data-scroll-behavior="smooth": globals.css đặt scroll-behavior smooth cho <html>, Next 16 không còn tự
 * tắt nó khi chuyển trang. Thiếu thuộc tính này, bấm link ở cuối trang thì lần cuộn lên đầu chạy mượt,
 * bị trang mới render cắt ngang, và trang mới dừng ở gần cuối thay vì ở đầu.
 * suppressHydrationWarning: script theme gắn data-theme lên <html> trước khi React hydrate.
 */
export default function SiteDocument({ locale, children }: SiteDocumentProps) {
  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={cn(interFont.variable, jetbrainsMonoFont.variable)}
      suppressHydrationWarning
    >
      {/* Luật này dành cho Pages Router. Đây là <html> của root layout App Router, next/head không chạy ở đây. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
