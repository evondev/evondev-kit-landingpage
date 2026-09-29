"use client";

import { Terminal } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import CopyButton from "@/features/landing/components/copy-button";
import SegmentedTabs from "@/features/landing/components/segmented-tabs";
import { useInView, usePrefersReducedMotion, useTypewriterCycle } from "@/features/landing/hooks";
import type { HeroPromptMode } from "@/features/landing/types/hero-prompt-mode";
import type { SegmentedTabItem } from "@/features/landing/types/segmented-tab-item";

interface HeroPromptBoxProps {
  modes: HeroPromptMode[];
  tabsLabel: string;
  copyLabel: string;
  copiedLabel: string;
}

const tabIdPrefix = "hero-mode";

/**
 * Hộp đề trên hero: tự gõ lần lượt đề mẫu của từng lối vào, như ô tìm kiếm của firecrawl.
 * Người xem bấm tab hay focus vào hộp thì thôi tự chạy (WCAG 2.2.2: dừng được thứ tự chuyển động).
 */
export default function HeroPromptBox({ modes, tabsLabel, copyLabel, copiedLabel }: HeroPromptBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [hasUserTakenOver, setHasUserTakenOver] = useState(false);

  const prefersReducedMotion = usePrefersReducedMotion();
  const isInView = useInView(boxRef);
  const prompts = useMemo(() => modes.map((mode) => mode.prompt), [modes]);

  const { activeIndex, visibleText, selectIndex } = useTypewriterCycle({
    texts: prompts,
    isEnabled: isInView && !prefersReducedMotion && !hasUserTakenOver,
  });

  const activeMode = modes[activeIndex];
  const isAutoPlaying = !prefersReducedMotion && !hasUserTakenOver;
  const tabs: SegmentedTabItem[] = modes.map((mode) => ({ id: mode.id, label: mode.tabLabel }));

  function handleModeChange(modeId: string) {
    const nextIndex = modes.findIndex((mode) => mode.id === modeId);

    if (nextIndex === -1) return;

    setHasUserTakenOver(true);
    selectIndex(nextIndex);
  }

  function handleTakeOver() {
    if (hasUserTakenOver) return;

    setHasUserTakenOver(true);
    selectIndex(activeIndex);
  }

  return (
    <div
      ref={boxRef}
      onFocusCapture={handleTakeOver}
      className="w-full max-w-2xl rounded-2xl border border-border-strong bg-surface text-left shadow-float"
    >
      <div
        id={`${tabIdPrefix}-panel-${activeMode.id}`}
        role="tabpanel"
        aria-labelledby={`${tabIdPrefix}-tab-${activeMode.id}`}
        className="flex min-h-20 items-start gap-3 px-4 py-4 sm:px-5"
      >
        <Terminal className="mt-0.5 size-4 shrink-0 text-faint" aria-hidden />
        <code className="min-w-0 flex-1 font-mono text-sm leading-relaxed text-foreground wrap-anywhere">
          <span aria-hidden>
            {visibleText}
            {isAutoPlaying ? (
              <span className="ml-px inline-block h-4 w-1.75 translate-y-0.5 bg-heat motion-safe:animate-caret-blink" />
            ) : null}
          </span>
          <span className="sr-only">{activeMode.prompt}</span>
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
