import SectionFrame from "@/features/landing/components/section-frame";
import SectionHeading from "@/features/landing/components/section-heading";
import SectionIndex from "@/features/landing/components/section-index";
import StatusTag from "@/features/landing/components/status-tag";
import TasteRuleCard from "@/features/landing/components/taste-rule-card";
import type { Dictionary } from "@/features/landing/types/dictionary";
import { getStyleChipClasses } from "@/features/landing/utils/get-style-chip-classes";

interface TasteSectionProps {
  number: number;
  dictionary: Dictionary["taste"];
}

export default function TasteSection({ number, dictionary }: TasteSectionProps) {
  return (
    <SectionFrame id="taste" labelledBy="taste-title">
      <SectionIndex number={number} label={dictionary.label} />
      <div className="px-5 py-16 sm:px-10 sm:py-24">
        <SectionHeading
          id="taste-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
        />
      </div>

      <ul className="grid grid-cols-1 gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {dictionary.rules.map((rule) => (
          <TasteRuleCard key={rule.id} rule={rule} />
        ))}
      </ul>

      <div className="flex flex-col gap-5 px-5 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-sm">
          <h3 className="font-medium text-foreground">{dictionary.stylesTitle}</h3>
          <p className="mt-1 text-sm text-pretty text-muted">{dictionary.stylesNote}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {dictionary.styles.map((style) => (
            <li key={style.name} className={getStyleChipClasses(style.isDefault)}>
              {style.name}
              {style.isDefault ? <StatusTag status="new" label={dictionary.defaultStyleLabel} /> : null}
            </li>
          ))}
        </ul>
      </div>
    </SectionFrame>
  );
}
