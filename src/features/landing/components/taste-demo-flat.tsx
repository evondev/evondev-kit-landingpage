import SkeletonLine from "@/features/landing/components/skeleton-line";

/** Nền trang xám, card trắng, không gradient, không bóng. */
export default function TasteDemoFlat() {
  return (
    <div className="grid w-full max-w-64 grid-cols-2 gap-2 rounded-xl bg-background p-2">
      <div className="space-y-2 rounded-lg border border-border bg-surface p-3">
        <SkeletonLine className="w-10" />
        <SkeletonLine className="h-3 w-14 bg-foreground/30" />
      </div>
      <div className="space-y-2 rounded-lg border border-border bg-surface p-3">
        <SkeletonLine className="w-8" />
        <SkeletonLine className="h-3 w-12 bg-foreground/30" />
      </div>
      <div className="col-span-2 space-y-2 rounded-lg border border-border bg-surface p-3">
        <SkeletonLine className="w-3/4" />
        <SkeletonLine className="w-1/2" />
      </div>
    </div>
  );
}
