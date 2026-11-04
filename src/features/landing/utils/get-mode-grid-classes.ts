import { cn } from "@/utils/cn";

/** Số cột của hàng card trong một nhóm: chia hết số lối, để không thừa ô trống lộ nền đường kẻ. */
export function getModeGridClasses(modeCount: number) {
  return cn(
    "grid grid-cols-1 gap-px bg-border",
    (modeCount === 2 || modeCount === 4) && "md:grid-cols-2",
    modeCount === 3 && "md:grid-cols-3",
    // Năm lối: lưới sáu cột, hai card đầu rộng ba cột, ba card sau rộng hai cột (getModeCardSpanClasses).
    modeCount === 5 && "md:grid-cols-6",
    modeCount > 5 && "md:grid-cols-3",
  );
}
