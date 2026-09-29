import LeadTitle from "@/features/landing/components/lead-title";
import { kitPrincipleIcons } from "@/features/landing/constants/kit-principle-icons";
import type { KitPrinciple } from "@/features/landing/types/dictionary";

interface KitPrincipleCardProps {
  principle: KitPrinciple;
}

export default function KitPrincipleCard({ principle }: KitPrincipleCardProps) {
  const Icon = kitPrincipleIcons[principle.icon];

  return (
    <li className="bg-background p-6 sm:p-10">
      <div className="reveal">
        <Icon className="size-5 text-heat" aria-hidden />
        <div className="mt-5">
          <LeadTitle title={principle.title} />
        </div>
      </div>
    </li>
  );
}
