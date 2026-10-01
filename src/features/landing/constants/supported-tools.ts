import { IconAntigravity } from "@/components/icons/icon-antigravity";
import { IconBun } from "@/components/icons/icon-bun";
import { IconClaude } from "@/components/icons/icon-claude";
import { IconCodex } from "@/components/icons/icon-codex";
import { IconCursor } from "@/components/icons/icon-cursor";
import { IconNpm } from "@/components/icons/icon-npm";
import { IconOpenCode } from "@/components/icons/icon-opencode";
import type { SupportedTool } from "@/features/landing/types/supported-tool";

/** Lấy từ README của evondevKit: công cụ đọc được skill, và hai lệnh cài `npx` / `bunx skills add`. */
export const supportedTools: SupportedTool[] = [
  { name: "Claude Code", icon: IconClaude },
  { name: "Cursor", icon: IconCursor },
  { name: "Codex", icon: IconCodex },
  { name: "OpenCode", icon: IconOpenCode },
  { name: "Antigravity", icon: IconAntigravity },
  { name: "npx", icon: IconNpm },
  { name: "bunx", icon: IconBun },
];
