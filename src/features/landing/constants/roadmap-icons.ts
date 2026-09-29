import { Bot, Languages, MoonStar, SquareSplitHorizontal, type LucideIcon } from "lucide-react";
import type { RoadmapIconId } from "@/features/landing/types/roadmap-icon-id";

export const roadmapIcons: Record<RoadmapIconId, LucideIcon> = {
  "dark-mode": MoonStar,
  english: Languages,
  agents: Bot,
  "before-after": SquareSplitHorizontal,
};
