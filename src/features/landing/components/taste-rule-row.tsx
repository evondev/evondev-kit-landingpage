import DotGrid from "@/features/landing/components/dot-grid";
import DottedDivider from "@/features/landing/components/dotted-divider";
import EyebrowPill from "@/features/landing/components/eyebrow-pill";
import GlowBackdrop from "@/features/landing/components/glow-backdrop";
import { tasteDemos } from "@/features/landing/constants/taste-demos";
import type { TasteRule } from "@/features/landing/types/dictionary";
import { cn } from "@/utils/cn";

interface TasteRuleRowProps {
  rule: TasteRule;
  isReversed: boolean;
}

/** Một luật: hình minh hoạ một bên, chữ một bên, hàng sau đổi bên. */
export default function TasteRuleRow({ rule, isReversed }: TasteRuleRowProps) {
  const Demo = tasteDemos[rule.id];

  return (
    <li className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className={cn("relative isolate", isReversed && "md:order-last")}>
        <DotGrid className="-inset-8" />
        <GlowBackdrop tone={isReversed ? "violet" : "blue"} className="-inset-10" />
        {/* Hình minh hoạ dùng token gốc của skill (.skill-theme), thuần trang trí. */}
        <div
          aria-hidden
          className="skill-theme grid h-64 place-items-center overflow-hidden rounded-2xl border border-border-strong bg-surface px-6 shadow-float-lg *:scale-110 sm:h-72 lg:*:scale-150"
        >
          <Demo />
        </div>
      </div>

      <div className="min-w-0">
        <EyebrowPill label={rule.code} className="font-mono text-xs" />
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{rule.title}</h3>
        <p className="mt-4 text-pretty sm:text-lg">{rule.description}</p>
        <DottedDivider className="mt-8 max-w-sm" />
      </div>
    </li>
  );
}
