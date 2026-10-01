import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import AccentTitle from "@/features/landing/components/accent-title";
import HeroBackdrop from "@/features/landing/components/hero-backdrop";
import HeroPromptBox from "@/features/landing/components/hero-prompt-box";
import HeroVideo from "@/features/landing/components/hero-video";
import { heroVideos } from "@/features/landing/constants/hero-videos";
import type { Dictionary } from "@/features/landing/types/dictionary";
import type { HeroPromptMode } from "@/features/landing/types/hero-prompt-mode";
import type { Locale } from "@/features/landing/types/locale";

interface HeroSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const { hero } = dictionary;
  const promptModes: HeroPromptMode[] = dictionary.modes.groups.flatMap((group) => group.items).map((mode) => ({
    id: mode.id,
    tabLabel: mode.tabLabel,
    prompt: mode.prompt,
  }));

  return (
    <section aria-labelledby="hero-title" className="px-4 sm:px-6">
      <div className="relative isolate mx-auto w-full max-w-[1112px] border-x border-border">
        <HeroBackdrop />

        <div className="relative flex flex-col items-center px-5 pt-20 text-center sm:px-10 sm:pt-28">
          <Link
            href="#designer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface py-1 pr-1 pl-3 text-xs font-medium text-foreground shadow-card transition-colors outline-hidden hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-heat/60 motion-safe:animate-hero-rise"
          >
            {hero.badge}
            <span className="grid size-5 place-items-center rounded-full bg-foreground text-background">
              <ArrowRight className="size-3" aria-hidden />
            </span>
          </Link>

          <h1
            id="hero-title"
            className="mt-7 max-w-4xl text-4xl font-medium tracking-tight text-balance text-foreground sm:text-6xl sm:leading-[1.05] lg:text-7xl motion-safe:animate-hero-rise motion-safe:[animation-delay:80ms]"
          >
            <AccentTitle title={hero.title} />
          </h1>
          <p className="mt-6 max-w-xl text-base text-pretty sm:text-lg motion-safe:animate-hero-rise motion-safe:[animation-delay:180ms]">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 motion-safe:animate-hero-rise motion-safe:[animation-delay:260ms]">
            <ButtonLink href="#install" variant="primary">
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#showcase" variant="secondary">
              {hero.secondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-10 flex w-full justify-center motion-safe:animate-hero-rise motion-safe:[animation-delay:340ms]">
            <HeroPromptBox
              modes={promptModes}
              tabsLabel={hero.promptBoxLabel}
              copyLabel={hero.copyPromptLabel}
              copiedLabel={hero.copiedPromptLabel}
            />
          </div>
        </div>

        <div className="relative px-3 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
          <HeroVideo
            source={heroVideos[locale]}
            label={hero.videoLabel}
            playLabel={hero.playVideoLabel}
            pauseLabel={hero.pauseVideoLabel}
          />
        </div>
      </div>
    </section>
  );
}
