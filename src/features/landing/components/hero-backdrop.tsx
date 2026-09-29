import AsciiField from "@/features/landing/components/ascii-field";
import HeroSparkle from "@/features/landing/components/hero-sparkle";
import PixelGlyph from "@/features/landing/components/pixel-glyph";
import { pixelPatterns } from "@/features/landing/constants/pixel-patterns";
import { getHeroCellStyle } from "@/features/landing/utils/get-hero-cell-style";

/** Nền hero: lưới ô mờ dần ở giữa, hình pixel nhấp nháy, hai đám ASCII và hai ngôi sao ở giao điểm. */
export default function HeroBackdrop() {
  const [cursorPattern, gridPattern, windowPattern, stepsPattern] = pixelPatterns;
  const pixelGlyphClasses = "absolute -translate-x-1/2 -translate-y-1/2";

  return (
    // Lệch ra 1px mỗi bên và phía trên: đường kẻ đầu của lưới đè đúng lên hai đường ray
    // và viền dưới header, thay vì nằm sát cạnh thành viền đôi.
    <div aria-hidden className="pointer-events-none absolute -inset-x-px -top-px h-[640px] overflow-hidden">
      <div className="bg-cells mask-fade-center absolute inset-0 [--cell-columns:4] sm:[--cell-columns:7] lg:[--cell-columns:11]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />

      <div className="hidden lg:block">
        <PixelGlyph pattern={cursorPattern} className={pixelGlyphClasses} style={getHeroCellStyle(0, 1, "center")} />
        <PixelGlyph pattern={gridPattern} className={pixelGlyphClasses} style={getHeroCellStyle(1, 3, "center")} />
        <PixelGlyph pattern={windowPattern} className={pixelGlyphClasses} style={getHeroCellStyle(10, 1, "center")} />
        <PixelGlyph pattern={stepsPattern} className={pixelGlyphClasses} style={getHeroCellStyle(9, 4, "center")} />
      </div>

      <AsciiField className="absolute top-[360px] left-[calc(50%-560px)] hidden h-[300px] w-[260px] lg:block" />
      <AsciiField className="absolute top-[360px] right-[calc(50%-560px)] hidden h-[300px] w-[260px] -scale-x-100 lg:block" />

      <HeroSparkle style={getHeroCellStyle(2, 2, "intersection")} />
      <HeroSparkle style={getHeroCellStyle(9, 2, "intersection")} />
    </div>
  );
}
