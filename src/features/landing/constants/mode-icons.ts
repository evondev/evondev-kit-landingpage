import {
  Blocks,
  Compass,
  Hammer,
  LayoutTemplate,
  MoonStar,
  Paintbrush,
  Palette,
  PencilRuler,
  Route,
  ScanSearch,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ModeId } from "@/features/landing/types/mode-id";

export const modeIcons: Record<ModeId, LucideIcon> = {
  designer: LayoutTemplate,
  analyze: Compass,
  "just-build": Hammer,
  "design-system": Blocks,
  review: ScanSearch,
  flow: Route,
  "keep-brand": Paintbrush,
  "skill-taste": Palette,
  "dark-mode": MoonStar,
  refactor: Wrench,
  "small-fix": PencilRuler,
};
