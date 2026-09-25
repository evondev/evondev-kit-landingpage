import SkeletonLine from "@/features/landing/components/skeleton-line";

/** Cùng một card ở token tối của skill: navy, viền rgba, màu nhấn gần trắng. */
export default function TasteDemoDark() {
  return (
    <div className="dark w-full max-w-60 rounded-xl bg-background p-2">
      <div className="space-y-3 rounded-lg border border-border bg-surface p-3">
        <SkeletonLine className="w-16" />
        <SkeletonLine className="w-3/4" />
        <div className="flex gap-2 pt-1">
          <span className="grid h-7 w-14 place-items-center rounded-lg border border-border-strong">
            <SkeletonLine className="w-7" />
          </span>
          <span className="grid h-7 w-16 place-items-center rounded-lg bg-primary">
            <SkeletonLine className="w-8 bg-primary-foreground/70" />
          </span>
        </div>
      </div>
    </div>
  );
}
