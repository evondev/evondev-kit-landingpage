/** Nhịp lệch cho từng ô pixel, rải đều trong 2,4 giây để các ô không nháy cùng lúc. */
export function getPixelBlinkDelay(cellIndex: number) {
  return `${(cellIndex * 373) % 2400}ms`;
}
