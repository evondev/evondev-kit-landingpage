import type { ShowcaseLevel } from "@/features/landing/types/showcase-level";
import type { TasteRuleId } from "@/features/landing/types/taste-rule-id";

export interface StatItem {
  value: string;
  label: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
  sample: string;
}

export interface TasteRule {
  id: TasteRuleId;
  code: string;
  title: string;
  description: string;
}

export interface PlatformItem {
  name: string;
  description: string;
  isTested: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  description: string;
}

/** Mọi chữ trên trang. vi.ts và en.ts cùng implement interface này. */
export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  header: {
    homeLabel: string;
    showcase: string;
    install: string;
    github: string;
    installCta: string;
    switchLanguageLabel: string;
  };
  copyButton: {
    copy: string;
    copied: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    commandsLabel: string;
    secondaryCta: string;
    imageAlt: string;
    promptCardLabel: string;
    promptCardText: string;
    checkCardTitle: string;
    checkCardItems: string[];
  };
  stats: {
    items: StatItem[];
    source: string;
  };
  howItWorks: SectionIntro & {
    steps: HowItWorksStep[];
  };
  showcase: SectionIntro & {
    tabs: Record<ShowcaseLevel, string>;
    promptLabel: string;
    unprecedentedBadge: string;
    placeholder: string;
    openImageLabel: string;
    closeLabel: string;
    lightLabel: string;
    darkLabel: string;
    themeLabel: string;
    languageNote: string | null;
  };
  taste: SectionIntro & {
    rules: TasteRule[];
  };
  platforms: SectionIntro & {
    testedBadge: string;
    untestedBadge: string;
    items: PlatformItem[];
  };
  install: SectionIntro & {
    tabsLabel: string;
  };
  faq: Omit<SectionIntro, "description"> & {
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    license: string;
  };
}
