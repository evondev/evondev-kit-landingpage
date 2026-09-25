import { installTools } from "@/features/landing/constants/install-tools";
import type { InstallToolEntry } from "@/features/landing/types/install-tool-entry";
import type { Locale } from "@/features/landing/types/locale";

export function buildInstallEntries(locale: Locale): InstallToolEntry[] {
  return installTools.map((tool) => ({
    id: tool.id,
    name: tool.name,
    steps: tool.steps.map((step) => ({
      description: step.description[locale],
      commands: step.commands,
    })),
  }));
}
