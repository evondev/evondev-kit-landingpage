import { tasteDemos } from "@/features/landing/constants/taste-demos";
import type { TasteRule } from "@/features/landing/types/dictionary";

interface TasteRuleCardProps {
  rule: TasteRule;
}

/** Một luật: hình minh hoạ trên, mã luật và chữ dưới. */
export default function TasteRuleCard({ rule }: TasteRuleCardProps) {
  const Demo = tasteDemos[rule.id];

  // Ba hàng minh hoạ / mã + tiêu đề / mô tả dùng chung dòng kẻ với card bên cạnh (subgrid),
  // nên tiêu đề nào xuống dòng thì mô tả của cả hàng vẫn bắt đầu cùng một chỗ.
  return (
    <li className="row-span-3 grid min-w-0 grid-rows-subgrid gap-0 bg-background">
      {/* Hình minh hoạ dùng token gốc của skill (.skill-theme), thuần trang trí. */}
      <div
        aria-hidden
        className="skill-theme reveal grid h-56 place-items-center overflow-hidden border-b border-border bg-sunken/60 px-6"
      >
        <Demo />
      </div>
      <div className="reveal px-6 pt-6 sm:px-8 sm:pt-8">
        <p className="font-mono text-xs text-heat-ink">{rule.code}</p>
        <h3 className="mt-2 text-lg font-medium text-foreground">{rule.title}</h3>
      </div>
      <p className="reveal px-6 pt-2 pb-6 text-sm text-pretty text-muted sm:px-8 sm:pb-8">{rule.description}</p>
    </li>
  );
}
