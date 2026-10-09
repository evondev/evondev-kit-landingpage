import { CircleDashed, Plus } from "lucide-react";
import SkeletonLine from "@/features/landing/components/skeleton-line";
import StatusTag from "@/features/landing/components/status-tag";
import { cn } from "@/utils/cn";

interface RoadmapPlaceholderCardProps {
  label: string;
  soonLabel: string;
  /** Màn hẹp xếp dọc: nhiều ô che giống hệt nhau chồng lên nhau là thừa, chỉ giữ ô đầu */
  isHiddenOnMobile?: boolean;
}

/** Ô che cho mục lộ trình chưa công bố: cùng khung với RoadmapCard, chữ thay bằng vạch. */
export default function RoadmapPlaceholderCard({
  label,
  soonLabel,
  isHiddenOnMobile = false,
}: RoadmapPlaceholderCardProps) {
  return (
    <li
      className={cn(
        "flex min-w-0 flex-col bg-background p-6 sm:p-8",
        isHiddenOnMobile && "hidden sm:flex",
      )}
    >
      <div className="reveal flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="grid size-10 place-items-center rounded-xl border border-dashed border-border-strong text-faint">
            <Plus className="size-5" aria-hidden />
          </span>
          <StatusTag status="soon" label={soonLabel} />
        </div>
        <h3 className="sr-only">{label}</h3>
        <div aria-hidden className="mt-6 flex h-7 items-center">
          <SkeletonLine className="h-3 w-40" />
        </div>
        <div aria-hidden className="mt-2 flex flex-col gap-3 py-1.5 md:flex-1">
          <SkeletonLine className="w-full" />
          <SkeletonLine className="w-3/4" />
        </div>
        <p className="mt-6 flex items-center gap-2 border-t border-dashed border-border-strong pt-4 font-mono text-xs text-muted">
          <CircleDashed className="size-3.5 shrink-0 text-heat" aria-hidden />
          {label}
        </p>
      </div>
    </li>
  );
}
