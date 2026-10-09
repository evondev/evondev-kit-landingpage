import RoadmapCard from "@/features/landing/components/roadmap-card";
import RoadmapPlaceholderCard from "@/features/landing/components/roadmap-placeholder-card";
import SectionFrame from "@/features/landing/components/section-frame";
import SectionHeading from "@/features/landing/components/section-heading";
import SectionIndex from "@/features/landing/components/section-index";
import { roadmapPlaceholderCount } from "@/features/landing/constants/roadmap-placeholder-count";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface RoadmapSectionProps {
  number: number;
  dictionary: Dictionary["roadmap"];
  soonLabel: string;
}

/** Tính năng chưa có: hiện rõ là sắp có, không hứa như đã xong. */
export default function RoadmapSection({ number, dictionary, soonLabel }: RoadmapSectionProps) {
  const placeholderKeys = Array.from({ length: roadmapPlaceholderCount }, (_, index) => `placeholder-${index}`);

  return (
    <SectionFrame id="roadmap" labelledBy="roadmap-title">
      <SectionIndex number={number} label={dictionary.label} />
      <div className="px-5 py-16 sm:px-10 sm:py-24">
        <SectionHeading
          id="roadmap-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
          isCentered
        />
      </div>
      <ul className="grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-2">
        {dictionary.items.map((item) => (
          <RoadmapCard key={item.icon} item={item} soonLabel={soonLabel} />
        ))}
        {placeholderKeys.map((placeholderKey, index) => (
          <RoadmapPlaceholderCard
            key={placeholderKey}
            label={dictionary.placeholderLabel}
            soonLabel={soonLabel}
            isHiddenOnMobile={index > 0}
          />
        ))}
      </ul>
    </SectionFrame>
  );
}
