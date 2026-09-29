import { ButtonLink } from "@/components/button";
import AsciiField from "@/features/landing/components/ascii-field";
import CommandBlock from "@/features/landing/components/command-block";
import EyebrowTag from "@/features/landing/components/eyebrow-tag";
import SectionFrame from "@/features/landing/components/section-frame";
import { installCommands } from "@/features/landing/constants/install-commands";
import { githubRepoUrl } from "@/features/landing/constants/site-links";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface CtaSectionProps {
  dictionary: Dictionary;
}

/** Khối kêu gọi cuối trang, hai bên là lưới ô như hero. */
export default function CtaSection({ dictionary }: CtaSectionProps) {
  const { cta } = dictionary;

  return (
    <SectionFrame labelledBy="cta-title">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr]">
        <div aria-hidden className="relative hidden border-r border-border lg:block">
          {/* Lệch ra 1px: đường kẻ đầu của lưới đè lên viền trên section và đường ray, không thành viền đôi. */}
          <div className="bg-cells absolute -inset-px [--cell-columns:3]" />
        </div>
        <div className="relative isolate flex flex-col items-center px-5 py-20 text-center sm:px-10 sm:py-24">
          <AsciiField shape="ring" className="absolute inset-0 -z-10 hidden size-full opacity-70 sm:block" />
          <EyebrowTag label={cta.eyebrow} />
          <h2
            id="cta-title"
            className="mt-6 text-3xl font-medium tracking-tight text-balance text-foreground sm:text-5xl"
          >
            {cta.title}
          </h2>
          <p className="mt-5 max-w-md text-pretty text-muted">{cta.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="#install" variant="primary">
              {cta.primaryCta}
            </ButtonLink>
            <a
              href={githubRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl bg-secondary px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors outline-hidden hover:bg-secondary-hover focus-visible:ring-2 focus-visible:ring-heat/60"
            >
              {cta.secondaryCta}
            </a>
          </div>
          <CommandBlock
            commands={installCommands}
            copyLabels={dictionary.copyButton}
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
