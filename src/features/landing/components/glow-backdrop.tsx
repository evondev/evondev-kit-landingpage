import type { GlowTone } from "@/features/landing/types/glow-tone";
import { getGlowClasses } from "@/features/landing/utils/get-glow-classes";

interface GlowBackdropProps {
  tone?: GlowTone;
  /** Vị trí và cỡ quầng sáng, vd. "-left-20 top-10 size-[480px]" */
  className?: string;
}

/** Quầng sáng mờ phía sau ảnh. Thuần trang trí, cha phải `relative` và chặn tràn ngang. */
export default function GlowBackdrop({ tone = "blue", className }: GlowBackdropProps) {
  return <div aria-hidden className={getGlowClasses(tone, className)} />;
}
