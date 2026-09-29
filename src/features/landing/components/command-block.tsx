import CopyButton from "@/features/landing/components/copy-button";
import type { Dictionary } from "@/features/landing/types/dictionary";
import { cn } from "@/utils/cn";

interface CommandBlockProps {
  commands: string[];
  copyLabels: Dictionary["copyButton"];
  className?: string;
}

/** Mỗi lệnh một dòng, mỗi dòng một nút copy: slash command trong Claude Code phải gõ từng lệnh. */
export default function CommandBlock({ commands, copyLabels, className }: CommandBlockProps) {
  return (
    <ul
      className={cn(
        "divide-y divide-border overflow-hidden rounded-xl border border-border-strong bg-surface text-left text-foreground",
        className,
      )}
    >
      {commands.map((command) => (
        <li key={command} className="flex items-center gap-3 py-1.5 pr-1.5 pl-4">
          <span className="shrink-0 font-mono text-sm text-heat select-none" aria-hidden>
            &gt;
          </span>
          <code className="min-w-0 flex-1 font-mono text-[13px] [overflow-wrap:anywhere]">{command}</code>
          <CopyButton text={command} copyLabel={copyLabels.copy} copiedLabel={copyLabels.copied} />
        </li>
      ))}
    </ul>
  );
}
