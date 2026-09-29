import ScrambleText from "@/features/landing/components/scramble-text";
import { landingSectionCount } from "@/features/landing/constants/landing-section-count";

interface SectionIndexProps {
  number: number;
  label: string;
  /** Tổng số section có thanh này trên trang; mặc định là trang evon:ui-ux */
  total?: number;
}

/** Thanh mono đầu section: [ 01 / 08 ] · NHÃN */
export default function SectionIndex({ number, label, total = landingSectionCount }: SectionIndexProps) {
  const paddedNumber = String(number).padStart(2, "0");
  const paddedTotal = String(total).padStart(2, "0");

  return (
    <p className="flex items-center gap-2 border-b border-border px-5 py-4 font-mono text-xs tracking-wider text-muted uppercase sm:px-10">
      <span aria-hidden>[</span>
      <span className="text-heat-ink">{paddedNumber}</span>
      <span aria-hidden>/</span>
      <span>{paddedTotal}</span>
      <span aria-hidden>]</span>
      <span aria-hidden className="text-faint">
        ·
      </span>
      <ScrambleText text={label} />
    </p>
  );
}
