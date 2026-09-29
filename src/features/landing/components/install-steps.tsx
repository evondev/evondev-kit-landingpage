import CommandBlock from "@/features/landing/components/command-block";
import TestedBadge from "@/features/landing/components/tested-badge";
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
        <TestedBadge
          isTested={tool.isTested}
          label={tool.isTested ? dictionary.install.testedBadge : dictionary.install.untestedBadge}
        />
      </div>
      <ol className="divide-y divide-border">
        {tool.steps.map((step, index) => (
          <li key={step.description} className="flex gap-4 p-5 sm:p-6">
            <span className="w-6 shrink-0 pt-0.5 font-mono text-sm text-heat-ink tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-pretty text-foreground">{step.description}</p>
              {step.commands.length > 0 ? (
                <CommandBlock commands={step.commands} copyLabels={dictionary.copyButton} className="mt-3 bg-background" />
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
