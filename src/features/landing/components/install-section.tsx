import CommandBlock from "@/features/landing/components/command-block";
import DotGrid from "@/features/landing/components/dot-grid";
import GlowBackdrop from "@/features/landing/components/glow-backdrop";
import InstallTabs from "@/features/landing/components/install-tabs";
import SectionHeading from "@/features/landing/components/section-heading";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { Locale } from "@/features/landing/types/locale";
import { buildInstallEntries } from "@/features/landing/utils/build-install-entries";

interface InstallSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function InstallSection({ locale, dictionary }: InstallSectionProps) {
  const tools = buildInstallEntries(locale);

  // Khối lệnh render sẵn ở server, client chỉ lo đổi tab.
  const panels = tools.map((tool) => ({
    id: tool.id,
    content: (
      <ol className="divide-y divide-border">
        {tool.steps.map((step, index) => (
          <li key={step.description} className="flex gap-4 p-5 sm:p-6">
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-accent-border bg-accent-soft font-mono text-xs text-accent tabular-nums">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="pt-0.5 text-pretty text-foreground">{step.description}</p>
              {step.commands.length > 0 ? (
                <CommandBlock commands={step.commands} copyLabels={dictionary.copyButton} className="mt-3" />
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    ),
  }));

  return (
    <section id="install" aria-labelledby="install-title" className="pt-24 sm:pt-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <SectionHeading
          id="install-title"
          eyebrow={dictionary.install.eyebrow}
          title={dictionary.install.title}
          description={dictionary.install.description}
        />
        <div className="relative isolate min-w-0">
          <DotGrid className="-inset-10" />
          <GlowBackdrop tone="blue" className="-inset-12" />
          <InstallTabs
            tabs={tools.map((tool) => ({ id: tool.id, label: tool.name }))}
            panels={panels}
            tabsLabel={dictionary.install.tabsLabel}
          />
        </div>
      </div>
    </section>
  );
}
