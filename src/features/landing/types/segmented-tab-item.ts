import type { ReactNode } from "react";

export interface SegmentedTabItem {
  id: string;
  label: string;
  count?: number;
  /** Icon render sẵn ở server (lucide hoặc logo trong components/icons), đứng trước nhãn */
  icon?: ReactNode;
}
