import type { Dictionary } from "@/features/landing/types/dictionary";

export const enDictionary: Dictionary = {
  meta: {
    title: "evon:ui-ux · Dashboard UI that doesn't look AI-made",
    description:
      "A Claude Code skill for dashboard screens: it reads your codebase, assembles from approved components, and checks itself with numbers. Free, MIT.",
  },
  header: {
    homeLabel: "evondevKit, back to top",
    showcase: "Showcase",
    install: "Install",
    github: "GitHub",
    installCta: "Install skill",
    switchLanguageLabel: "Xem bản tiếng Việt",
  },
  copyButton: {
    copy: "Copy",
    copied: "Copied",
  },
  hero: {
    eyebrow: "Claude Code skill · free, MIT",
    headline: "Dashboard UI that doesn't look AI-made.",
    subheadline:
      "evon:ui-ux reads your codebase, assembles screens from approved components, and checks itself with numbers, not adjectives. Tables, forms, modals, settings.",
    commandsLabel: "Run these two commands in Claude Code",
    secondaryCta: "See what it built",
    imageAlt: "Customer management page built by the skill: table with search, filters, and pagination",
    promptCardLabel: "Prompt",
    promptCardText: "Build me a customer table with search, filters, and pagination.",
    checkCardTitle: "Stress round",
    checkCardItems: ["Shrink to 375px", "200-character title", "Empty list"],
  },
  stats: {
    items: [
      { value: "25", label: "approved components" },
      { value: "8", label: "never-seen UIs built to spec" },
      { value: "9", label: "composite blocks" },
      { value: "3", label: "full pages" },
    ],
    source: "Counted from the skill's test list, Sep 25, 2026.",
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "One prompt, three steps",
    description:
      "The skill doesn't describe good design with adjectives. It follows a fixed order, bans the habits that give AI-built UI away, and constrains the rest with numbers.",
    steps: [
      {
        title: "Write one prompt",
        description:
          "No spec, no wireframe. Where the prompt is vague, the skill picks a default and tells you what it chose.",
        sample: "Build me a customer table with search, filters, pagination, and multi-select for bulk delete.",
      },
      {
        title: "Read the codebase first",
        description:
          "It audits your stack, existing components, and visual style. If you have it, it uses yours. If not, it assembles from approved layouts and components.",
        sample: "Audit: Next + Tailwind v4, shadcn present. Avatar exists at components/ui/avatar.tsx, using it. No dropdown yet, building one.",
      },
      {
        title: "Pass three check gates",
        description:
          "Before the first class, before reporting back, and a stress round. Every checklist line is a bug that actually happened.",
        sample: "Shrink to 375px · 200-character title · 0 and 1,284,500 · empty list · dark mode",
      },
    ],
  },
  showcase: {
    eyebrow: "Showcase",
    title: "One prompt, this screen",
    description: "Each tile shows the original prompt and the screen the skill built from it. No hand edits afterwards.",
    tabs: {
      component: "Components",
      block: "Blocks",
      page: "Pages",
    },
    promptLabel: "Prompt",
    unprecedentedBadge: "No template",
    placeholder: "Screenshot coming",
    openImageLabel: "View larger",
    closeLabel: "Close",
    lightLabel: "Light",
    darkLabel: "Dark",
    themeLabel: "Color mode",
    languageNote: "Screens shown in Vietnamese. The skill writes UI copy in your project's language.",
  },
  taste: {
    eyebrow: "The skill's taste",
    title: "Numbered rules, no adjectives",
    description:
      "177 rules in ten groups, each living in exactly one file. These are five you can see on screen right away.",
    rules: [
      {
        id: "flat",
        code: "P1",
        title: "Flat by default",
        description:
          "Light gray page, white cards. No decorative gradients or glass. If your project already uses glass, the skill follows your project.",
      },
      {
        id: "one-accent",
        code: "I1 · M3",
        title: "One accent, one primary button",
        description:
          "The default button is outlined. Each area gets a single filled button, so the one that needs to stand out actually does.",
      },
      {
        id: "hairline",
        code: "M13 · M15",
        title: "Hairlines instead of shadows",
        description: "In-page cards are separated by a 1px border. Shadows are only for floating layers: modals, dropdowns.",
      },
      {
        id: "narrow",
        code: "R1 · T15",
        title: "Correct at 375px",
        description: "Every screen is checked at 375px wide. Long labels wrap, and the page never scrolls sideways.",
      },
      {
        id: "dark",
        code: "M21 · M23",
        title: "Dark mode isn't inverted colors",
        description:
          "Very dark navy background, translucent rgba borders, and an accent redefined for dark so the primary button doesn't vanish.",
      },
    ],
  },
  platforms: {
    eyebrow: "Where it runs",
    title: "One skill folder, three tools",
    description:
      "The skill uses the Agent Skills format: a folder with SKILL.md and references/. Any agent that reads this format can use it.",
    testedBadge: "Tested",
    untestedBadge: "Not tested yet",
    items: [
      {
        name: "Claude Code",
        description: "Installs as a plugin, invoked with /evon:ui-ux. Every test round of the skill ran here.",
        isTested: true,
      },
      {
        name: "Codex",
        description: "Copy the skill folder into your project's .agents/skills/. The agent turns it on when a prompt matches.",
        isTested: false,
      },
      {
        name: "Antigravity",
        description: "Reads the same .agents/skills/ folder as Codex, so one copy serves both.",
        isTested: false,
      },
    ],
  },
  install: {
    eyebrow: "Install",
    title: "Set up in a minute",
    description: "Pick the tool you use.",
    tabsLabel: "Tool",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
    items: [
      {
        question: "Is it free?",
        answer: "Yes. The skill is open source under the MIT license.",
      },
      {
        question: "What if my project already has a design system?",
        answer:
          "The skill uses your components. With shadcn, Radix, MUI, Ant, or an in-house kit, it uses those and only adjusts tokens to fit. If you already have colors and fonts, it uses them without asking.",
      },
      {
        question: "Do I need Tailwind?",
        answer:
          "No. Tailwind is the default, but if your project uses CSS Modules, SCSS, or styled-components, it follows that. For plain HTML, WordPress, or PHP, it translates its samples into HTML and classes first.",
      },
      {
        question: "Does it build landing pages?",
        answer:
          "No. The scope is in-app screens: dashboards, lists, tables, forms, settings, modals. The only exception is pricing tables.",
      },
      {
        question: "Does it work in English?",
        answer:
          "UI copy follows your project's language, and the skill has rules for English copy. Its own rules are written in Vietnamese, and the English test round hasn't run yet, so treat English output as early.",
      },
    ],
  },
  footer: {
    tagline: "evondev's Claude Code skills.",
    license: "MIT license",
  },
};
