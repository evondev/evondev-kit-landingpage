import type { FeatureStatus } from "@/features/landing/types/feature-status";
import { cn } from "@/utils/cn";

export function getStatusTagClasses(status: FeatureStatus) {
  return cn(
    "inline-flex shrink-0 items-center rounded-md px-1.5 py-0.5 font-mono text-[11px] font-medium tracking-wide uppercase",
    status === "new" && "bg-heat-soft text-heat-ink",
    status === "beta" && "bg-secondary text-muted",
    status === "soon" && "border border-dashed border-heat-border text-heat-ink",
  );
}
