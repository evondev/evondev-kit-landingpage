import StatusTag from "@/features/landing/components/status-tag";
import { modeIcons } from "@/features/landing/constants/mode-icons";
import type { Dictionary, ModeItem } from "@/features/landing/types/dictionary";

interface ModeCardProps {
  mode: ModeItem;
  promptLabel: string;
  statusLabels: Dictionary["statusLabels"];
}

export default function ModeCard({ mode, promptLabel, statusLabels }: ModeCardProps) {
  const Icon = modeIcons[mode.id];

  return (
    <li className="flex min-w-0 flex-col bg-background p-6 transition-colors hover:bg-surface sm:p-8">
      <span className="grid size-10 place-items-center rounded-xl border border-border-strong bg-surface text-heat">
        <Icon className="size-5" aria-hidden />
      </span>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-medium text-foreground">{mode.title}</h3>
        {mode.status ? <StatusTag status={mode.status} label={statusLabels[mode.status]} /> : null}
      </div>
      <p className="mt-2 text-sm text-pretty text-muted md:flex-1">{mode.description}</p>
      <div className="mt-6">
        <p className="font-mono text-[11px] tracking-wider text-muted uppercase">{promptLabel}</p>
        <code className="mt-2 block rounded-lg border border-border bg-surface px-3 py-2.5 font-mono text-xs leading-relaxed text-foreground [overflow-wrap:anywhere]">
          {mode.prompt}
        </code>
      </div>
    </li>
  );
}
