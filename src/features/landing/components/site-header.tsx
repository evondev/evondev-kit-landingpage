import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { IconGithub } from "@/components/icons/icon-github";
import LanguageSwitch from "@/features/landing/components/language-switch";
import LogoMark from "@/features/landing/components/logo-mark";
import { headerNavItems } from "@/features/landing/constants/header-nav-items";
import { githubRepoUrl } from "@/features/landing/constants/site-links";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { Locale } from "@/features/landing/types/locale";
import { getLocalePath } from "@/features/landing/utils/get-locale-path";

interface SiteHeaderProps {
  locale: Locale;
  dictionary: Dictionary["header"];
}

export default function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 mt-3 border-y border-border bg-background/90 px-4 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex h-16 w-full max-w-[1112px] items-center gap-3 border-x border-border px-4 sm:px-6">
        <Link
          href={getLocalePath(locale)}
          aria-label={dictionary.homeLabel}
          className="rounded-lg outline-hidden focus-visible:ring-2 focus-visible:ring-heat/60"
        >
          <LogoMark />
        </Link>

        <nav aria-label={dictionary.navLabel} className="mx-auto hidden items-center gap-1 lg:flex">
          {headerNavItems.map((item) => (
            <ButtonLink
              key={item.href}
              href={item.href}
              variant="ghost"
              className="h-9 px-3 py-0 text-[15px] font-normal text-foreground"
            >
              {dictionary[item.labelKey]}
            </ButtonLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <LanguageSwitch locale={locale} switchLanguageLabel={dictionary.switchLanguageLabel} />
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={dictionary.github}
            title={dictionary.github}
            className="grid size-9 place-items-center rounded-xl text-foreground transition-colors outline-hidden hover:bg-background-hover focus-visible:ring-2 focus-visible:ring-heat/60"
          >
            <IconGithub className="size-5" aria-hidden />
          </a>
          <ButtonLink href="#install" variant="primary" className="hidden h-9 py-0 sm:inline-flex">
            {dictionary.installCta}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
