"use client";

import { Terminal } from "lucide-react";
import { useState } from "react";
import CopyButton from "@/features/landing/components/copy-button";
import SegmentedTabs from "@/features/landing/components/segmented-tabs";
import type { HeroPromptMode } from "@/features/landing/types/hero-prompt-mode";
import type { SegmentedTabItem } from "@/features/landing/types/segmented-tab-item";

interface HeroPromptBoxProps {
  modes: HeroPromptMode[];
  tabsLabel: string;
  copyLabel: string;
  copiedLabel: string;
}

const tabIdPrefix = "hero-mode";

/** Hộp đề trên hero: chọn một lối vào, xem câu đề mẫu, chép bằng nút cam. */
export default function HeroPromptBox({ modes, tabsLabel, copyLabel, copiedLabel }: HeroPromptBoxProps) {
  const [activeModeId, setActiveModeId] = useState(modes[0].id);

  const activeMode = modes.find((mode) => mode.id === activeModeId) ?? modes[0];
  const tabs: SegmentedTabItem[] = modes.map((mode) => ({ id: mode.id, label: mode.tabLabel }));

  function handleModeChange(modeId: string) {
    const nextMode = modes.find((mode) => mode.id === modeId);

    if (nextMode) setActiveModeId(nextMode.id);
  }

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-border-strong bg-surface text-left shadow-float">
      <div
        id={`${tabIdPrefix}-panel-${activeMode.id}`}
        role="tabpanel"
        aria-labelledby={`${tabIdPrefix}-tab-${activeMode.id}`}
        className="flex min-h-20 items-start gap-3 px-4 py-4 sm:px-5"
      >
        <Terminal className="mt-0.5 size-4 shrink-0 text-faint" aria-hidden />
        <code className="min-w-0 flex-1 font-mono text-sm leading-relaxed text-foreground [overflow-wrap:anywhere]">
          {activeMode.prompt}
        </code>
      </div>

      <div className="flex items-center gap-3 border-t border-border p-2.5">
        <div className="min-w-0 flex-1">
          <SegmentedTabs
            items={tabs}
            activeId={activeMode.id}
            label={tabsLabel}
            idPrefix={tabIdPrefix}
            onChange={handleModeChange}
          />
        </div>
        <CopyButton
          text={activeMode.prompt}
          copyLabel={copyLabel}
          copiedLabel={copiedLabel}
          variant="primary"
          className="h-9 w-12 rounded-xl"
        />
      </div>
    </div>
  );
}
