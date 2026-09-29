import { tasteDemos } from "@/features/landing/constants/taste-demos";
import type { TasteRule } from "@/features/landing/types/dictionary";

interface TasteRuleCardProps {
  rule: TasteRule;
}

/** Một luật: hình minh hoạ trên, mã luật và chữ dưới. */
export default function TasteRuleCard({ rule }: TasteRuleCardProps) {
  const Demo = tasteDemos[rule.id];

  return (
    <li className="flex min-w-0 flex-col bg-background">
      {/* Hình minh hoạ dùng token gốc của skill (.skill-theme), thuần trang trí. */}
      <div
        aria-hidden
        className="skill-theme grid h-56 place-items-center overflow-hidden border-b border-border bg-sunken/60 px-6"
      >
        <Demo />
      </div>
      <div className="p-6 sm:p-8">
        <p className="font-mono text-xs text-heat-ink">{rule.code}</p>
        <h3 className="mt-2 text-lg font-medium text-foreground">{rule.title}</h3>
        <p className="mt-2 text-sm text-pretty text-muted">{rule.description}</p>
      </div>
    </li>
  );
}
