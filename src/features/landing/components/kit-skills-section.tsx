import KitSkillCard from "@/features/landing/components/kit-skill-card";
import KitSkillPlaceholderCard from "@/features/landing/components/kit-skill-placeholder-card";
import SectionFrame from "@/features/landing/components/section-frame";
import SectionHeading from "@/features/landing/components/section-heading";
import SectionIndex from "@/features/landing/components/section-index";
import { kitSkillPlaceholderCount } from "@/features/landing/constants/kit-skill-placeholder-count";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { Locale } from "@/features/landing/types/locale";

interface KitSkillsSectionProps {
  number: number;
  total: number;
  locale: Locale;
  dictionary: Dictionary;
}

export default function KitSkillsSection({ number, total, locale, dictionary }: KitSkillsSectionProps) {
  const { skills } = dictionary.kitHome;
  const placeholderKeys = Array.from({ length: kitSkillPlaceholderCount }, (_, index) => `placeholder-${index}`);

  return (
    <SectionFrame id="skills" labelledBy="skills-title">
      <SectionIndex number={number} total={total} label={skills.label} />
      <div className="px-5 py-16 sm:px-10 sm:py-24">
        <SectionHeading
          id="skills-title"
          eyebrow={skills.eyebrow}
          title={skills.title}
          description={skills.description}
          isCentered
        />
      </div>
      <ul className="grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-3">
        {skills.items.map((skill) => (
          <KitSkillCard
            key={skill.id}
            skill={skill}
            locale={locale}
            detailLabel={skills.detailLabel}
            statusLabels={dictionary.statusLabels}
          />
        ))}
        {placeholderKeys.map((placeholderKey, index) => (
          <KitSkillPlaceholderCard
            key={placeholderKey}
            placeholder={skills.placeholder}
            soonLabel={dictionary.statusLabels.soon}
            isHiddenOnMobile={index > 0}
          />
        ))}
      </ul>
    </SectionFrame>
  );
}
