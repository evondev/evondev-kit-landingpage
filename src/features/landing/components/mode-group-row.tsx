import ModeCard from "@/features/landing/components/mode-card";
import type { Dictionary, ModeGroup } from "@/features/landing/types/dictionary";
import { getModeGridClasses } from "@/features/landing/utils/get-mode-grid-classes";

interface ModeGroupRowProps {
  group: ModeGroup;
  number: number;
  promptLabel: string;
  statusLabels: Dictionary["statusLabels"];
}

/** Một nhóm việc: tên nhóm và ghi chú bên trái, các lối của nhóm xếp thành hàng bên phải. */
export default function ModeGroupRow({ group, number, promptLabel, statusLabels }: ModeGroupRowProps) {
  const paddedNumber = String(number).padStart(2, "0");
  const isSingleMode = group.items.length === 1;

  return (
    <div className="grid border-t border-border lg:grid-cols-[16rem_minmax(0,1fr)]">
      <div className="reveal flex flex-col gap-2 border-b border-border p-6 sm:p-8 lg:border-r lg:border-b-0">
        <span className="font-mono text-xs tracking-wider text-heat-ink">{paddedNumber}</span>
        <h3 className="text-xl font-medium text-foreground">{group.title}</h3>
        <p className="text-sm text-pretty text-muted">{group.description}</p>
      </div>
      <ul className={getModeGridClasses(group.items.length)}>
        {group.items.map((mode) => (
          <ModeCard
            key={mode.id}
            mode={mode}
            promptLabel={promptLabel}
            statusLabels={statusLabels}
            isWide={isSingleMode}
          />
        ))}
      </ul>
    </div>
  );
}
