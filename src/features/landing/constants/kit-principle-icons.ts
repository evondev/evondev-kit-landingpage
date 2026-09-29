import { FlaskConical, FolderSearch, Hash, type LucideIcon } from "lucide-react";
import type { KitPrincipleIconId } from "@/features/landing/types/kit-principle-icon-id";

export const kitPrincipleIcons: Record<KitPrincipleIconId, LucideIcon> = {
  "numbered-rules": Hash,
  tested: FlaskConical,
  codebase: FolderSearch,
};
