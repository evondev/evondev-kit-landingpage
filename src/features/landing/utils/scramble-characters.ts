import { scrambleGlyphs } from "@/features/landing/constants/scramble-glyphs";

/**
 * Chữ ở nhịp `step`: ký tự thứ i đứng yên từ nhịp `leadSteps + i`, trước đó là ký tự ngẫu nhiên.
 * Khoảng trắng giữ nguyên để chữ không xô lệch.
 */
export function scrambleCharacters(text: string, step: number, leadSteps: number) {
  return Array.from(text)
    .map((character, index) => {
      if (character === " " || step >= leadSteps + index) return character;

      return scrambleGlyphs[Math.floor(Math.random() * scrambleGlyphs.length)];
    })
    .join("");
}
