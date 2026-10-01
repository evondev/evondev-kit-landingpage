import type { BeforeAfterStage } from "@/features/landing/types/before-after-stage";
import type { FeatureStatus } from "@/features/landing/types/feature-status";
import type { KitPrincipleIconId } from "@/features/landing/types/kit-principle-icon-id";
import type { KitSkillId } from "@/features/landing/types/kit-skill-id";
import type { ModeGroupId } from "@/features/landing/types/mode-group-id";
import type { ModeId } from "@/features/landing/types/mode-id";
import type { ProbeMark } from "@/features/landing/types/probe-mark";
import type { RoadmapIconId } from "@/features/landing/types/roadmap-icon-id";
import type { SeverityTone } from "@/features/landing/types/severity-tone";
import type { SitePage } from "@/features/landing/types/site-page";
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

export interface ModeGroup {
  id: ModeGroupId;
  title: string;
  description: string;
  items: ModeItem[];
}

export interface DesignerStep {
  code: string;
  title: string;
  description: string;
  /** Chỗ skill dừng chờ bạn, không có thì skill đi tiếp */
  gate: string | null;
}

/** Một dòng trong khung lý do của wireframe: Ưu, Nhược, Hợp khi. */
export interface WireframeReasonItem {
  label: string;
  text: string;
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
  reasonItems: WireframeReasonItem[];
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

export interface VisualStyleGroup {
  label: string;
  isDefault: boolean;
  styles: string[];
}

export interface RoadmapItem {
  icon: RoadmapIconId;
  title: string;
  description: string;
  progress: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface AnnouncementContent {
  text: string;
  linkLabel: string;
}

/** Khối kêu gọi cài đặt cuối trang, dùng chung cho trang chủ và trang skill. */
export interface CtaContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface KitSkillItem {
  id: KitSkillId;
  command: string;
  title: string;
  description: string;
  facts: string[];
  status: FeatureStatus | null;
}

export interface KitPrinciple {
  icon: KitPrincipleIconId;
  title: SplitTitle;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** Mọi chữ trên trang. vi.ts và en.ts cùng implement interface này. */
export interface Dictionary {
  meta: Record<SitePage, PageMeta>;
  header: {
    homeLabel: string;
    navLabel: string;
    nav: {
      modes: string;
      designer: string;
      showcase: string;
      install: string;
      roadmap: string;
      skills: string;
      principles: string;
    };
    github: string;
    installCta: string;
    switchLanguageLabel: string;
  };
  kitHome: {
    announcement: AnnouncementContent;
    hero: {
      badge: string;
      title: SplitTitle;
      subheadline: string;
      primaryCta: string;
      secondaryCta: string;
      commandsLabel: string;
    };
    skills: SectionIntro & {
      detailLabel: string;
      placeholder: {
        title: string;
        description: string;
      };
      items: KitSkillItem[];
    };
    principles: SectionIntro & {
      items: KitPrinciple[];
    };
    cta: CtaContent;
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
    videoLabel: string;
    playVideoLabel: string;
    pauseVideoLabel: string;
  };
  supportedTools: {
    /** Nhãn mono bên trái dải logo chạy ngang */
    label: string;
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
    groups: ModeGroup[];
  };
  designer: SectionIntro & {
    steps: DesignerStep[];
    wireframe: WireframeLabels;
    toolbarNote: string;
  };
  beforeAfter: SectionIntro & {
    stages: Record<BeforeAfterStage, string>;
    imageAlts: Record<BeforeAfterStage, string>;
    pairLabel: string;
    sliderLabel: string;
    windowLabel: string;
    placeholder: string;
    hint: string;
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
    styleGroups: VisualStyleGroup[];
  };
  install: SectionIntro & {
    tabsLabel: string;
  };
  roadmap: SectionIntro & {
    items: RoadmapItem[];
  };
  cta: CtaContent;
  faq: Omit<SectionIntro, "description"> & {
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    license: string;
  };
}
