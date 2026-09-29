import { getTestedBadgeClasses } from "@/features/landing/utils/get-tested-badge-classes";

interface TestedBadgeProps {
  isTested: boolean;
  label: string;
}

/** Công cụ đã chạy vòng test của skill hay chưa. */
export default function TestedBadge({ isTested, label }: TestedBadgeProps) {
  return <span className={getTestedBadgeClasses(isTested)}>{label}</span>;
}
