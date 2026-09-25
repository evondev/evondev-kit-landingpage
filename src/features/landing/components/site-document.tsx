import type { ReactNode } from "react";
import "@/app/globals.css";
import { interFont, jetbrainsMonoFont } from "@/features/landing/constants/fonts";
import type { Locale } from "@/features/landing/types/locale";
import { cn } from "@/utils/cn";

interface SiteDocumentProps {
  locale: Locale;
  children: ReactNode;
}

/** Khung <html> chung cho hai root layout (vi) và (en), chỉ khác thuộc tính lang. */
export default function SiteDocument({ locale, children }: SiteDocumentProps) {
  return (
    <html lang={locale} className={cn(interFont.variable, jetbrainsMonoFont.variable)}>
      <body>{children}</body>
    </html>
  );
}
