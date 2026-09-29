import { ButtonLink } from "@/components/button";
import AsciiField from "@/features/landing/components/ascii-field";
import CommandBlock from "@/features/landing/components/command-block";
import EyebrowTag from "@/features/landing/components/eyebrow-tag";
import SectionFrame from "@/features/landing/components/section-frame";
import { installCommands } from "@/features/landing/constants/install-commands";
import { githubRepoUrl } from "@/features/landing/constants/site-links";
import type { CtaContent, Dictionary } from "@/features/landing/types/dictionary";

interface CtaSectionProps {
  id?: string;
  content: CtaContent;
  primaryHref: string;
  copyLabels: Dictionary["copyButton"];
}

/** Khối kêu gọi cài đặt cuối trang, hai bên là lưới ô như hero. Dùng cho trang chủ lẫn trang skill. */
export default function CtaSection({ id, content, primaryHref, copyLabels }: CtaSectionProps) {
  return (
    <SectionFrame id={id} labelledBy="cta-title">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr]">
        <div aria-hidden className="relative hidden border-r border-border lg:block">
          {/* Lệch ra 1px: đường kẻ đầu của lưới đè lên viền trên section và đường ray, không thành viền đôi. */}
          <div className="bg-cells absolute -inset-px [--cell-columns:3]" />
        </div>
        <div className="relative isolate flex flex-col items-center px-5 py-20 text-center sm:px-10 sm:py-24">
          <AsciiField shape="ring" className="absolute inset-0 -z-10 hidden size-full opacity-70 sm:block" />
          <EyebrowTag label={content.eyebrow} />
          <h2
            id="cta-title"
            className="mt-6 text-3xl font-medium tracking-tight text-balance text-foreground sm:text-5xl"
          >
            {content.title}
          </h2>
          <p className="mt-5 max-w-md text-pretty text-muted">{content.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={primaryHref} variant="primary">
              {content.primaryCta}
            </ButtonLink>
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl bg-secondary px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors outline-hidden hover:bg-secondary-hover focus-visible:ring-2 focus-visible:ring-heat/60"
            >
              {content.secondaryCta}
            </a>
          </div>
          <CommandBlock
            commands={installCommands}
            copyLabels={copyLabels}
            className="mt-10 w-full max-w-md"
          />
        </div>
        <div aria-hidden className="relative hidden border-l border-border lg:block">
          <div className="bg-cells absolute -inset-px [--cell-columns:3]" />
        </div>
      </div>
    </SectionFrame>
  );
}
