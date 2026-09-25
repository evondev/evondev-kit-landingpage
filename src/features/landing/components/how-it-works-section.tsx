import SectionHeading from "@/features/landing/components/section-heading";
import { howItWorksIcons } from "@/features/landing/constants/how-it-works-icons";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface HowItWorksSectionProps {
  dictionary: Dictionary["howItWorks"];
}

export default function HowItWorksSection({ dictionary }: HowItWorksSectionProps) {
  return (
    <section aria-labelledby="how-it-works-title" className="pt-24 sm:pt-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="how-it-works-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
          isCentered
        />

        <ol className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {dictionary.steps.map((step, index) => {
            const Icon = howItWorksIcons[index];

            return (
              <li key={step.title} className="flex min-w-0 flex-col">
                <h3 className="flex items-center gap-2.5 font-semibold text-foreground">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-border bg-surface text-primary shadow-float">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  {step.title}
                </h3>
                <p className="mt-3 text-pretty md:flex-1">{step.description}</p>
                <p className="mt-5 rounded-xl border border-border bg-sunken p-4 font-mono text-xs leading-relaxed text-foreground [overflow-wrap:anywhere]">
                  {step.sample}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
