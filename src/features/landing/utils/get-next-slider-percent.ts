/** Vị trí thanh kéo sau một phím bấm, `null` nếu phím đó không điều khiển thanh kéo. */
export function getNextSliderPercent(key: string, currentPercent: number, isLargeStep: boolean) {
  const step = isLargeStep ? 10 : 2;

  if (key === "ArrowLeft" || key === "ArrowDown") return Math.max(0, currentPercent - step);
  if (key === "ArrowRight" || key === "ArrowUp") return Math.min(100, currentPercent + step);
  if (key === "Home") return 0;
  if (key === "End") return 100;

  return null;
}
