import { CircleDashed } from "lucide-react";
import StatusTag from "@/features/landing/components/status-tag";
import { roadmapIcons } from "@/features/landing/constants/roadmap-icons";
import type { RoadmapItem } from "@/features/landing/types/dictionary";

interface RoadmapCardProps {
  item: RoadmapItem;
  soonLabel: string;
}

export default function RoadmapCard({ item, soonLabel }: RoadmapCardProps) {
  const Icon = roadmapIcons[item.icon];

  return (
    <li className="flex min-w-0 flex-col bg-background p-6 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-xl border border-dashed border-border-strong text-muted">
          <Icon className="size-5" aria-hidden />
        </span>
        <StatusTag status="soon" label={soonLabel} />
      </div>
      <h3 className="mt-6 text-lg font-medium text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm text-pretty text-muted md:flex-1">{item.description}</p>
      <p className="mt-6 flex items-center gap-2 border-t border-dashed border-border-strong pt-4 font-mono text-xs text-muted">
        <CircleDashed className="size-3.5 shrink-0 text-heat" aria-hidden />
        {item.progress}
      </p>
    </li>
  );
}
