"use client";

import { useState } from "react";
import SegmentedTabs from "@/features/landing/components/segmented-tabs";
import type { InstallPanel } from "@/features/landing/types/install-panel";
import type { SegmentedTabItem } from "@/features/landing/types/segmented-tab-item";

interface InstallTabsProps {
  tabs: SegmentedTabItem[];
  panels: InstallPanel[];
  tabsLabel: string;
}

const tabIdPrefix = "install";

export default function InstallTabs({ tabs, panels, tabsLabel }: InstallTabsProps) {
  const [activeToolId, setActiveToolId] = useState(tabs[0].id);

  return (
    <div>
      <SegmentedTabs
        items={tabs}
        activeId={activeToolId}
        label={tabsLabel}
        idPrefix={tabIdPrefix}
        onChange={setActiveToolId}
      />
      {/* Render đủ mọi panel, ẩn bằng hidden: lệnh vẫn nằm trong HTML cho máy tìm kiếm và Ctrl+F. */}
      {panels.map((panel) => (
        <div
          key={panel.id}
          id={`${tabIdPrefix}-panel-${panel.id}`}
          role="tabpanel"
          aria-labelledby={`${tabIdPrefix}-tab-${panel.id}`}
          hidden={panel.id !== activeToolId}
          className="mt-4 rounded-2xl border border-border bg-surface shadow-float-lg"
        >
          {panel.content}
        </div>
      ))}
    </div>
  );
}
