import { cn } from "@/utils/cn";

export function getTestedBadgeClasses(isTested: boolean) {
  return cn(
    "inline-flex items-center gap-1.5 rounded-md px-1.5 py-0.5 font-mono text-[11px] font-medium tracking-wide uppercase",
    isTested && "bg-emerald-50 text-emerald-700",
    !isTested && "bg-secondary text-muted",
  );
}
