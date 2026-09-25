import Link from "next/link";
import type { Locale } from "@/features/landing/types/locale";
import { getLanguageSwitchLinkClasses } from "@/features/landing/utils/get-language-switch-link-classes";
import { getLocalePath } from "@/features/landing/utils/get-locale-path";

interface LanguageSwitchProps {
  locale: Locale;
  switchLanguageLabel: string;
}

const locales: Locale[] = ["vi", "en"];

/** Hai link VI / EN dạng segmented. Không đoán ngôn ngữ trình duyệt: người dùng tự bấm. */
export default function LanguageSwitch({ locale, switchLanguageLabel }: LanguageSwitchProps) {
  return (
    <nav aria-label={switchLanguageLabel} className="flex gap-1 rounded-xl bg-sunken p-1 shadow-segment-track">
      {locales.map((itemLocale) => {
        const isCurrent = itemLocale === locale;

        return (
          <Link
            key={itemLocale}
            href={getLocalePath(itemLocale)}
            hrefLang={itemLocale}
            lang={itemLocale}
            aria-current={isCurrent ? "page" : undefined}
            className={getLanguageSwitchLinkClasses(isCurrent)}
          >
            {itemLocale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
