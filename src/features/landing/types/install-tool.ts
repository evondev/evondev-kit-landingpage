import type { InstallToolId } from "@/features/landing/types/install-tool-id";
import type { LocalizedText } from "@/features/landing/types/localized-text";

export interface InstallStep {
  description: LocalizedText;
  commands: string[];
}

export interface InstallTool {
  id: InstallToolId;
  name: string;
  steps: InstallStep[];
}
