"use client";

import type { KeyboardEvent } from "react";
import { Button } from "@/components/button";
import type { SegmentedTabItem } from "@/features/landing/types/segmented-tab-item";
import { getSegmentedTabClasses } from "@/features/landing/utils/get-segmented-tab-classes";

interface SegmentedTabsProps {
  items: SegmentedTabItem[];
  activeId: string;
  label: string;
  /** Tiền tố id để nối tab với tabpanel: `${idPrefix}-tab-${id}` và `${idPrefix}-panel-${id}` */
  idPrefix: string;
  onChange: (id: string) => void;
}

/** Tab `segmented` của skill (components/small-controls.md). Bàn phím theo WAI-ARIA. */
export default function SegmentedTabs({ items, activeId, label, idPrefix, onChange }: SegmentedTabsProps) {
  function focusTab(id: string) {
    onChange(id);
    document.getElementById(`${idPrefix}-tab-${id}`)?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const currentIndex = items.findIndex((item) => item.id === activeId);
    const lastIndex = items.length - 1;

    if (event.key === "ArrowRight") focusTab(items[currentIndex === lastIndex ? 0 : currentIndex + 1].id);
    if (event.key === "ArrowLeft") focusTab(items[currentIndex === 0 ? lastIndex : currentIndex - 1].id);
    if (event.key === "Home") focusTab(items[0].id);
    if (event.key === "End") focusTab(items[lastIndex].id);
  }

  return (
    // Hàng tab không wrap: màn hẹp thì cuộn ngang trong khung (R6). -m/p để vòng focus không bị cắt.
    <div className="scrollbar-clean -m-1 max-w-full overflow-x-auto p-1">
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={handleKeyDown}
        className="inline-flex w-fit gap-0.5 rounded-xl bg-secondary p-1"
      >
        {items.map((item) => {
          const isSelected = item.id === activeId;

          return (
            <Button
              key={item.id}
              id={`${idPrefix}-tab-${item.id}`}
              variant="ghost"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`${idPrefix}-panel-${item.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onChange(item.id)}
              className={getSegmentedTabClasses(isSelected)}
            >
              {item.icon}
              {item.label}
              {item.count !== undefined ? (
                <span className="font-mono text-xs font-normal text-muted tabular-nums">{item.count}</span>
              ) : null}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
