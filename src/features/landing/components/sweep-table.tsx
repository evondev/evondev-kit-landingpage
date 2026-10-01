import { CircleCheck, CircleX } from "lucide-react";
import type { Dictionary } from "@/features/landing/types/dictionary";

interface SweepTableProps {
  dictionary: Dictionary["probe"];
}

/** Báo cáo probe mẫu: mỗi phép đo một hàng, mỗi khổ màn một cột. */
export default function SweepTable({ dictionary }: SweepTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border-strong bg-surface">
      <table className="w-full min-w-[440px] text-sm">
        <thead className="border-b border-border font-mono text-[11px] tracking-wider text-muted uppercase">
          <tr>
            <th scope="col" className="px-4 py-2.5 text-left font-normal">
              {dictionary.sweepCheckHeader}
            </th>
            {dictionary.sweepWidths.map((width) => (
              <th key={width} scope="col" className="px-2 py-2.5 text-center font-normal tabular-nums">
                {width}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {dictionary.sweepChecks.map((check) => (
            <tr key={check.name}>
              <th scope="row" className="px-4 py-3 text-left font-normal text-foreground">
                {check.name}
              </th>
              {check.marks.map((mark, index) => (
                <td key={`${check.name}-${dictionary.sweepWidths[index]}`} className="px-2 py-3 text-center">
                  {mark === "pass" ? (
                    <CircleCheck className="mx-auto size-4 text-emerald-600 dark:text-emerald-400" aria-label={dictionary.passLabel} />
                  ) : (
                    <CircleX className="mx-auto size-4 text-red-600 dark:text-red-400" aria-label={dictionary.failLabel} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
