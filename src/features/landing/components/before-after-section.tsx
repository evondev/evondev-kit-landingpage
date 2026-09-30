import BeforeAfterCompare from "@/features/landing/components/before-after-compare";
import SectionFrame from "@/features/landing/components/section-frame";
import SectionHeading from "@/features/landing/components/section-heading";
import SectionIndex from "@/features/landing/components/section-index";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface BeforeAfterSectionProps {
  number: number;
  dictionary: Dictionary["beforeAfter"];
}

export default function BeforeAfterSection({ number, dictionary }: BeforeAfterSectionProps) {
  return (
    <SectionFrame id="before-after" labelledBy="before-after-title">
      <SectionIndex number={number} label={dictionary.label} />
      <div className="px-5 py-16 sm:px-10 sm:py-24">
        <SectionHeading
          id="before-after-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
          isCentered
        />
        <BeforeAfterCompare dictionary={dictionary} />
      </div>
    </SectionFrame>
  );
}
