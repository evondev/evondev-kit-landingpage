import { cn } from "@/utils/cn";

interface EyebrowPillProps {
  label: string;
  className?: string;
}

/** Nhãn nhỏ phía trên tiêu đề section. */
export default function EyebrowPill({ label, className }: EyebrowPillProps) {
  return (
    <p
      className={cn(
        "inline-flex rounded-full border border-accent-border bg-accent-soft px-2.5 py-0.5 text-sm font-medium text-accent",
        className,
      )}
    >
      {label}
    </p>
  );
}
