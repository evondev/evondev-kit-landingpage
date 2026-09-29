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
  /** Phase 2: ảnh trước khi refactor */
  before?: ShowcaseImageSet;
}
