import DottedDivider from "@/features/landing/components/dotted-divider";
import SectionHeading from "@/features/landing/components/section-heading";
import TestedBadge from "@/features/landing/components/tested-badge";
import { platformIcons } from "@/features/landing/constants/platform-icons";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface PlatformsSectionProps {
  dictionary: Dictionary["platforms"];
}

export default function PlatformsSection({ dictionary }: PlatformsSectionProps) {
  return (
    <section aria-labelledby="platforms-title" className="pt-24 sm:pt-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="platforms-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
          isCentered
        />

        <DottedDivider className="mt-16" />
        <ul className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-3 md:gap-8">
          {dictionary.items.map((platform, index) => {
            const Icon = platformIcons[index];

            return (
              <li key={platform.name} className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-border bg-surface text-primary shadow-float">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <h3 className="font-semibold text-foreground">{platform.name}</h3>
                  <TestedBadge
                    isTested={platform.isTested}
                    label={platform.isTested ? dictionary.testedBadge : dictionary.untestedBadge}
                  />
                </div>
                <p className="mt-3 text-pretty">{platform.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
