import {
  Hammer,
  LayoutTemplate,
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
  review: ScanSearch,
  "keep-brand": Paintbrush,
  "skill-taste": Palette,
  refactor: Wrench,
  "small-fix": PencilRuler,
};
