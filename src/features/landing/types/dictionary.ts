import type { FeatureStatus } from "@/features/landing/types/feature-status";
import type { ModeId } from "@/features/landing/types/mode-id";
import type { ProbeMark } from "@/features/landing/types/probe-mark";
import type { RoadmapIconId } from "@/features/landing/types/roadmap-icon-id";
import type { SeverityTone } from "@/features/landing/types/severity-tone";
import type { ShowcaseLevel } from "@/features/landing/types/showcase-level";
import type { TasteRuleId } from "@/features/landing/types/taste-rule-id";

export interface StatItem {
  value: string;
  label: string;
}

/** Tiêu đề hai phần: phần đầu màu chữ, phần sau màu cam. */
export interface SplitTitle {
  lead: string;
  accent: string;
}

export interface SectionIntro {
  /** Nhãn mono trên thanh số thứ tự: [ 01 / 08 ] · NHÃN */
  label: string;
  /** Nhãn nhỏ ngay trên tiêu đề */
  eyebrow: string;
  title: SplitTitle;
  description: string;
}

export interface ModeItem {
  id: ModeId;
  /** Tên ngắn trên hàng tab của hero */
  tabLabel: string;
  title: string;
  description: string;
  /** Câu đề mẫu, lấy từ bảng "Dùng" trong README của evondevKit */
  prompt: string;
  status: FeatureStatus | null;
}

export interface DesignerStep {
  code: string;
  title: string;
  description: string;
  /** Chỗ skill dừng chờ bạn, không có thì skill đi tiếp */
  gate: string | null;
}

export interface WireframeLabels {
  toolbarLabel: string;
  optionLabel: string;
  colorLabel: string;
  desktopLabel: string;
  mobileLabel: string;
  stateLabel: string;
  stateValue: string;
  reasonTitle: string;
  reasonLines: string[];
  recommendedLabel: string;
}

export interface SeverityItem {
  tone: SeverityTone;
  label: string;
  description: string;
}

export interface ReviewRow {
  issue: string;
  severity: SeverityTone;
  fix: string;
}

export interface ProbeCheck {
  name: string;
  marks: ProbeMark[];
}

export interface TasteRule {
  id: TasteRuleId;
  code: string;
  title: string;
  description: string;
}

export interface VisualStyle {
  name: string;
  isDefault: boolean;
}

export interface RoadmapItem {
  icon: RoadmapIconId;
  title: string;
  description: string;
  progress: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Mọi chữ trên trang. vi.ts và en.ts cùng implement interface này. */
export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  announcement: {
    text: string;
    linkLabel: string;
  };
  header: {
    homeLabel: string;
    navLabel: string;
    modes: string;
    designer: string;
    showcase: string;
    install: string;
    roadmap: string;
    github: string;
    installCta: string;
    switchLanguageLabel: string;
  };
  copyButton: {
    copy: string;
    copied: string;
  };
  statusLabels: Record<FeatureStatus, string>;
  hero: {
    badge: string;
    title: SplitTitle;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    promptBoxLabel: string;
    copyPromptLabel: string;
    copiedPromptLabel: string;
    imageAlt: string;
    windowLabel: string;
  };
  proof: {
    lead: string;
    accent: string;
    tail: string;
    items: StatItem[];
    source: string;
  };
  modes: SectionIntro & {
    promptLabel: string;
    items: ModeItem[];
  };
  designer: SectionIntro & {
    steps: DesignerStep[];
    wireframe: WireframeLabels;
    toolbarNote: string;
  };
  probe: SectionIntro & {
    reviewTitle: SplitTitle;
    reviewHeaders: {
      number: string;
      issue: string;
      fix: string;
    };
    reviewRows: ReviewRow[];
    reviewReply: string;
    severities: SeverityItem[];
    sweepTitle: SplitTitle;
    sweepWidths: string[];
    sweepCheckHeader: string;
    sweepChecks: ProbeCheck[];
    sweepNote: string;
    passLabel: string;
    failLabel: string;
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
    stylesTitle: string;
    stylesNote: string;
    defaultStyleLabel: string;
    styles: VisualStyle[];
  };
  install: SectionIntro & {
    tabsLabel: string;
    testedBadge: string;
    untestedBadge: string;
  };
  roadmap: SectionIntro & {
    items: RoadmapItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  faq: Omit<SectionIntro, "description"> & {
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    license: string;
  };
}
