import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface WireframeBlockProps {
  number: number;
  children: ReactNode;
  className?: string;
}

/** Một khối xám trong wireframe, có số nhỏ ở góc để góp ý "bỏ khối 3". */
export default function WireframeBlock({ number, children, className }: WireframeBlockProps) {
  return (
    <div className={cn("relative rounded-lg border border-dashed border-border-strong p-3", className)}>
      <span className="absolute -top-2 -left-2 grid size-5 place-items-center rounded-md bg-foreground font-mono text-[10px] text-white">
        {number}
      </span>
      {children}
    </div>
  );
}
