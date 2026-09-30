import type { LucideIcon } from "lucide-react";

interface FeatureIconProps {
  icon: LucideIcon;
}

/** Ô icon vuông đầu card. Rê chuột vào card (group) thì ô ngả sang màu nhấn, icon nhích to. */
export default function FeatureIcon({ icon: Icon }: FeatureIconProps) {
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border-strong bg-surface text-heat transition-colors group-hover:border-heat-border group-hover:bg-heat-soft">
      <Icon className="size-5 transition-transform motion-safe:group-hover:scale-110" aria-hidden />
    </span>
  );
}
