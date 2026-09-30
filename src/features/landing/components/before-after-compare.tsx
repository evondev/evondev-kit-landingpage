"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";
import BeforeAfterSlider from "@/features/landing/components/before-after-slider";
import BrowserFrame from "@/features/landing/components/browser-frame";
import SegmentedTabs from "@/features/landing/components/segmented-tabs";
import { beforeAfterImages } from "@/features/landing/constants/before-after-images";
import { beforeAfterPairs } from "@/features/landing/constants/before-after-pairs";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { SegmentedTabItem } from "@/features/landing/types/segmented-tab-item";

interface BeforeAfterCompareProps {
  dictionary: Dictionary["beforeAfter"];
}

const tabIdPrefix = "before-after";

export default function BeforeAfterCompare({ dictionary }: BeforeAfterCompareProps) {
  const [activePairId, setActivePairId] = useState(beforeAfterPairs[0].id);

  const pairTabs: SegmentedTabItem[] = beforeAfterPairs.map((pair) => ({
    id: pair.id,
    label: `${dictionary.stages[pair.left]} → ${dictionary.stages[pair.right]}`,
  }));

  const activePair = beforeAfterPairs.find((pair) => pair.id === activePairId) ?? beforeAfterPairs[0];
  const leftImage = beforeAfterImages[activePair.left];
  const rightImage = beforeAfterImages[activePair.right];

  return (
    <div className="mt-12 flex flex-col items-center gap-8 sm:mt-16">
      <SegmentedTabs
        items={pairTabs}
        activeId={activePair.id}
        label={dictionary.pairLabel}
        idPrefix={tabIdPrefix}
        onChange={setActivePairId}
      />

      <div
        id={`${tabIdPrefix}-panel-${activePair.id}`}
        role="tabpanel"
        aria-labelledby={`${tabIdPrefix}-tab-${activePair.id}`}
        className="reveal w-full"
      >
        <BrowserFrame label={dictionary.windowLabel}>
          {leftImage && rightImage ? (
            <BeforeAfterSlider
              left={{ image: leftImage, label: dictionary.stages[activePair.left], alt: dictionary.imageAlts[activePair.left] }}
              right={{ image: rightImage, label: dictionary.stages[activePair.right], alt: dictionary.imageAlts[activePair.right] }}
              sliderLabel={dictionary.sliderLabel}
            />
          ) : (
            <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 bg-sunken text-sm text-muted">
              <ImageOff className="size-5" aria-hidden />
              {dictionary.placeholder}
            </div>
          )}
        </BrowserFrame>
      </div>

      <p className="text-center text-sm text-pretty text-muted">{dictionary.hint}</p>
    </div>
  );
}
