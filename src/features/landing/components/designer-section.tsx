import DesignerStepRow from "@/features/landing/components/designer-step-row";
import SectionFrame from "@/features/landing/components/section-frame";
import SectionHeading from "@/features/landing/components/section-heading";
import SectionIndex from "@/features/landing/components/section-index";
import WireframePreview from "@/features/landing/components/wireframe-preview";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface DesignerSectionProps {
  number: number;
  dictionary: Dictionary["designer"];
}

export default function DesignerSection({ number, dictionary }: DesignerSectionProps) {
  return (
    <SectionFrame id="designer" labelledBy="designer-title">
      <SectionIndex number={number} label={dictionary.label} />
      <div className="px-5 py-16 sm:px-10 sm:py-24">
        <SectionHeading
          id="designer-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
        />
      </div>

      <div className="grid grid-cols-1 gap-px border-t border-border bg-border lg:grid-cols-[2fr_3fr]">
        <ol className="bg-background">
          {dictionary.steps.map((step) => (
            <DesignerStepRow key={step.code} step={step} />
          ))}
        </ol>
        <div className="flex flex-col justify-center gap-5 bg-sunken/60 p-5 sm:p-10">
          <div className="reveal">
            <WireframePreview labels={dictionary.wireframe} />
          </div>
          <p className="text-sm text-pretty text-muted">{dictionary.toolbarNote}</p>
        </div>
      </div>
    </SectionFrame>
  );
}
