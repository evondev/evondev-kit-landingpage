interface UnprecedentedBadgeProps {
  label: string;
}

/** Nhãn cho UI bậc 1b: skill chưa có mẫu, tự dựng từ nguyên tắc. */
export default function UnprecedentedBadge({ label }: UnprecedentedBadgeProps) {
  return (
    <span className="rounded-md bg-heat-soft px-1.5 py-0.5 font-mono text-[11px] font-medium tracking-wide text-heat-ink uppercase">
      {label}
    </span>
  );
}
