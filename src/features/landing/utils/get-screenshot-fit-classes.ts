import type { ShowcaseImage } from "@/features/landing/types/showcase-image";
import { cn } from "@/utils/cn";

/** Tỉ lệ khung ô showcase (16:10). */
const cardAspectRatio = 1.6;

/**
 * Ảnh cao hơn khung (component dài, trang) thì phủ kín, bám mép trên.
 * Ảnh thấp hơn khung (hàng badge, ô nhập) thì hiện trọn, không phóng to cắt chữ.
 */
export function getScreenshotFitClasses(image: ShowcaseImage | null) {
  const isTallerThanCard = image ? image.width / image.height <= cardAspectRatio : true;

  return cn(
    "h-full",
    isTallerThanCard && "object-cover object-top",
    !isTallerThanCard && "object-contain object-center",
  );
}
