import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { IconGithub } from "@/components/icons/icon-github";
import LanguageSwitch from "@/features/landing/components/language-switch";
import LogoMark from "@/features/landing/components/logo-mark";
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
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link
          href={getLocalePath(locale)}
          aria-label={dictionary.homeLabel}
          className="rounded-lg outline-hidden focus-visible:ring-2 focus-visible:ring-foreground/50"
        >
          <LogoMark />
        </Link>

        <nav className="ml-6 hidden items-center gap-1 md:flex">
          <ButtonLink href="#showcase" variant="ghost" className="h-9 px-3 py-0">
            {dictionary.showcase}
          </ButtonLink>
          <ButtonLink href="#install" variant="ghost" className="h-9 px-3 py-0">
            {dictionary.install}
          </ButtonLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitch locale={locale} switchLanguageLabel={dictionary.switchLanguageLabel} />
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={dictionary.github}
            title={dictionary.github}
            className="grid size-9 place-items-center rounded-xl text-muted transition-colors outline-hidden hover:bg-foreground/5 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/50"
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
