import HeroSparkle from "@/features/landing/components/hero-sparkle";
import PixelGlyph from "@/features/landing/components/pixel-glyph";
import { pixelPatterns } from "@/features/landing/constants/pixel-patterns";

/** Nền hero: lưới ô 96px mờ dần ở giữa, vài hình pixel và hai ngôi sao ở giao điểm. */
export default function HeroBackdrop() {
  const [cursorPattern, gridPattern, windowPattern, stepsPattern] = pixelPatterns;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[640px] overflow-hidden">
      <div className="bg-cells mask-fade-center absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />

      <div className="hidden lg:block">
        <PixelGlyph pattern={cursorPattern} className="absolute top-[132px] left-[36px]" />
        <PixelGlyph pattern={gridPattern} className="absolute top-[324px] left-[132px]" />
        <PixelGlyph pattern={windowPattern} className="absolute top-[132px] right-[132px]" />
        <PixelGlyph pattern={stepsPattern} className="absolute top-[420px] right-[36px]" />
      </div>

      <HeroSparkle className="top-[192px] left-[calc(50%-384px)]" />
      <HeroSparkle className="top-[192px] left-[calc(50%+384px)]" />
    </div>
  );
}
