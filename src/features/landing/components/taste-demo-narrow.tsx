import SkeletonLine from "@/features/landing/components/skeleton-line";

/** Khung 375px: nhãn dài xuống dòng, không tràn. */
export default function TasteDemoNarrow() {
  return (
    <div className="flex items-end gap-3">
      <div className="w-28 space-y-2 rounded-2xl border border-border-strong bg-background p-2">
        <div className="space-y-1.5 rounded-lg bg-surface p-2">
          <SkeletonLine className="w-full" />
          <SkeletonLine className="w-2/3" />
        </div>
        <div className="space-y-1.5 rounded-lg bg-surface p-2">
          <SkeletonLine className="w-full" />
          <SkeletonLine className="w-full" />
          <SkeletonLine className="w-1/3" />
        </div>
        <span className="grid h-6 place-items-center rounded-lg bg-primary">
          <SkeletonLine className="w-10 bg-primary-foreground/70" />
        </span>
      </div>
      <span className="font-mono text-xs text-muted">375px</span>
    </div>
  );
}
