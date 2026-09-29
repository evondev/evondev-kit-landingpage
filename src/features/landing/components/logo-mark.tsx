import Image from "next/image";

/** Logo evondevKit: chữ E gradient kèm con trỏ, ảnh gốc ở public/brand. */
export default function LogoMark() {
  return (
    <span className="flex items-center gap-2 text-[17px] font-semibold tracking-tight text-foreground">
      <Image src="/brand/logo-mark.png" alt="" width={28} height={28} className="size-7" priority />
      evondevKit
    </span>
  );
}
