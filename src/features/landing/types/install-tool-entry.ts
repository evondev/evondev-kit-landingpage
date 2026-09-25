export interface InstallStepEntry {
  description: string;
  commands: string[];
}

/** Một công cụ trong mục Cài đặt, đã chọn đúng thứ tiếng. */
export interface InstallToolEntry {
  id: string;
  name: string;
  steps: InstallStepEntry[];
}
