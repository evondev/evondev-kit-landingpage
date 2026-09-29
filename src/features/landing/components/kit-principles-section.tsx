import KitPrincipleCard from "@/features/landing/components/kit-principle-card";
import SectionFrame from "@/features/landing/components/section-frame";
import SectionHeading from "@/features/landing/components/section-heading";
import SectionIndex from "@/features/landing/components/section-index";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface KitPrinciplesSectionProps {
  number: number;
  total: number;
  dictionary: Dictionary["kitHome"]["principles"];
}

export default function KitPrinciplesSection({ number, total, dictionary }: KitPrinciplesSectionProps) {
  return (
    <SectionFrame id="principles" labelledBy="principles-title">
      <SectionIndex number={number} total={total} label={dictionary.label} />
      <div className="px-5 py-16 sm:px-10 sm:py-24">
        <SectionHeading
          id="principles-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
        />
      </div>
      <ul className="grid grid-cols-1 gap-px border-t border-border bg-border lg:grid-cols-3">
        {dictionary.items.map((principle) => (
          <KitPrincipleCard key={principle.icon} principle={principle} />
        ))}
      </ul>
    </SectionFrame>
  );
}
