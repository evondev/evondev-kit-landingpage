import DottedDivider from "@/features/landing/components/dotted-divider";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface StatsSectionProps {
  dictionary: Dictionary["stats"];
}

export default function StatsSection({ dictionary }: StatsSectionProps) {
  return (
    <section aria-label={dictionary.source} className="pt-24 sm:pt-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <DottedDivider />
        <dl className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {dictionary.items.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse gap-1 text-center">
              <dt className="text-sm">{stat.label}</dt>
              <dd className="text-5xl font-semibold tracking-tight text-foreground tabular-nums">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <DottedDivider />
        <p className="mt-4 text-center text-sm text-muted">{dictionary.source}</p>
      </div>
    </section>
  );
}
