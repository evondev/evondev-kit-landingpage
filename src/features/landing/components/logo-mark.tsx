import Image from "next/image";
import { cn } from "@/utils/cn";

interface LogoMarkProps {
  /** Ẩn chữ "evondevKit" ở màn hẹp, chỉ giữ hình: header trang skill cần chỗ cho "/ tên skill" */
  isWordmarkCollapsible?: boolean;
}

/** Logo evondevKit: chữ E gradient kèm con trỏ, ảnh gốc ở public/brand. */
export default function LogoMark({ isWordmarkCollapsible = false }: LogoMarkProps) {
  return (
    <span className="flex items-center gap-2 text-[17px] font-semibold tracking-tight text-foreground">
      <Image src="/brand/logo-mark.png" alt="" width={28} height={28} className="size-7" priority />
      <span className={cn(isWordmarkCollapsible && "sr-only sm:not-sr-only")}>evondevKit</span>
    </span>
  );
}
