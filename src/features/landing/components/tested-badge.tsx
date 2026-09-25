import { cn } from "@/utils/cn";

interface TestedBadgeProps {
  isTested: boolean;
  label: string;
}

/** Badge trạng thái (M7): nền nhạt + chữ -700 cùng sắc. */
export default function TestedBadge({ isTested, label }: TestedBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 text-xs font-medium",
        isTested && "border border-emerald-200 bg-emerald-50 text-emerald-700",
        !isTested && "border border-slate-200 bg-slate-50 text-slate-600",
      )}
    >
      {label}
    </span>
  );
}
