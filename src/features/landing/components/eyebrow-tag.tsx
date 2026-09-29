import { Sparkle } from "lucide-react";
import { cn } from "@/utils/cn";

interface EyebrowTagProps {
  label: string;
  className?: string;
}

/** Nhãn nhỏ trên tiêu đề: // ✦ Nhãn \\ kèm gạch chân mảnh. */
export default function EyebrowTag({ label, className }: EyebrowTagProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 border-b border-border pb-2 text-sm font-medium text-foreground",
        className,
      )}
    >
      <span aria-hidden className="font-mono text-faint">
        {"//"}
      </span>
      <Sparkle className="size-3.5 fill-heat text-heat" aria-hidden />
      {label}
      <span aria-hidden className="font-mono text-faint">
        {"\\\\"}
      </span>
    </p>
  );
}
