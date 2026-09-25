import LogoMark from "@/features/landing/components/logo-mark";
import { githubOwnerUrl, githubRepoUrl } from "@/features/landing/constants/site-links";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface SiteFooterProps {
  dictionary: Dictionary;
}

const footerLinkClasses =
  "rounded-md underline-offset-4 outline-hidden hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-foreground/50";

export default function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className="mt-24 border-t border-border sm:mt-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <LogoMark />
          <p className="mt-2 text-sm text-muted">{dictionary.footer.tagline}</p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <li>
            <a href={githubOwnerUrl} target="_blank" rel="noreferrer" className={footerLinkClasses}>
              evondev
            </a>
          </li>
          <li>
            <a href={githubRepoUrl} target="_blank" rel="noreferrer" className={footerLinkClasses}>
              {dictionary.header.github}
            </a>
          </li>
          <li>{dictionary.footer.license}</li>
        </ul>
      </div>
    </footer>
  );
}
