import { MessageSquareReply } from "lucide-react";
import LeadTitle from "@/features/landing/components/lead-title";
import ReviewTable from "@/features/landing/components/review-table";
import SectionFrame from "@/features/landing/components/section-frame";
import SectionHeading from "@/features/landing/components/section-heading";
import SectionIndex from "@/features/landing/components/section-index";
import SeverityLabel from "@/features/landing/components/severity-label";
import SweepTable from "@/features/landing/components/sweep-table";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface ProbeSectionProps {
  number: number;
  dictionary: Dictionary["probe"];
}

export default function ProbeSection({ number, dictionary }: ProbeSectionProps) {
  return (
    <SectionFrame id="probe" labelledBy="probe-title">
      <SectionIndex number={number} label={dictionary.label} />
      <div className="px-5 py-16 sm:px-10 sm:py-24">
        <SectionHeading
          id="probe-title"
          eyebrow={dictionary.eyebrow}
          title={dictionary.title}
          description={dictionary.description}
          isCentered
        />
      </div>

      <div className="grid grid-cols-1 gap-px border-t border-border bg-border lg:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-6 bg-background p-5 sm:p-10">
          <LeadTitle title={dictionary.reviewTitle} />
          <ReviewTable dictionary={dictionary} />
          <p className="inline-flex w-fit items-center gap-2 rounded-lg border border-heat-border bg-heat-soft px-3 py-2 font-mono text-xs text-heat-ink">
            <MessageSquareReply className="size-4 shrink-0" aria-hidden />
            {dictionary.reviewReply}
          </p>
          <dl className="grid gap-3 border-t border-border pt-6 sm:grid-cols-3">
            {dictionary.severities.map((severity) => (
              <div key={severity.tone}>
                <dt>
                  <SeverityLabel tone={severity.tone} label={severity.label} />
                </dt>
                <dd className="mt-1 text-xs text-pretty text-muted">{severity.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex min-w-0 flex-col gap-6 bg-background p-5 sm:p-10">
          <LeadTitle title={dictionary.sweepTitle} />
          <SweepTable dictionary={dictionary} />
          <p className="text-sm text-pretty text-muted">{dictionary.sweepNote}</p>
        </div>
      </div>
    </SectionFrame>
  );
}
