import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BrowserFrameProps {
  label: string;
  children: ReactNode;
  className?: string;
}

/** Khung cửa sổ trình duyệt bọc ảnh chụp: ba chấm, ô địa chỉ, rồi nội dung. */
export default function BrowserFrame({ label, children, className }: BrowserFrameProps) {
  return (
    <div className={cn("rounded-2xl border border-border-strong bg-surface p-1.5 shadow-float", className)}>
      <div className="flex items-center gap-3 px-2.5 pt-1 pb-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full border border-border-strong" />
          <span className="size-2.5 rounded-full border border-border-strong" />
          <span className="size-2.5 rounded-full border border-border-strong" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-sunken px-3 py-1 text-center font-mono text-xs text-muted">
          {label}
        </span>
        <span aria-hidden className="hidden w-[46px] sm:block" />
      </div>
      <div className="overflow-hidden rounded-xl border border-border">{children}</div>
    </div>
  );
}
