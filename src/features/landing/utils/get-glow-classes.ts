import type { GlowTone } from "@/features/landing/types/glow-tone";
import { cn } from "@/utils/cn";

export function getGlowClasses(tone: GlowTone, className?: string) {
  return cn(
    "pointer-events-none absolute -z-10 rounded-full blur-3xl",
    tone === "blue" && "bg-[radial-gradient(circle,rgb(96_140_255/0.32),transparent_68%)]",
    tone === "violet" && "bg-[radial-gradient(circle,rgb(150_120_255/0.28),transparent_68%)]",
    className,
  );
}
