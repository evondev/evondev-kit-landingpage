import type { AsciiShape } from "@/features/landing/types/ascii-shape";

/**
 * Độ đặc 0→1 của ô (x, y) ở thời điểm t, x và y chuẩn hoá về 0→1.
 * Sóng sin chồng nhau cho ra đám ký tự trôi chậm, nhân với khuôn hình để mờ dần ra mép.
 */
export function getAsciiDensity(x: number, y: number, time: number, shape: AsciiShape) {
  const wave =
    Math.sin(x * 7 + time * 0.55) * Math.cos(y * 5 - time * 0.4) * 0.5 +
    Math.sin((x + y) * 11 + time * 0.9) * 0.3 +
    Math.cos(x * 17 - y * 9 + time * 0.3) * 0.2;
  const normalizedWave = wave * 0.5 + 0.5;

  const offsetX = (x - 0.5) * 2;
  const offsetY = (y - 0.5) * 2;
  const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

  const shapeMask = shape === "blob" ? Math.max(0, 1 - distance) : Math.max(0, Math.min(1, (distance - 0.55) * 2.2)) * Math.max(0, 1.35 - distance);

  return normalizedWave * shapeMask;
}
