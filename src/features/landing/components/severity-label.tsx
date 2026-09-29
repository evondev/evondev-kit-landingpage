import type { SeverityTone } from "@/features/landing/types/severity-tone";
import { getSeverityDotClasses } from "@/features/landing/utils/get-severity-dot-classes";

interface SeverityLabelProps {
  tone: SeverityTone;
  label: string;
}

export default function SeverityLabel({ tone, label }: SeverityLabelProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium whitespace-nowrap text-foreground">
      <span aria-hidden className={getSeverityDotClasses(tone)} />
      {label}
    </span>
  );
}
