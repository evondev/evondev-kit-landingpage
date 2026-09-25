"use client";

import { useState } from "react";
import SegmentedTabs from "@/features/landing/components/segmented-tabs";
import ShowcaseCard from "@/features/landing/components/showcase-card";
import ShowcaseLightbox from "@/features/landing/components/showcase-lightbox";
import { showcaseLevels } from "@/features/landing/constants/showcase-levels";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { SegmentedTabItem } from "@/features/landing/types/segmented-tab-item";
import type { ShowcaseEntry } from "@/features/landing/types/showcase-entry";
import type { ShowcaseLevel } from "@/features/landing/types/showcase-level";
import type { ShowcaseTheme } from "@/features/landing/types/showcase-theme";

interface ShowcaseBrowserProps {
  entries: ShowcaseEntry[];
  dictionary: Dictionary["showcase"];
}

const tabIdPrefix = "showcase";

export default function ShowcaseBrowser({ entries, dictionary }: ShowcaseBrowserProps) {
  const [activeLevel, setActiveLevel] = useState<ShowcaseLevel>("component");
  const [theme, setTheme] = useState<ShowcaseTheme>("light");
  const [openedEntryId, setOpenedEntryId] = useState<string | null>(null);

  const levelTabs: SegmentedTabItem[] = showcaseLevels.map((level) => ({
    id: level,
    label: dictionary.tabs[level],
    count: entries.filter((entry) => entry.level === level).length,
  }));

  // Nút sáng / tối chỉ hiện khi đã có ít nhất một ảnh tối.
  const hasDarkImages = entries.some((entry) => entry.images?.dark);
  const themeTabs: SegmentedTabItem[] = [
    { id: "light", label: dictionary.lightLabel },
    { id: "dark", label: dictionary.darkLabel },
  ];

  const visibleEntries = entries.filter((entry) => entry.level === activeLevel);
  const openedEntry = entries.find((entry) => entry.id === openedEntryId) ?? null;

  function handleLevelChange(level: string) {
    setActiveLevel(level as ShowcaseLevel);
  }

  function handleThemeChange(nextTheme: string) {
    setTheme(nextTheme as ShowcaseTheme);
  }

  return (
    <div className="mt-12">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <SegmentedTabs
          items={levelTabs}
          activeId={activeLevel}
          label={dictionary.eyebrow}
          idPrefix={tabIdPrefix}
          onChange={handleLevelChange}
        />
        {hasDarkImages ? (
          <SegmentedTabs
            items={themeTabs}
            activeId={theme}
            label={dictionary.themeLabel}
            idPrefix={`${tabIdPrefix}-theme`}
            onChange={handleThemeChange}
          />
        ) : null}
      </div>

      <div
        id={`${tabIdPrefix}-panel-${activeLevel}`}
        role="tabpanel"
        aria-labelledby={`${tabIdPrefix}-tab-${activeLevel}`}
        className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visibleEntries.map((entry) => (
          <ShowcaseCard
            key={entry.id}
            entry={entry}
            theme={theme}
            dictionary={dictionary}
            onOpen={() => setOpenedEntryId(entry.id)}
          />
        ))}
      </div>

      <ShowcaseLightbox
        entry={openedEntry}
        theme={theme}
        dictionary={dictionary}
        onClose={() => setOpenedEntryId(null)}
      />
    </div>
  );
}
