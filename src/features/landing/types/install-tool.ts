import type { LocalizedText } from "@/features/landing/types/localized-text";

export interface InstallStep {
  description: LocalizedText;
  commands: string[];
}

export interface InstallTool {
  id: string;
  name: string;
  steps: InstallStep[];
}
