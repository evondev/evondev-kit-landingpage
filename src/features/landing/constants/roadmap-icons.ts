import { Newspaper, PanelsTopLeft, ShoppingBag, SwatchBook, type LucideIcon } from "lucide-react";
import type { RoadmapIconId } from "@/features/landing/types/roadmap-icon-id";

export const roadmapIcons: Record<RoadmapIconId, LucideIcon> = {
  "landing-page": PanelsTopLeft,
  ecommerce: ShoppingBag,
  blog: Newspaper,
  "component-styles": SwatchBook,
};
