import type { ShowcaseImageSet } from "@/features/landing/types/showcase-image";
import type { ShowcaseTheme } from "@/features/landing/types/showcase-theme";

/** Ảnh theo chế độ màu đang chọn. Mục chưa có ảnh tối thì dùng ảnh sáng. */
export function pickShowcaseImage(images: ShowcaseImageSet | null, theme: ShowcaseTheme) {
  if (!images) return null;

  if (theme === "dark" && images.dark) return images.dark;

  return images.light;
}
