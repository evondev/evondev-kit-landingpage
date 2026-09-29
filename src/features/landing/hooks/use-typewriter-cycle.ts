import { useEffect, useState } from "react";
import { motionTimings } from "@/features/landing/constants/motion-timings";

interface UseTypewriterCycleOptions {
  texts: string[];
  /** Tắt thì đứng yên ở câu đang chọn, hiện đủ chữ */
  isEnabled: boolean;
}

/**
 * Gõ lần lượt từng câu, gõ xong giữ một lúc rồi sang câu kế, hết thì vòng lại.
 * Ban đầu hiện đủ câu đầu (khớp HTML từ server), giữ xong mới bắt đầu gõ câu thứ hai.
 */
export function useTypewriterCycle({ texts, isEnabled }: UseTypewriterCycleOptions) {
  const [cycle, setCycle] = useState({ index: 0, typedLength: texts[0].length });

  const currentText = texts[cycle.index];
  const isTyping = cycle.typedLength < currentText.length;

  useEffect(() => {
    if (!isEnabled) return;

    const delay = isTyping ? motionTimings.typeCharacterMs : motionTimings.typeHoldMs;

    const timer = window.setTimeout(() => {
      setCycle((previous) => {
        if (previous.typedLength < texts[previous.index].length) {
          return { ...previous, typedLength: previous.typedLength + 1 };
        }

        return { index: (previous.index + 1) % texts.length, typedLength: 0 };
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [cycle, isEnabled, isTyping, texts]);

  function selectIndex(index: number) {
    setCycle({ index, typedLength: texts[index].length });
  }

  return {
    activeIndex: cycle.index,
    visibleText: currentText.slice(0, cycle.typedLength),
    selectIndex,
  };
}
