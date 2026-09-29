import type { InstallToolId } from "@/features/landing/types/install-tool-id";

export interface InstallStepEntry {
  description: string;
  commands: string[];
}

/** Một công cụ trong mục Cài đặt, đã chọn đúng thứ tiếng. */
export interface InstallToolEntry {
  id: InstallToolId;
  name: string;
  isTested: boolean;
  steps: InstallStepEntry[];
}
