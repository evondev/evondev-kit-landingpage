import ModeCard from "@/features/landing/components/mode-card";
import SectionFrame from "@/features/landing/components/section-frame";
import SectionHeading from "@/features/landing/components/section-heading";
import SectionIndex from "@/features/landing/components/section-index";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface ModesSectionProps {
  number: number;
  dictionary: Dictionary["modes"];
  statusLabels: Dictionary["statusLabels"];
}

export default function ModesSection({ number, dictionary, statusLabels }: ModesSectionProps) {
  return (
    <SectionFrame id="modes" labelledBy="modes-title">
      <SectionIndex number={number} label={dictionary.label} />
      <div className="px-5 py-16 sm:px-10 sm:py-24">
        <SectionHeading
          id="modes-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
          isCentered
        />
      </div>
      <ul className="grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {dictionary.items.map((mode) => (
          <ModeCard key={mode.id} mode={mode} promptLabel={dictionary.promptLabel} statusLabels={statusLabels} />
        ))}
      </ul>
    </SectionFrame>
  );
}
