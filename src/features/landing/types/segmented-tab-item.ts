import type { ReactNode } from "react";

export interface SegmentedTabItem {
  id: string;
  label: string;
  count?: number;
  /** Icon render sẵn ở server (lucide), đứng trước nhãn */
  icon?: ReactNode;
}
