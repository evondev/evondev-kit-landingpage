import { Monitor, Smartphone } from "lucide-react";
import type { WireframeLabels } from "@/features/landing/types/dictionary";
import { cn } from "@/utils/cn";

interface WireframeToolbarProps {
  labels: WireframeLabels;
}

const wireframeOptions: string[] = ["A", "B", "C"];

/** Thanh công cụ trên trang wireframe: phương án, màu, khổ màn, trạng thái. Chỉ để minh hoạ. */
export default function WireframeToolbar({ labels }: WireframeToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-border px-3 py-2.5 text-xs text-muted">
      <span className="flex items-center gap-1.5">
        {labels.optionLabel}
        <span className="flex gap-0.5 rounded-lg bg-secondary p-0.5">
          {wireframeOptions.map((option, index) => (
            <span
              key={option}
              className={cn(
                "rounded-md px-2 py-0.5",
                index === 0 && "bg-surface font-medium text-foreground shadow-segment-thumb",
              )}
            >
              {option}
            </span>
          ))}
        </span>
      </span>
      <span className="flex items-center gap-1.5">
        {labels.colorLabel}
        <span className="flex h-4 w-7 items-center rounded-full bg-border-strong p-0.5">
          <span className="size-3 rounded-full bg-surface shadow-segment-thumb" />
        </span>
      </span>
      <span className="flex gap-0.5 rounded-lg bg-secondary p-0.5">
        <span className="flex items-center gap-1 rounded-md bg-surface px-2 py-0.5 font-medium text-foreground shadow-segment-thumb">
          <Monitor className="size-3" aria-hidden />
          {labels.desktopLabel}
        </span>
        <span className="flex items-center gap-1 px-2 py-0.5">
          <Smartphone className="size-3" aria-hidden />
          {labels.mobileLabel}
        </span>
      </span>
      <span>
        {labels.stateLabel}: <span className="font-medium text-foreground">{labels.stateValue}</span>
      </span>
    </div>
  );
}
