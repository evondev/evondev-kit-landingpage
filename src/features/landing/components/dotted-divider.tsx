import { cn } from "@/utils/cn";

interface DottedDividerProps {
  className?: string;
}

/** Đường chia bằng chấm, nhẹ hơn đường kẻ liền. */
export default function DottedDivider({ className }: DottedDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-full bg-[radial-gradient(circle,var(--color-dot)_1px,transparent_1.2px)] [background-size:6px_1px]",
        className,
      )}
    />
  );
}
