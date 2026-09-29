import LogoMark from "@/features/landing/components/logo-mark";
import SectionFrame from "@/features/landing/components/section-frame";
import { githubOwnerUrl, githubRepoUrl } from "@/features/landing/constants/site-links";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface SiteFooterProps {
  dictionary: Dictionary;
}

const footerLinkClasses =
  "rounded-md underline-offset-4 outline-hidden hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-heat/60";

export default function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className="border-b border-border">
      <SectionFrame>
        <div className="flex flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
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
            <li className="font-mono text-xs">{dictionary.footer.license}</li>
          </ul>
        </div>
      </SectionFrame>
    </footer>
  );
}
