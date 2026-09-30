import CountUpNumber from "@/features/landing/components/count-up-number";
import SectionFrame from "@/features/landing/components/section-frame";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface ProofStripProps {
  dictionary: Dictionary["proof"];
}

/** Hàng số thật dưới hero, chia ô bằng đường tóc như hàng logo "trusted by". */
export default function ProofStrip({ dictionary }: ProofStripProps) {
  return (
    <SectionFrame ariaLabel={dictionary.source}>
      <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-[1.5fr_repeat(4,1fr)]">
        <p className="col-span-2 flex items-center bg-background px-5 py-8 text-lg text-pretty text-foreground sm:px-10 lg:col-span-1">
          <span>
            {dictionary.lead} <span className="text-heat-ink">{dictionary.accent}</span> {dictionary.tail}
          </span>
        </p>
        {dictionary.items.map((stat) => (
          // column-reverse để số đứng trên nhãn mà dt vẫn đi trước dd; justify-end là canh từ trên xuống,
          // nên nhãn dài xuống dòng cũng không đẩy số lệch khỏi hàng.
          <dl key={stat.label} className="flex flex-col-reverse justify-end gap-1 bg-background px-5 py-8 sm:px-8">
            <dt className="text-sm text-muted">{stat.label}</dt>
            <dd className="text-4xl font-medium tracking-tight text-foreground tabular-nums">
              <CountUpNumber value={stat.value} />
            </dd>
          </dl>
        ))}
      </div>
      <p className="border-t border-border px-5 py-3 font-mono text-xs text-muted sm:px-10">{dictionary.source}</p>
    </SectionFrame>
  );
}
