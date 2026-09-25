import type { LocalizedText } from "@/features/landing/types/localized-text";
import type { ShowcaseImageSet } from "@/features/landing/types/showcase-image";
import type { ShowcaseLevel } from "@/features/landing/types/showcase-level";

export interface ShowcaseItem {
  /** Trùng id trong scripts/showcase-shots.json: ảnh nằm ở public/showcase/<id>-<theme>.webp */
  id: string;
  level: ShowcaseLevel;
  title: LocalizedText;
  /** Câu đề gốc trong TESTS.md */
  prompt: LocalizedText;
  /** Bậc 1b: UI skill chưa có mẫu, tự dựng từ nguyên tắc */
  isUnprecedented?: boolean;
  /** Phase 2: ảnh trước khi refactor */
  before?: ShowcaseImageSet;
}
