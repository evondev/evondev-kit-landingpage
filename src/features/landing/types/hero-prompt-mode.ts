import type { ModeId } from "@/features/landing/types/mode-id";

/** Phần của ModeItem mà hộp đề trên hero cần, đủ nhẹ để đưa xuống client. */
export interface HeroPromptMode {
  id: ModeId;
  tabLabel: string;
  prompt: string;
}
