import {
  Blocks,
  Hammer,
  LayoutTemplate,
  MoonStar,
  Paintbrush,
  Palette,
  PencilRuler,
  ScanSearch,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ModeId } from "@/features/landing/types/mode-id";

export const modeIcons: Record<ModeId, LucideIcon> = {
  designer: LayoutTemplate,
  "just-build": Hammer,
  "design-system": Blocks,
  review: ScanSearch,
  "keep-brand": Paintbrush,
  "skill-taste": Palette,
  "dark-mode": MoonStar,
  refactor: Wrench,
  "small-fix": PencilRuler,
};
