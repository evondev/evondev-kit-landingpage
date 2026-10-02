import type { ComponentProps, ComponentType } from "react";
import { IconAntigravity } from "@/components/icons/icon-antigravity";
import { IconClaude } from "@/components/icons/icon-claude";
import { IconCodex } from "@/components/icons/icon-codex";
import { IconCursor } from "@/components/icons/icon-cursor";
import { IconOpenCode } from "@/components/icons/icon-opencode";
import { IconZCode } from "@/components/icons/icon-zcode";
import type { InstallToolId } from "@/features/landing/types/install-tool-id";

/** Cùng bộ logo với dải "Dùng được với" dưới hero. */
export const installToolIcons: Record<InstallToolId, ComponentType<ComponentProps<"svg">>> = {
  "claude-code": IconClaude,
  cursor: IconCursor,
  codex: IconCodex,
  opencode: IconOpenCode,
  antigravity: IconAntigravity,
  zcode: IconZCode,
};
