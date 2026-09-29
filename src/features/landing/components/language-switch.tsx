import Link from "next/link";
import type { Locale } from "@/features/landing/types/locale";
import type { SitePage } from "@/features/landing/types/site-page";
import { getLanguageSwitchLinkClasses } from "@/features/landing/utils/get-language-switch-link-classes";
import { getLocalePath } from "@/features/landing/utils/get-locale-path";

interface LanguageSwitchProps {
  locale: Locale;
  page: SitePage;
  switchLanguageLabel: string;
}

const locales: Locale[] = ["vi", "en"];

/** Hai link VI / EN dạng segmented, sang đúng trang đang xem ở thứ tiếng kia. Không đoán ngôn ngữ trình duyệt. */
export default function LanguageSwitch({ locale, page, switchLanguageLabel }: LanguageSwitchProps) {
  return (
    <nav aria-label={switchLanguageLabel} className="flex gap-0.5 rounded-xl bg-secondary p-1">
      {locales.map((itemLocale) => {
        const isCurrent = itemLocale === locale;

        return (
          <Link
            key={itemLocale}
            href={getLocalePath(itemLocale, page)}
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
