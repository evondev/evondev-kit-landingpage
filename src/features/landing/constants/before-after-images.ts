import type { BeforeAfterStage } from "@/features/landing/types/before-after-stage";
import type { ShowcaseImage } from "@/features/landing/types/showcase-image";

/**
 * Màn Phòng trọ của 68Lane qua ba giai đoạn, nằm trong `public/before-after/`.
 * Ba ảnh phải cùng kích thước thì thanh kéo mới khớp: wireframe đã cắt thanh công cụ ở trên
 * cho header trùng bản sau, ảnh trước cắt bớt đáy. `null` là chưa có ảnh, hiện khung giữ chỗ.
 */
export const beforeAfterImages: Record<BeforeAfterStage, ShowcaseImage | null> = {
  before: { src: "/before-after/phong-tro-before.webp", width: 2400, height: 1193 },
  wireframe: { src: "/before-after/phong-tro-wireframe.webp", width: 2400, height: 1193 },
  after: { src: "/before-after/phong-tro-after.webp", width: 2400, height: 1193 },
};
