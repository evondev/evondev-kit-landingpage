import { cn } from "@/utils/cn";

interface SkeletonLineProps {
  className?: string;
}

/** Vạch thay cho chữ trong các hình minh hoạ: không phụ thuộc thứ tiếng. */
export default function SkeletonLine({ className }: SkeletonLineProps) {
  return <span className={cn("block h-2 rounded-full bg-foreground/15", className)} />;
}
