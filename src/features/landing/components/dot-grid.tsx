import { cn } from "@/utils/cn";

interface DotGridProps {
  className?: string;
}

/** Lưới chấm nhạt, mờ dần ra rìa. Thuần trang trí. */
export default function DotGrid({ className }: DotGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10",
        "bg-[radial-gradient(var(--color-dot)_1px,transparent_1px)] [background-size:14px_14px]",
        "[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]",
        className,
      )}
    />
  );
}
