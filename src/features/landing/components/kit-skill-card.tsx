import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FeatureIcon from "@/features/landing/components/feature-icon";
import StatusTag from "@/features/landing/components/status-tag";
import { kitSkillIcons } from "@/features/landing/constants/kit-skill-icons";
import { kitSkillPages } from "@/features/landing/constants/kit-skill-pages";
import type { Dictionary, KitSkillItem } from "@/features/landing/types/dictionary";
import type { Locale } from "@/features/landing/types/locale";
import { getLocalePath } from "@/features/landing/utils/get-locale-path";

interface KitSkillCardProps {
  skill: KitSkillItem;
  locale: Locale;
  detailLabel: string;
  statusLabels: Dictionary["statusLabels"];
}

/** Một skill đã có trong bộ, dẫn sang trang riêng của skill đó. */
export default function KitSkillCard({ skill, locale, detailLabel, statusLabels }: KitSkillCardProps) {
  return (
    <li className="group flex min-w-0 flex-col bg-background p-6 transition-colors hover:bg-surface sm:p-8">
      <div className="reveal flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <FeatureIcon icon={kitSkillIcons[skill.id]} />
          {skill.status ? <StatusTag status={skill.status} label={statusLabels[skill.status]} /> : null}
        </div>

        <p className="mt-6 font-mono text-sm text-heat-ink">{skill.command}</p>
        <h3 className="mt-1 text-lg font-medium text-foreground">{skill.title}</h3>
        <p className="mt-2 text-sm text-pretty text-muted md:flex-1">{skill.description}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {skill.facts.map((fact) => (
            <li key={fact} className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px] text-muted">
              {fact}
            </li>
          ))}
        </ul>

        <Link
          href={getLocalePath(locale, kitSkillPages[skill.id])}
          className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-md text-sm font-medium text-heat-ink outline-hidden hover:underline hover:underline-offset-4 focus-visible:ring-2 focus-visible:ring-heat/60"
        >
          {detailLabel}
          <span className="sr-only">: {skill.command}</span>
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </li>
  );
}
