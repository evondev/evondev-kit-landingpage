import SeverityLabel from "@/features/landing/components/severity-label";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { SeverityTone } from "@/features/landing/types/severity-tone";

interface ReviewTableProps {
  dictionary: Dictionary["probe"];
}

/** Bảng lỗi mẫu của chế độ soi: số dòng, lỗi kèm hạng, đề xuất sửa. */
export default function ReviewTable({ dictionary }: ReviewTableProps) {
  const severityLabels = Object.fromEntries(
    dictionary.severities.map((severity) => [severity.tone, severity.label]),
  ) as Record<SeverityTone, string>;

  return (
    <div className="overflow-x-auto rounded-xl border border-border-strong bg-surface">
      <table className="w-full min-w-[440px] text-left text-sm">
        <thead className="border-b border-border font-mono text-[11px] tracking-wider text-muted uppercase">
          <tr>
            <th scope="col" className="w-10 px-4 py-2.5 font-normal">
              {dictionary.reviewHeaders.number}
            </th>
            <th scope="col" className="px-4 py-2.5 font-normal">
              {dictionary.reviewHeaders.issue}
            </th>
            <th scope="col" className="px-4 py-2.5 font-normal">
              {dictionary.reviewHeaders.fix}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {dictionary.reviewRows.map((row, index) => (
            <tr key={row.issue} className="align-top">
              <td className="px-4 py-3 font-mono text-xs text-muted tabular-nums">{index + 1}</td>
              <td className="px-4 py-3">
                <p className="text-foreground">{row.issue}</p>
                <p className="mt-1.5">
                  <SeverityLabel tone={row.severity} label={severityLabels[row.severity]} />
                </p>
              </td>
              <td className="px-4 py-3 text-muted">{row.fix}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
