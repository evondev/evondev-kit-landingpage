/** Chậm dần về cuối: progress 0→1 ra giá trị 0→1. */
export function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}
