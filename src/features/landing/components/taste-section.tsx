import SectionHeading from "@/features/landing/components/section-heading";
import TasteRuleRow from "@/features/landing/components/taste-rule-row";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface TasteSectionProps {
  dictionary: Dictionary["taste"];
}

export default function TasteSection({ dictionary }: TasteSectionProps) {
  return (
    <section aria-labelledby="taste-title" className="pt-24 sm:pt-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="taste-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
          isCentered
        />

        <ul className="mt-20 space-y-24 sm:space-y-32">
          {dictionary.rules.map((rule, index) => (
            <TasteRuleRow key={rule.id} rule={rule} isReversed={index % 2 === 1} />
          ))}
        </ul>
      </div>
    </section>
  );
}
