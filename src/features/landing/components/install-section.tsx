import InstallSteps from "@/features/landing/components/install-steps";
import InstallTabs from "@/features/landing/components/install-tabs";
import SectionFrame from "@/features/landing/components/section-frame";
import SectionHeading from "@/features/landing/components/section-heading";
import SectionIndex from "@/features/landing/components/section-index";
import { installToolIcons } from "@/features/landing/constants/install-tool-icons";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { Locale } from "@/features/landing/types/locale";
import type { SegmentedTabItem } from "@/features/landing/types/segmented-tab-item";
import { buildInstallEntries } from "@/features/landing/utils/build-install-entries";

interface InstallSectionProps {
  number: number;
  locale: Locale;
  dictionary: Dictionary;
}

export default function InstallSection({ number, locale, dictionary }: InstallSectionProps) {
  const tools = buildInstallEntries(locale);

  const tabs: SegmentedTabItem[] = tools.map((tool) => {
    const Icon = installToolIcons[tool.id];

    return { id: tool.id, label: tool.name, icon: <Icon className="size-4 shrink-0" aria-hidden /> };
  });

  // Khối lệnh render sẵn ở server, client chỉ lo đổi tab.
  const panels = tools.map((tool) => ({
    id: tool.id,
    content: <InstallSteps tool={tool} dictionary={dictionary} />,
  }));

  return (
    <SectionFrame id="install" labelledBy="install-title">
      <SectionIndex number={number} label={dictionary.install.label} />
      <div className="grid grid-cols-1 gap-12 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <SectionHeading
          id="install-title"
          eyebrow={dictionary.install.eyebrow}
          title={dictionary.install.title}
          description={dictionary.install.description}
          className="lg:sticky lg:top-28 lg:self-start"
        />
        <div className="min-w-0">
          <InstallTabs tabs={tabs} panels={panels} tabsLabel={dictionary.install.tabsLabel} />
        </div>
      </div>
    </SectionFrame>
  );
}
