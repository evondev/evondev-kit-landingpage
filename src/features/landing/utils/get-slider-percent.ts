/** Đổi toạ độ con trỏ thành vị trí thanh kéo, tính bằng % bề ngang khung, kẹp trong 0–100. */
export function getSliderPercent(clientX: number, frameLeft: number, frameWidth: number) {
  if (frameWidth <= 0) return 50;

  const percent = ((clientX - frameLeft) / frameWidth) * 100;

  return Math.min(100, Math.max(0, percent));
}
