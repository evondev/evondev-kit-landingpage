import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import AccentTitle from "@/features/landing/components/accent-title";
import CommandBlock from "@/features/landing/components/command-block";
import HeroBackdrop from "@/features/landing/components/hero-backdrop";
import { installCommands } from "@/features/landing/constants/install-commands";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { Locale } from "@/features/landing/types/locale";
import { getLocalePath } from "@/features/landing/utils/get-locale-path";

interface KitHeroSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

/** Hero trang chủ evondevKit: nói về cả bộ, lệnh cài đặt ngay dưới nút. */
export default function KitHeroSection({ locale, dictionary }: KitHeroSectionProps) {
  const { hero } = dictionary.kitHome;
  const uiUxPath = getLocalePath(locale, "ui-ux");

  return (
    <section aria-labelledby="kit-hero-title" className="px-4 sm:px-6">
      <div className="relative isolate mx-auto w-full max-w-[1112px] border-x border-border">
        <HeroBackdrop />

        <div className="relative flex flex-col items-center px-5 pt-20 pb-20 text-center sm:px-10 sm:pt-28 sm:pb-28">
          <Link
            href={uiUxPath}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface py-1 pr-1 pl-3 text-xs font-medium text-foreground shadow-card transition-colors outline-hidden hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-heat/60 motion-safe:animate-hero-rise"
          >
            {hero.badge}
            <span className="grid size-5 place-items-center rounded-full bg-foreground text-white">
              <ArrowRight className="size-3" aria-hidden />
            </span>
          </Link>

          <h1
            id="kit-hero-title"
            className="mt-7 max-w-4xl text-4xl font-medium tracking-tight text-balance text-foreground sm:text-6xl sm:leading-[1.05] lg:text-7xl motion-safe:animate-hero-rise motion-safe:[animation-delay:80ms]"
          >
            <AccentTitle title={hero.title} />
          </h1>
          <p className="mt-6 max-w-xl text-base text-pretty sm:text-lg motion-safe:animate-hero-rise motion-safe:[animation-delay:180ms]">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 motion-safe:animate-hero-rise motion-safe:[animation-delay:260ms]">
            <ButtonLink href={uiUxPath} variant="primary">
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#install" variant="secondary">
              {hero.secondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-12 w-full max-w-xl motion-safe:animate-hero-rise motion-safe:[animation-delay:340ms]">
            <p className="mb-3 font-mono text-xs tracking-wider text-muted uppercase">{hero.commandsLabel}</p>
            <CommandBlock commands={installCommands} copyLabels={dictionary.copyButton} className="shadow-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
