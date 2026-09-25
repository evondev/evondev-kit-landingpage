import GlowBackdrop from "@/features/landing/components/glow-backdrop";
import SectionHeading from "@/features/landing/components/section-heading";
import ShowcaseBrowser from "@/features/landing/components/showcase-browser";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { Locale } from "@/features/landing/types/locale";
import { buildShowcaseEntries } from "@/features/landing/utils/build-showcase-entries";

interface ShowcaseSectionProps {
  locale: Locale;
  dictionary: Dictionary["showcase"];
}

export default function ShowcaseSection({ locale, dictionary }: ShowcaseSectionProps) {
  const entries = buildShowcaseEntries(locale);

  return (
    <section id="showcase" aria-labelledby="showcase-title" className="pt-24 sm:pt-32">
      <div className="relative isolate mx-auto w-full max-w-6xl px-4 sm:px-6">
        <GlowBackdrop tone="violet" className="top-1/3 -left-40 size-[560px]" />
        <GlowBackdrop tone="blue" className="-right-40 bottom-0 size-[560px]" />
        <SectionHeading
          id="showcase-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
          isCentered
        />
        <ShowcaseBrowser entries={entries} dictionary={dictionary} />
        {dictionary.languageNote ? <p className="mt-6 text-sm text-muted">{dictionary.languageNote}</p> : null}
      </div>
    </section>
  );
}
