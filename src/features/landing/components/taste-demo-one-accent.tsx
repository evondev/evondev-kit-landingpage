import SkeletonLine from "@/features/landing/components/skeleton-line";

/** Hai nút viền, một nút nền nhấn duy nhất. */
export default function TasteDemoOneAccent() {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-9 w-16 place-items-center rounded-xl border border-border-strong bg-surface">
        <SkeletonLine className="w-8" />
      </span>
      <span className="grid h-9 w-16 place-items-center rounded-xl border border-border-strong bg-surface">
        <SkeletonLine className="w-8" />
      </span>
      <span className="grid h-9 w-20 place-items-center rounded-xl bg-primary">
        <SkeletonLine className="w-10 bg-primary-foreground/70" />
      </span>
    </div>
  );
}
