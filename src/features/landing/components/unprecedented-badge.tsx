interface UnprecedentedBadgeProps {
  label: string;
}

/** Nhãn cho UI bậc 1b: skill chưa có mẫu, tự dựng từ nguyên tắc. */
export default function UnprecedentedBadge({ label }: UnprecedentedBadgeProps) {
  return (
    <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">{label}</span>
  );
}
