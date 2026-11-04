/** Số cột một card chiếm khi nhóm có năm lối: hàng trên hai card, hàng dưới ba card, không ô nào trống. */
export function getModeCardSpanClasses(modeCount: number, index: number) {
  if (modeCount !== 5) return "";

  return index < 2 ? "md:col-span-3" : "md:col-span-2";
}
