import SkeletonLine from "@/features/landing/components/skeleton-line";

/** Card trong trang chỉ có viền; dropdown nổi phía trên mới có bóng. */
export default function TasteDemoHairline() {
  return (
    <div className="relative w-full max-w-60">
      <div className="space-y-2.5 rounded-xl border border-border-strong bg-surface p-4">
        <SkeletonLine className="w-16" />
        <SkeletonLine className="w-3/4" />
        <SkeletonLine className="w-1/2" />
      </div>
      <div className="absolute -right-2 -bottom-8 w-28 space-y-1 rounded-xl border border-border bg-surface p-1 shadow-lg">
        <span className="block rounded-lg bg-surface-hover px-2 py-2">
          <SkeletonLine className="w-12" />
        </span>
        <span className="block px-2 py-2">
          <SkeletonLine className="w-14" />
        </span>
      </div>
    </div>
  );
}
