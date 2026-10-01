import CommandBlock from "@/features/landing/components/command-block";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { InstallToolEntry } from "@/features/landing/types/install-tool-entry";

interface InstallStepsProps {
  tool: InstallToolEntry;
  dictionary: Dictionary;
}

/** Nội dung một tab cài đặt: khung cửa sổ, rồi từng bước kèm lệnh. */
export default function InstallSteps({ tool, dictionary }: InstallStepsProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-card">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full border border-border-strong" />
          <span className="size-2.5 rounded-full border border-border-strong" />
          <span className="size-2.5 rounded-full border border-border-strong" />
        </span>
        <span className="flex-1 font-mono text-xs text-muted">{tool.name}</span>
      </div>
      <ol className="divide-y divide-border">
        {tool.steps.map((step, index) => (
          // Màn hẹp ô lệnh tràn hết bề ngang bước, không thụt theo cột số: thụt thì lệnh npx bị bẻ giữa chữ.
          <li key={step.description} className="grid grid-cols-[1.5rem_1fr] gap-x-4 p-5 sm:p-6">
            <span className="pt-0.5 font-mono text-sm text-heat-ink tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="min-w-0 text-pretty text-foreground">{step.description}</p>
            {step.commands.length > 0 ? (
              <CommandBlock
                commands={step.commands}
                copyLabels={dictionary.copyButton}
                className="col-span-2 mt-3 bg-background sm:col-span-1 sm:col-start-2"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
