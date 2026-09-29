import type { FeatureStatus } from "@/features/landing/types/feature-status";
import { getStatusTagClasses } from "@/features/landing/utils/get-status-tag-classes";

interface StatusTagProps {
  status: FeatureStatus;
  label: string;
}

export default function StatusTag({ status, label }: StatusTagProps) {
  return <span className={getStatusTagClasses(status)}>{label}</span>;
}
