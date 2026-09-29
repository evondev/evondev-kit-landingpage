import { Hand } from "lucide-react";
import type { DesignerStep } from "@/features/landing/types/dictionary";

interface DesignerStepRowProps {
  step: DesignerStep;
}

export default function DesignerStepRow({ step }: DesignerStepRowProps) {
  return (
    <li className="flex gap-5 border-b border-border px-5 py-6 last:border-b-0 sm:px-10">
      <span className="w-7 shrink-0 pt-0.5 font-mono text-sm text-heat-ink">{step.code}</span>
      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-foreground">{step.title}</h3>
        <p className="mt-1 text-sm text-pretty text-muted">{step.description}</p>
        {step.gate ? (
          <p className="mt-3 inline-flex items-center gap-2 rounded-lg bg-heat-soft px-2.5 py-1.5 text-xs font-medium text-heat-ink">
            <Hand className="size-3.5 shrink-0" aria-hidden />
            {step.gate}
          </p>
        ) : null}
      </div>
    </li>
  );
}
