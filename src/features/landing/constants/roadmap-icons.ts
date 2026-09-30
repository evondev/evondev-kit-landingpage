import { MoonStar, SquareSplitHorizontal, type LucideIcon } from "lucide-react";
import type { RoadmapIconId } from "@/features/landing/types/roadmap-icon-id";

export const roadmapIcons: Record<RoadmapIconId, LucideIcon> = {
  "dark-mode": MoonStar,
  "before-after": SquareSplitHorizontal,
};
