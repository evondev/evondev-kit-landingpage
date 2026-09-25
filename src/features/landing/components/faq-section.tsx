import DottedDivider from "@/features/landing/components/dotted-divider";
import SectionHeading from "@/features/landing/components/section-heading";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface FaqSectionProps {
  dictionary: Dictionary["faq"];
}

/** Chia bằng đường chấm, hiện hết khi dưới 6 câu. */
export default function FaqSection({ dictionary }: FaqSectionProps) {
  return (
    <section aria-labelledby="faq-title" className="pt-24 sm:pt-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_2fr]">
        <SectionHeading id="faq-title" eyebrow={dictionary.eyebrow} title={dictionary.title} />

        <dl>
          {dictionary.items.map((item, index) => (
            <div key={item.question}>
              {index > 0 ? <DottedDivider /> : null}
              <div className="py-6 first:pt-0">
                <dt className="text-lg font-semibold text-foreground">{item.question}</dt>
                <dd className="mt-2 text-pretty">{item.answer}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
