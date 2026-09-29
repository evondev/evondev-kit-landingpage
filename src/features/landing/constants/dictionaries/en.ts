import type { Dictionary } from "@/features/landing/types/dictionary";

export const enDictionary: Dictionary = {
  meta: {
    home: {
      title: "evondevKit · evondev's Claude Code skills",
      description:
        "evondev's Claude Code skills. The first one, evon:ui-ux, builds app UI like a designer. Every skill is a set of numbered rules, tested on real projects. Free, MIT.",
    },
    "ui-ux": {
      title: "evon:ui-ux · Dashboard UI that doesn't look AI-made",
      description:
        "A Claude Code skill that designs app UI like a designer: it reads your codebase, shows a brief and 2–3 wireframes to pick from, builds with your components, and checks itself with a probe. Free, MIT.",
    },
  },
  announcement: {
    text: "New: the skill now works like a designer by default. A brief, 2–3 wireframes, you pick, then it builds.",
    linkLabel: "See how",
  },
  header: {
    homeLabel: "evondevKit, home",
    navLabel: "Main navigation",
    nav: {
      modes: "Features",
      designer: "Process",
      showcase: "Showcase",
      install: "Install",
      roadmap: "Coming soon",
      skills: "Skills",
      principles: "Principles",
    },
    github: "GitHub",
    installCta: "Install skill",
    switchLanguageLabel: "Xem bản tiếng Việt",
  },
  kitHome: {
    announcement: {
      text: "New: evon:ui-ux now works like a designer by default. A brief, 2–3 wireframes, you pick, then it builds.",
      linkLabel: "See evon:ui-ux",
    },
    hero: {
      badge: "evon:ui-ux: UI like a designer",
      title: {
        lead: "Claude\u00a0Code skills",
        accent: "by evondev",
      },
      subheadline:
        "Every skill is a set of numbered rules, tested on real projects. Install once, use in every project.",
      primaryCta: "See evon:ui-ux",
      secondaryCta: "Install evondevKit",
      commandsLabel: "Run these two commands in Claude Code",
    },
    skills: {
      label: "Skills",
      eyebrow: "Skills in the kit",
      title: {
        lead: "One kit,",
        accent: "many skills",
      },
      description: "Install the evon plugin once. When a new skill joins the kit, just update the marketplace.",
      detailLabel: "See details",
      placeholder: {
        title: "Next skill",
        description: "Being tested on real projects. It shows up here once it passes the test round.",
      },
      items: [
        {
          id: "ui-ux",
          command: "/evon:ui-ux",
          title: "UI/UX for apps",
          description:
            "Builds and redesigns app screens like a designer: a brief, 2–3 wireframes, you pick, then it builds. Reviews existing UI, rebuilds while keeping your brand, refactors without changing the look.",
          facts: ["70 test prompts passed", "7 ways in", "Measured 375–1920px"],
          status: null,
        },
      ],
    },
    principles: {
      label: "Principles",
      eyebrow: "How the skills are made",
      title: {
        lead: "Few promises,",
        accent: "many measurements",
      },
      description: "Three principles every skill in the kit follows.",
      items: [
        {
          icon: "numbered-rules",
          title: {
            lead: "Numbered rules.",
            accent: "No teaching by adjectives. Each rule has a code and lives in exactly one file; many came from bugs found in testing.",
          },
        },
        {
          icon: "tested",
          title: {
            lead: "Tested before promised.",
            accent: "If a feature hasn't passed its test round, this page says coming soon, not available.",
          },
        },
        {
          icon: "codebase",
          title: {
            lead: "Follows your project.",
            accent: "Reads your codebase before writing: uses your components, tokens, and conventions instead of imposing its own.",
          },
        },
      ],
    },
    cta: {
      eyebrow: "Install",
      title: "Install evondevKit",
      description: "Two commands in Claude Code and you have the whole kit. Free and MIT licensed.",
      primaryCta: "See evon:ui-ux",
      secondaryCta: "View on GitHub",
    },
  },
  copyButton: {
    copy: "Copy",
    copied: "Copied",
  },
  statusLabels: {
    new: "New",
    beta: "Beta",
    soon: "Coming soon",
  },
  hero: {
    badge: "New: works like a designer",
    title: {
      lead: "Dashboard UI that",
      accent: "doesn't look AI-made",
    },
    subheadline:
      "evon:ui-ux reads your codebase, shows a brief and 2–3 wireframes for you to pick from, then builds with your project's components and checks itself with a probe.",
    primaryCta: "Install skill",
    secondaryCta: "See what it built",
    promptBoxLabel: "Ways to use the skill",
    copyPromptLabel: "Copy sample prompt",
    copiedPromptLabel: "Sample prompt copied",
    imageAlt: "Customer management page built by the skill: table with search, filters, and pagination",
    windowLabel: "localhost:3000/dashboard/customers",
  },
  proof: {
    lead: "Passed",
    accent: "70 test prompts",
    tail: "from a single button to full pages",
    items: [
      { value: "30", label: "approved components" },
      { value: "8", label: "never-seen UIs built to spec" },
      { value: "10", label: "composite blocks" },
      { value: "22", label: "full pages" },
    ],
    source: "Counted from the skill's test list, Sep 29, 2026.",
  },
  modes: {
    label: "Features",
    eyebrow: "Seven ways in",
    title: {
      lead: "One skill,",
      accent: "seven ways to work",
    },
    description:
      "It works like a designer by default. To take another path, say so in your prompt: the skill picks it up without asking again.",
    promptLabel: "Sample prompt",
    items: [
      {
        id: "designer",
        tabLabel: "Designer",
        title: "Work like a designer",
        description:
          "The default for any prompt that builds or redesigns a screen. A brief, the main job of each screen, 2–3 wireframes with real content. You pick, then it builds.",
        prompt: "/evon:ui-ux Redesign the jobs page.",
        status: "new",
      },
      {
        id: "just-build",
        tabLabel: "Just build it",
        title: "Just build it, no wireframes",
        description:
          "Saves tokens. The skill picks the option it would recommend and builds it straight away, then tells you which layout it chose and why.",
        prompt: "/evon:ui-ux Build the notification settings screen, just build it.",
        status: "new",
      },
      {
        id: "review",
        tabLabel: "Review",
        title: "Review the UI you have",
        description:
          "Give it a localhost link. It opens the page, measures from 375 to 1920px, and returns an issue table with before / after shots. Reply “fix 1, 3” and only then it fixes.",
        prompt: "/evon:ui-ux What's wrong with this page: http://localhost:3000/orders",
        status: null,
      },
      {
        id: "keep-brand",
        tabLabel: "Keep brand",
        title: "Rebuild, keep the brand",
        description:
          "Keeps your page frame and colors. Swaps raw controls for proper components and tidies each card. Reply “ok” or “drop 7”.",
        prompt: "/evon:ui-ux Rebuild this page and keep the brand.",
        status: null,
      },
      {
        id: "skill-taste",
        tabLabel: "Skill taste",
        title: "Switch fully to the skill's taste",
        description:
          "Like keeping the brand, but colors move to the skill's tokens too. Only your logo and main accent stay.",
        prompt: "/evon:ui-ux Rebuild this fully in the skill's taste, drop the old style.",
        status: null,
      },
      {
        id: "refactor",
        tabLabel: "Refactor",
        title: "Clean the code, keep the look",
        description:
          "Swaps classes, deletes old CSS, and compares screenshots before and after so nothing shifts. New branch, not test-run yet.",
        prompt: "/evon:ui-ux Refactor the /settings CSS to Tailwind and keep the UI identical.",
        status: "beta",
      },
      {
        id: "small-fix",
        tabLabel: "Small fix",
        title: "Anything smaller than a screen",
        description:
          "Fix a component, add a dropdown, fix a bug, change a color. The skill still reads your codebase first, then just does it with the default layout, no wireframes.",
        prompt: "/evon:ui-ux Add a status filter dropdown to the orders table.",
        status: null,
      },
    ],
  },
  designer: {
    label: "Process",
    eyebrow: "Designer mode",
    title: {
      lead: "Brief, wireframes,",
      accent: "then build",
    },
    description:
      "The worst problems are usually structure, not color: overloaded cards, filters far from the table, two buttons fighting. A designer catches these in the wireframe, where fixing them costs almost nothing.",
    steps: [
      {
        code: "U1",
        title: "Brief",
        description: "Reads the repo, README, and routes first. Only asks what it can't work out.",
        gate: null,
      },
      {
        code: "U2",
        title: "Main job of each screen",
        description: "Why people come here, what they compare, and what the final action is.",
        gate: "Gate 1: you edit it or reply “ok”",
      },
      {
        code: "U3",
        title: "2–3 wireframes",
        description:
          "Genuinely different layout strategies, not just different colors. Real content, and every block is numbered for feedback.",
        gate: "Gate 2: you pick, e.g. “C + D + color”",
      },
      {
        code: "U4",
        title: "Build it",
        description:
          "Code for the chosen option, using your project's components. The probe runs and fixes follow, up to three rounds; anything left is explained at handover.",
        gate: null,
      },
    ],
    wireframe: {
      toolbarLabel: "Wireframe toolbar",
      optionLabel: "Option",
      colorLabel: "Color",
      desktopLabel: "Desktop",
      mobileLabel: "Mobile",
      stateLabel: "State",
      stateValue: "With data",
      reasonTitle: "Why A",
      reasonItems: [
        { label: "Pros", text: "Late orders are quick to find: search and filters sit right above the table." },
        { label: "Cons", text: "Less room for overview charts." },
        { label: "Best when", text: "People come here to process orders, not to check totals." },
      ],
      recommendedLabel: "Recommended",
    },
    toolbarNote:
      "On the wireframe: switch options, turn on color, try accents, view mobile, view empty and error states, read pros and cons, copy feedback by block number.",
  },
  probe: {
    label: "Review and measure",
    eyebrow: "Probe",
    title: {
      lead: "Measured by a script,",
      accent: "not eyeballed",
    },
    description:
      "The probe opens the real page, hovers, tabs through, opens every menu, measures contrast, and sweeps widths. Every issue it reports must land in the table, or get a reason for being dropped.",
    reviewTitle: {
      lead: "An issue table, you pick the rows.",
      accent: "Reviewing needs no permission, fixing does. Graded against your project's system, not the skill's taste.",
    },
    reviewHeaders: {
      number: "#",
      issue: "Issue",
      fix: "Proposed fix",
    },
    reviewRows: [
      { issue: "Secondary text at 3.2:1 on cards", severity: "broken", fix: "Use a muted color at 4.6:1" },
      { issue: "Nav wraps at 860–1000px", severity: "broken", fix: "Move secondary items into a menu" },
      { issue: "Three corner radii on one card type", severity: "off-system", fix: "Back to the project's radius" },
      { issue: "Two filled buttons competing", severity: "taste", fix: "Keep one primary, outline the other" },
    ],
    reviewReply: "You reply: fix 1, 2",
    severities: [
      { tone: "broken", label: "Broken", description: "Measurably wrong: contrast, overflow, wrapping, unclickable." },
      { tone: "off-system", label: "Off-system", description: "Breaks your own project's conventions." },
      { tone: "taste", label: "Taste", description: "Suggestions from the skill's taste, unchecked by default." },
    ],
    sweepTitle: {
      lead: "Six screen widths.",
      accent: "375, 768, 1024, 1280, 1440, and 1920px. Add --sweep to scan from 1440 down to 375 and report the width range that breaks.",
    },
    sweepWidths: ["1920", "1440", "1280", "1024", "768", "375"],
    sweepCheckHeader: "Check",
    sweepChecks: [
      { name: "Text contrast ≥ 4.5:1", marks: ["pass", "pass", "pass", "pass", "pass", "pass"] },
      { name: "No horizontal scroll", marks: ["pass", "pass", "pass", "pass", "pass", "fail"] },
      { name: "Nav stays on one line", marks: ["pass", "pass", "pass", "pass", "fail", "pass"] },
      { name: "Popovers stay on screen", marks: ["pass", "pass", "pass", "pass", "pass", "fail"] },
      { name: "Hover is visible", marks: ["pass", "pass", "pass", "pass", "pass", "pass"] },
    ],
    sweepNote: "Sample report. The probe also checks selected items, focus rings, and the state right after a click.",
    passLabel: "Pass",
    failLabel: "Fail",
  },
  showcase: {
    label: "Showcase",
    eyebrow: "Built screens",
    title: {
      lead: "One prompt,",
      accent: "this screen",
    },
    description: "Each tile shows the original prompt and the screen the skill built from it. No hand edits afterwards.",
    tabs: {
      component: "Components",
      block: "Blocks",
      page: "Pages",
    },
    promptLabel: "Prompt",
    placeholder: "Screenshot coming",
    openImageLabel: "View larger",
    closeLabel: "Close",
    lightLabel: "Light",
    darkLabel: "Dark",
    themeLabel: "Color mode",
    languageNote: "Screens shown in Vietnamese. The skill writes UI copy in your project's language.",
  },
  taste: {
    label: "Taste",
    eyebrow: "The skill's taste",
    title: {
      lead: "Numbered rules,",
      accent: "no adjectives",
    },
    description:
      "Each rule lives in exactly one file, and many came from bugs found in testing. These are four you can see on screen right away.",
    rules: [
      {
        id: "flat",
        code: "P6 · M12",
        title: "Flat by default",
        description: "Light gray page, white cards. No decorative gradients or glass.",
      },
      {
        id: "one-accent",
        code: "M3 · I1 · I3",
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
        description: "Long labels wrap, and the page never scrolls sideways.",
      },
    ],
    stylesTitle: "Change the style with one line in your prompt",
    stylesNote: "If your project already has its own style, the skill follows it and tells you when it hands over.",
    defaultStyleLabel: "Default",
    styles: [
      { name: "Hairline flat", isDefault: true },
      { name: "Elevated", isDefault: false },
      { name: "Glassmorphism", isDefault: false },
      { name: "Gradient", isDefault: false },
      { name: "Dark-first", isDefault: false },
      { name: "Colorful", isDefault: false },
    ],
  },
  install: {
    label: "Install",
    eyebrow: "Install",
    title: {
      lead: "Set up in",
      accent: "a minute",
    },
    description: "Pick the tool you use. Every test round of the skill ran on Claude Code.",
    tabsLabel: "Tool",
    testedBadge: "Tested",
    untestedBadge: "Not tested yet",
  },
  roadmap: {
    label: "Coming soon",
    eyebrow: "Roadmap",
    title: {
      lead: "In progress,",
      accent: "coming soon",
    },
    description: "Things the skill doesn't promise yet. Until the test round is done, this page doesn't say it's there.",
    items: [
      {
        icon: "dark-mode",
        title: "Add dark mode to an existing app",
        description:
          "A light / dark toggle that remembers your choice and never flashes white on load. Tables, forms, overlays, and charts re-checked on dark.",
        progress: "0/7 test items",
      },
      {
        icon: "english",
        title: "English test round",
        description:
          "English prompts on an empty project, compared with the Vietnamese builds: same layout, color, and spacing, only the words differ.",
        progress: "0/8 prompts",
      },
      {
        icon: "agents",
        title: "Tested on Codex and Antigravity",
        description: "The README covers installing on both tools, but no test round has run there yet. Support gets listed once it has.",
        progress: "Not started",
      },
      {
        icon: "before-after",
        title: "Before / after rebuilds",
        description: "A slider comparing real projects rebuilt with the skill, with code measurements before and after.",
        progress: "Picking projects",
      },
    ],
  },
  cta: {
    eyebrow: "Get started",
    title: "Ready to build your first screen?",
    description: "Two commands in Claude Code, then write your prompt like you're talking to a designer. Free and MIT licensed.",
    primaryCta: "Install skill",
    secondaryCta: "View on GitHub",
  },
  faq: {
    label: "FAQ",
    eyebrow: "FAQ",
    title: {
      lead: "Frequently asked",
      accent: "questions",
    },
    items: [
      {
        question: "Is it free?",
        answer: "Yes. The skill is open source under the MIT license.",
      },
      {
        question: "Does it ask a lot of questions?",
        answer:
          "Designer mode stops exactly twice: to approve the brief and to pick a wireframe. Everywhere else it takes a default and tells you when it hands over. Say “just build it” to skip the wireframes too.",
      },
      {
        question: "What if my project already has a design system?",
        answer:
          "The skill uses your components. With shadcn, Radix, MUI, Ant, or an in-house kit, it uses those and only adjusts tokens to fit. Your brand colors stay unless you say “drop the old style”.",
      },
      {
        question: "Do I need Tailwind?",
        answer:
          "No. If your project uses CSS Modules, SCSS, or styled-components, it follows that. For plain HTML, WordPress, or PHP, it translates its samples into HTML and classes first.",
      },
      {
        question: "Does it do dark mode?",
        answer:
          "It can build a dark-first UI when you ask for one in the prompt. Adding dark mode to an existing app (a light / dark toggle) is still being tested, see Coming soon.",
      },
      {
        question: "Does it build landing pages?",
        answer:
          "No. The scope is in-app screens: dashboards, lists, tables, forms, settings, modals, and pages people browse to choose. The exception is pricing tables.",
      },
      {
        question: "Does it work in English?",
        answer:
          "Prompts in English work the same way, and UI copy follows your project's language. The skill's own rules are written in Vietnamese and the English test round hasn't run yet, so treat English output as early.",
      },
    ],
  },
  footer: {
    tagline: "evondev's Claude Code skills.",
    license: "MIT license",
  },
};
