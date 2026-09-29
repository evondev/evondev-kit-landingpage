import SectionFrame from "@/features/landing/components/section-frame";
import SectionHeading from "@/features/landing/components/section-heading";
import SectionIndex from "@/features/landing/components/section-index";
import ShowcaseBrowser from "@/features/landing/components/showcase-browser";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { Locale } from "@/features/landing/types/locale";
import { buildShowcaseEntries } from "@/features/landing/utils/build-showcase-entries";

interface ShowcaseSectionProps {
  number: number;
  locale: Locale;
  dictionary: Dictionary["showcase"];
}

export default function ShowcaseSection({ number, locale, dictionary }: ShowcaseSectionProps) {
  const entries = buildShowcaseEntries(locale);

  return (
    <SectionFrame id="showcase" labelledBy="showcase-title">
      <SectionIndex number={number} label={dictionary.label} />
      <div className="px-5 py-16 sm:px-10 sm:py-24">
        <SectionHeading
          id="showcase-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
          isCentered
        />
        <ShowcaseBrowser entries={entries} dictionary={dictionary} />
        {dictionary.languageNote ? (
          <p className="mt-8 text-center text-sm text-muted">{dictionary.languageNote}</p>
        ) : null}
      </div>
    </SectionFrame>
  );
}
