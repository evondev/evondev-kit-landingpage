import { Orbit, SquareCode, Terminal, type LucideIcon } from "lucide-react";
import type { InstallToolId } from "@/features/landing/types/install-tool-id";

export const installToolIcons: Record<InstallToolId, LucideIcon> = {
  "claude-code": Terminal,
  codex: SquareCode,
  antigravity: Orbit,
};
