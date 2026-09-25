import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/components/button";
import CommandBlock from "@/features/landing/components/command-block";
import DotGrid from "@/features/landing/components/dot-grid";
import EyebrowPill from "@/features/landing/components/eyebrow-pill";
import GlowBackdrop from "@/features/landing/components/glow-backdrop";
import HeroCheckCard from "@/features/landing/components/hero-check-card";
import HeroPromptCard from "@/features/landing/components/hero-prompt-card";
import Screenshot from "@/features/landing/components/screenshot";
import { heroCommands } from "@/features/landing/constants/hero-commands";
import { heroShowcaseId } from "@/features/landing/constants/hero-showcase-id";
import type { Dictionary } from "@/features/landing/types/dictionary";
import { getShowcaseImages } from "@/features/landing/utils/get-showcase-images";

interface HeroSectionProps {
  dictionary: Dictionary;
}

export default function HeroSection({ dictionary }: HeroSectionProps) {
  const heroImages = getShowcaseImages(heroShowcaseId);
  const { hero } = dictionary;

  return (
    <section aria-labelledby="hero-title" className="relative isolate pt-16 sm:pt-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <EyebrowPill label={hero.eyebrow} />
        <h1
          id="hero-title"
          className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl sm:leading-[1.1]"
        >
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-pretty sm:text-lg">{hero.subheadline}</p>

        <div className="mt-10 w-full max-w-xl">
          <p className="mb-3 text-sm font-medium text-foreground">{hero.commandsLabel}</p>
          <CommandBlock commands={heroCommands} copyLabels={dictionary.copyButton} className="shadow-float" />
        </div>

        <ButtonLink href="#showcase" variant="ghost" className="mt-4">
          <ArrowDown className="size-4 shrink-0" aria-hidden />
          {hero.secondaryCta}
        </ButtonLink>

        <div className="relative mt-14 w-full sm:mt-20">
          <DotGrid className="-inset-x-10 -top-16 -bottom-10" />
          <GlowBackdrop tone="blue" className="-top-24 -left-24 size-[520px]" />
          <GlowBackdrop tone="violet" className="-right-24 -bottom-24 size-[520px]" />

          {/* Bo lồng nhau: ngoài 20px = trong 12px + đệm 8px. */}
          <div className="rounded-[20px] border border-border bg-surface/80 p-2 shadow-float-lg">
            <Screenshot
              image={heroImages?.light ?? null}
              alt={hero.imageAlt}
              placeholderLabel={dictionary.showcase.placeholder}
              sizes="(min-width: 1152px) 1120px, 100vw"
              isPriority
              className="rounded-xl"
            />
          </div>

          {/* Hai card nổi chồng lên mép ảnh, chỉ ở màn rộng: màn hẹp chúng che mất ảnh. */}
          <div className="absolute -top-10 -left-6 hidden lg:block">
            <HeroPromptCard label={hero.promptCardLabel} text={hero.promptCardText} />
          </div>
          <div className="absolute -right-6 -bottom-12 hidden lg:block">
            <HeroCheckCard title={hero.checkCardTitle} items={hero.checkCardItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
