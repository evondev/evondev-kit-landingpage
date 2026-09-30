import FeatureIcon from "@/features/landing/components/feature-icon";
import StatusTag from "@/features/landing/components/status-tag";
import { modeIcons } from "@/features/landing/constants/mode-icons";
import type { Dictionary, ModeItem } from "@/features/landing/types/dictionary";
import { getModeCardClasses } from "@/features/landing/utils/get-mode-card-classes";
import { cn } from "@/utils/cn";

interface ModeCardProps {
  mode: ModeItem;
  promptLabel: string;
  statusLabels: Dictionary["statusLabels"];
  /** Lối duy nhất của nhóm: card chiếm cả hàng, chữ bên trái, đề mẫu bên phải */
  isWide?: boolean;
}

export default function ModeCard({ mode, promptLabel, statusLabels, isWide = false }: ModeCardProps) {
  // Hiện dần từng phần nội dung, không phải cả ô: ô mờ đi sẽ để lộ nền xám của đường kẻ lưới.
  return (
    <li className={getModeCardClasses(isWide)}>
      <div className="reveal flex items-start justify-between gap-3 pb-6">
        <FeatureIcon icon={modeIcons[mode.id]} />
        {mode.status ? <StatusTag status={mode.status} label={statusLabels[mode.status]} /> : null}
      </div>
      <h4 className={cn("reveal text-lg font-medium text-foreground", isWide && "md:col-start-1 md:row-start-2")}>
        {mode.title}
      </h4>
      <p className={cn("reveal pt-2 text-sm text-pretty text-muted", isWide && "md:col-start-1 md:row-start-3")}>
        {mode.description}
      </p>
      <div
        className={cn(
          "reveal flex flex-col pt-6",
          isWide && "md:col-start-2 md:row-span-2 md:row-start-2 md:self-end md:pt-0",
        )}
      >
        <p className="font-mono text-[11px] tracking-wider text-muted uppercase">{promptLabel}</p>
        <code className="mt-2 block flex-1 rounded-lg border border-border bg-surface px-3 py-2.5 font-mono text-xs leading-relaxed text-foreground [overflow-wrap:anywhere]">
          {mode.prompt}
        </code>
      </div>
    </li>
  );
}
