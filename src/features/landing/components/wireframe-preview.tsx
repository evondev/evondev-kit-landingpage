import SkeletonLine from "@/features/landing/components/skeleton-line";
import StatusTag from "@/features/landing/components/status-tag";
import WireframeBlock from "@/features/landing/components/wireframe-block";
import WireframeToolbar from "@/features/landing/components/wireframe-toolbar";
import type { WireframeLabels } from "@/features/landing/types/dictionary";

interface WireframePreviewProps {
  labels: WireframeLabels;
}

const wireframeRowCount = 5;

/** Hình minh hoạ trang wireframe xám của nhánh U: thanh công cụ, khối đánh số, khung lý do. */
export default function WireframePreview({ labels }: WireframePreviewProps) {
  const rowKeys = Array.from({ length: wireframeRowCount }, (_, index) => `row-${index}`);

  return (
    <figure
      aria-label={labels.toolbarLabel}
      className="overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-float"
    >
      <WireframeToolbar labels={labels} />

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px]">
        <div aria-hidden className="space-y-5 p-5">
          <WireframeBlock number={1} className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <SkeletonLine className="h-3 w-28 bg-foreground/30" />
              <SkeletonLine className="w-40" />
            </div>
            <span className="h-7 w-20 rounded-lg bg-foreground/60" />
          </WireframeBlock>

          <WireframeBlock number={2} className="flex items-center gap-2">
            <span className="h-7 flex-1 rounded-lg border border-border-strong" />
            <span className="h-7 w-14 rounded-full border border-border-strong" />
            <span className="h-7 w-14 rounded-full border border-border-strong" />
          </WireframeBlock>

          <WireframeBlock number={3} className="divide-y divide-border py-1">
            {rowKeys.map((rowKey) => (
              <div key={rowKey} className="flex items-center gap-3 py-2.5">
                <SkeletonLine className="w-12" />
                <SkeletonLine className="flex-1" />
                <span className="h-4 w-12 rounded-full bg-foreground/10" />
              </div>
            ))}
          </WireframeBlock>
        </div>

        <figcaption className="border-t border-border bg-sunken p-4 text-left sm:border-t-0 sm:border-l">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-medium text-foreground">{labels.reasonTitle}</p>
            <StatusTag status="new" label={labels.recommendedLabel} />
          </div>
          <dl className="mt-3 space-y-2.5 text-xs text-pretty">
            {labels.reasonItems.map((reasonItem) => (
              <div key={reasonItem.label}>
                <dt className="font-medium text-foreground">{reasonItem.label}</dt>
                <dd className="mt-0.5 text-muted">{reasonItem.text}</dd>
              </div>
            ))}
          </dl>
        </figcaption>
      </div>
    </figure>
  );
}
