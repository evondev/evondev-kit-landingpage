import AccentTitle from "@/features/landing/components/accent-title";
import EyebrowTag from "@/features/landing/components/eyebrow-tag";
import FaqItem from "@/features/landing/components/faq-item";
import SectionFrame from "@/features/landing/components/section-frame";
import SectionIndex from "@/features/landing/components/section-index";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface FaqSectionProps {
  number: number;
  dictionary: Dictionary["faq"];
}

export default function FaqSection({ number, dictionary }: FaqSectionProps) {
  return (
    <SectionFrame id="faq" labelledBy="faq-title">
      <SectionIndex number={number} label={dictionary.label} />
      <div className="grid grid-cols-1 gap-10 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1fr_2fr]">
        <div>
          <EyebrowTag label={dictionary.eyebrow} />
        </div>
        <div className="min-w-0">
          <h2 id="faq-title" className="text-3xl font-medium tracking-tight text-balance text-foreground sm:text-5xl">
            <AccentTitle title={dictionary.title} />
          </h2>
          <div className="mt-10 border-t border-border">
            {dictionary.items.map((item) => (
              <FaqItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
