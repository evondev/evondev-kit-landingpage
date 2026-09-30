import type { Dictionary } from "@/features/landing/types/dictionary";

export const enDictionary: Dictionary = {
  meta: {
    home: {
      title: "evondevKit · evondev's Claude Code skills",
      description:
        "Claude Code skills written by evondev. The first one, evon:ui-ux, builds app UI the way a designer would. Every skill is a set of concrete rules, tested on real projects. Free, MIT.",
    },
    "ui-ux": {
      title: "evon:ui-ux · UI dashboard without the AI hassle",
      description:
        "A Claude Code skill that builds app UI the way a designer would: it reads your codebase, shows a brief and 2–3 wireframes to pick from, builds with your own components, then checks its work with a script. Free, MIT.",
    },
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
      text: "New: evon:ui-ux now works like a designer. A brief, 2–3 wireframes, and it only builds once you pick.",
      linkLabel: "See evon:ui-ux",
    },
    hero: {
      badge: "evon:ui-ux: UI like a designer",
      title: {
        lead: "Claude\u00a0Code skills",
        accent: "by evondev",
      },
      subheadline:
        "Every skill is a set of concrete rules, tested on real projects before it shows up here. Install once, use it in every project.",
      primaryCta: "See evon:ui-ux",
      secondaryCta: "Install evondevKit",
      commandsLabel: "Run these two commands in Claude Code",
    },
    skills: {
      label: "Skills",
      eyebrow: "What's in the kit",
      title: {
        lead: "Install once,",
        accent: "get every new skill",
      },
      description: "Install the evon plugin once. When I add a new skill, update the marketplace and it's there.",
      detailLabel: "See details",
      placeholder: {
        title: "Next skill",
        description: "Being tested on real projects. It shows up here only after it passes.",
      },
      items: [
        {
          id: "ui-ux",
          command: "/evon:ui-ux",
          title: "UI/UX for apps",
          description:
            "Builds and redesigns app screens the way a designer would: a brief, 2–3 wireframes, you pick, then it builds. It also reviews the UI you have, rebuilds it while keeping your brand, and cleans up code without changing the look.",
          facts: ["70 test prompts passed", "Wireframes before code", "Measured 375–1920px"],
          status: "beta",
        },
      ],
    },
    principles: {
      label: "Principles",
      eyebrow: "How I write the skills",
      title: {
        lead: "Promise less,",
        accent: "measure more",
      },
      description: "Three principles every skill in the kit follows.",
      items: [
        {
          icon: "numbered-rules",
          title: {
            lead: "Concrete, numbered rules.",
            accent: "No vague “make\u00a0it\u00a0look\u00a0good”. Every rule has its own code, and many were born from bugs found in testing.",
          },
        },
        {
          icon: "tested",
          title: {
            lead: "Tested before promised.",
            accent: "If a feature hasn't passed testing, this page says “coming soon”, not “available”.",
          },
        },
        {
          icon: "codebase",
          title: {
            lead: "Follows your project.",
            accent: "Reads your codebase before writing a line. If you already have components, tokens, and conventions, it uses them instead of forcing its own.",
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
      lead: "UI dashboard",
      accent: "without the AI hassle",
    },
    subheadline:
      "evon:ui-ux reads your codebase and shows a brief and 2–3 wireframes for you to pick from. Only then does it build, with your project's own components, and check its work with a script.",
    primaryCta: "Install skill",
    secondaryCta: "See what it built",
    promptBoxLabel: "Ways to use the skill",
    copyPromptLabel: "Copy sample prompt",
    copiedPromptLabel: "Sample prompt copied",
    videoLabel: "Before and after video: 68Lane's old room listing screen, the wireframe the skill proposed, then the finished build, plus how to install",
    playVideoLabel: "Play video",
    pauseVideoLabel: "Pause video",
  },
  proof: {
    lead: "Passed",
    accent: "70 test prompts",
    tail: "from a single button to full pages",
    items: [
      { value: "30", label: "approved components" },
      { value: "8", label: "components built without a template" },
      { value: "10", label: "composite blocks" },
      { value: "22", label: "full pages" },
    ],
    source: "Counted from the skill's test list, Sep 29, 2026.",
  },
  modes: {
    label: "Features",
    eyebrow: "What it does",
    title: {
      lead: "One skill,",
      accent: "three kinds of work",
    },
    description:
      "No commands to memorize. The skill reads your prompt and works out what to do. By default it works like a designer; if you want something else, just say so.",
    promptLabel: "Sample prompt",
    groups: [
      {
        id: "build",
        title: "Build new",
        description:
          "By default the skill goes through every designer step. Tell it to skip the wireframes to save tokens. Building several screens? Lock in a design system first. Anything smaller than a screen, it just does.",
        items: [
          {
            id: "designer",
            tabLabel: "Designer",
            title: "Work like a designer",
            description:
              "The default whenever you ask for a screen to be built or redesigned. It writes a brief, works out what the screen is for, and shows 2–3 wireframes with real content. It builds once you pick.",
            prompt: "/evon:ui-ux Redesign the jobs page.",
            status: "new",
          },
          {
            id: "just-build",
            tabLabel: "Just build it",
            title: "Just build it, no wireframes",
            description:
              "Saves tokens. The skill picks the option it thinks fits best and builds it straight away. At handover it tells you which layout it chose and why.",
            prompt: "/evon:ui-ux Build the notification settings screen, just build it.",
            status: "new",
          },
          {
            id: "design-system",
            tabLabel: "Design system",
            title: "Design system first",
            description:
              "Locks in color, type, spacing, and seven base components (button, badge, input, card, list row, modal, empty state) on one preview page. You approve it once, and later screens are built from that same set. If your project already has shadcn or its own kit, the skill tunes that kit instead of building a second one.",
            prompt: "/evon:ui-ux Build a design system for a clinic management app first, no screens yet.",
            status: "new",
          },
          {
            id: "small-fix",
            tabLabel: "Small fix",
            title: "Anything smaller than a screen",
            description:
              "Fix a component, add a dropdown, fix a bug, change a color. The skill still reads your codebase first, then just does it, no wireframes.",
            prompt: "/evon:ui-ux Add a status filter dropdown to the orders table.",
            status: null,
          },
        ],
      },
      {
        id: "rework",
        title: "Redo existing UI",
        description:
          "All three start by measuring your page. They differ in how much the skill is allowed to change.",
        items: [
          {
            id: "review",
            tabLabel: "Review",
            title: "Review the UI you have",
            description:
              "Give it a localhost link. It opens the page, measures from 375 to 1920px, and sends back an issue table with before / after shots. It only fixes after you reply “fix 1, 3”.",
            prompt: "/evon:ui-ux What's wrong with this page: http://localhost:3000/orders",
            status: null,
          },
          {
            id: "keep-brand",
            tabLabel: "Keep brand",
            title: "Rebuild, keep the brand",
            description:
              "Keeps your page layout and colors. Swaps home-made controls for proper components and tidies each card. Reply “ok” or “drop 7”.",
            prompt: "/evon:ui-ux Rebuild this page and keep the brand.",
            status: null,
          },
          {
            id: "skill-taste",
            tabLabel: "Skill style",
            title: "Redo in the skill's style",
            description:
              "Like keeping the brand, but the colors switch to the skill's tokens too. Only your logo and main accent stay.",
            prompt: "/evon:ui-ux Rebuild this fully in the skill's taste, drop the old style.",
            status: null,
          },
        ],
      },
      {
        id: "cleanup",
        title: "Clean up code",
        description:
          "Only the code underneath changes. The interface stays exactly the same.",
        items: [
          {
            id: "refactor",
            tabLabel: "Refactor",
            title: "Clean the code, keep the look",
            description:
              "Swaps classes, deletes unused CSS, and compares screenshots before and after so not a pixel shifts. This part is new and hasn't been tested yet.",
            prompt: "/evon:ui-ux Refactor the /settings CSS to Tailwind and keep the UI identical.",
            status: "beta",
          },
        ],
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
      "Ugly screens are usually a structure problem, not a color problem: overloaded cards, filters far from the table, two buttons fighting. A designer catches these at the wireframe, before fixing them costs anything.",
    steps: [
      {
        code: "U1",
        title: "Brief",
        description: "Reads the repo, README, and routes first. Only asks what it can't find out on its own.",
        gate: null,
      },
      {
        code: "U2",
        title: "What the screen is for",
        description: "Why people come here, what they compare, and what they click at the end.",
        gate: "Stop 1: you edit the brief or reply “ok”",
      },
      {
        code: "U3",
        title: "2–3 wireframes",
        description:
          "Options that differ in layout, not just in color. Real content, and every block is numbered so feedback is easy.",
        gate: "Stop 2: you pick, e.g. “C + D”",
      },
      {
        code: "U4",
        title: "Build it",
        description:
          "Codes the option you picked, with your project's own components. Runs the check script and fixes what it finds, up to three rounds. Anything left gets explained at handover.",
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
      reasonTitle: "Why option A",
      reasonItems: [
        { label: "Pros", text: "Late orders are quick to find: search and filters sit right above the table." },
        { label: "Cons", text: "Less room for overview charts." },
        { label: "Best when", text: "People come here to process orders, not to check totals." },
      ],
      recommendedLabel: "Recommended",
    },
    toolbarNote:
      "Right on the wireframe you can switch options, turn on color, try accents, check mobile, see the empty and error states, read pros and cons, and copy feedback by block number.",
  },
  beforeAfter: {
    label: "Before / after",
    eyebrow: "A real screen",
    title: {
      lead: "From the old screen to a wireframe,",
      accent: "then the finished screen",
    },
    description:
      "The 68Lane room listing screen in three steps: the original, the wireframe the skill offered to pick from, and the screen built from it. Drag the handle to compare.",
    stages: {
      before: "Before",
      wireframe: "Wireframe",
      after: "After",
    },
    imageAlts: {
      before: "The 68Lane room listing screen before the redesign",
      wireframe: "The wireframe the skill proposed for the room listing screen",
      after: "The room listing screen after the skill built it",
    },
    pairLabel: "Pick a pair to compare",
    sliderLabel: "Drag to compare the two images",
    windowLabel: "68Lane · Room listings",
    placeholder: "Images coming soon",
    hint: "Drag across the frame, or focus the handle and use the ← → keys.",
  },
  probe: {
    label: "Review and measure",
    eyebrow: "Check script",
    title: {
      lead: "Measured by a script,",
      accent: "not eyeballed",
    },
    description:
      "The script opens the real page, hovers, tabs through, opens every menu, measures contrast, and tries every screen width. Every issue it reports goes in the table, or gets a written reason for being skipped.",
    reviewTitle: {
      lead: "The skill lists the issues, you pick what to fix.",
      accent: "It can point out anything, but it only fixes what you approve. Issues are graded against your project's conventions, not the skill's taste.",
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
      lead: "Measured at six widths.",
      accent: "375, 768, 1024, 1280, 1440, and 1920px. Add --sweep to scan every width from 1440 down to 375 and find exactly where it breaks.",
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
    sweepNote: "Sample report. The script also checks selected items, focus rings, and the state right after a click.",
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
    description: "Each tile shows the original prompt and the screen the skill built from it. No hand edits after the build.",
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
      lead: "No “make\u00a0it\u00a0pretty”,",
      accent: "just concrete rules",
    },
    description:
      "Each rule lives in one file, and many came from bugs found in testing. Here are four you can see on screen right away.",
    rules: [
      {
        id: "flat",
        code: "P6 · M12",
        title: "Flat by default",
        description: "Light gray page, white cards. No gradients or glass effects just for looks.",
      },
      {
        id: "one-accent",
        code: "M3 · I1 · I3",
        title: "One primary button",
        description:
          "Buttons are outlined by default. Each area gets one button filled with the accent, so the one that needs to stand out actually does.",
      },
      {
        id: "hairline",
        code: "M13 · M15",
        title: "Borders, not shadows",
        description: "Cards on the page are separated by a 1px border. Shadows are only for things that float above the page, like modals and dropdowns.",
      },
      {
        id: "narrow",
        code: "R1 · T15",
        title: "Holds up at 375px",
        description: "Long labels wrap, and the page never scrolls sideways.",
      },
    ],
    stylesTitle: "Want a different style? Say so in one line",
    stylesNote: "If your project already has its own style, the skill follows it and tells you when it hands over.",
    defaultStyleLabel: "Default",
    styles: [
      { name: "Flat, thin borders", isDefault: true },
      { name: "Elevated", isDefault: false },
      { name: "Glassmorphism", isDefault: false },
      { name: "Gradient", isDefault: false },
      { name: "Dark", isDefault: false },
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
    description: "Pick the tool you use. All of the skill's testing ran on Claude Code.",
    tabsLabel: "Tool",
    testedBadge: "Tested",
    untestedBadge: "Not tested yet",
  },
  roadmap: {
    label: "Coming soon",
    eyebrow: "Roadmap",
    title: {
      lead: "What I'm working on,",
      accent: "coming soon",
    },
    description: "Things I'm not promising yet. Until testing is done, this page won't say they're there.",
    items: [
      {
        icon: "dark-mode",
        title: "Add dark mode to an existing app",
        description:
          "A light / dark toggle that remembers the choice and never flashes white on load. Tables, forms, modals, and charts re-checked on dark.",
        progress: "0/7 test items",
      },
      {
        icon: "english",
        title: "Testing with English prompts",
        description:
          "English prompts on an empty project, compared with the Vietnamese builds: same layout, color, and spacing, only the words differ.",
        progress: "0/2 prompts",
      },
      {
        icon: "agents",
        title: "Tested on Codex and Antigravity",
        description: "The README already covers installing on both tools, but I haven't tested there yet. They get listed as supported once I have.",
        progress: "Not started",
      },
      {
        icon: "before-after",
        title: "More before / after cases from real projects",
        description: "The first case is 68Lane, above. I'm working on a few more projects, with code measurements before and after.",
        progress: "1 project so far",
      },
    ],
  },
  cta: {
    eyebrow: "Get started",
    title: "Ready to build your first screen?",
    description: "Two commands in Claude Code, then write your prompt like you're talking to a designer. Free and open source under MIT.",
    primaryCta: "Install skill",
    secondaryCta: "View on GitHub",
  },
  faq: {
    label: "FAQ",
    eyebrow: "FAQ",
    title: {
      lead: "Common",
      accent: "questions",
    },
    items: [
      {
        question: "Is it ready for real work?",
        answer:
          "Yes, as a beta. Light-theme app screens have passed 70 test prompts on real projects. Dark mode, English prompts, Codex and Antigravity are still being tested, see Coming soon. If something looks off, open a GitHub issue with a link or a screenshot of that screen. Get the latest version with /plugin marketplace update evondevkit.",
      },
      {
        question: "What if I don't like the result?",
        answer:
          "The skill isn't perfect. It does its best within its rules, but taste differs from person to person and every project has its quirks. Once it's built, edit by hand or ask the AI to change it, whichever you like. Talk to it like you'd give feedback to a designer: “bolder headings”, “more breathing room”, “drop block 3”.",
      },
      {
        question: "Is it free?",
        answer: "Yes. The skill is open source under the MIT license.",
      },
      {
        question: "Does it ask a lot of questions?",
        answer:
          "Designer mode stops exactly twice: to approve the brief and to pick a wireframe. Everywhere else it takes a default and tells you when it hands over. Say “just build it” to skip the wireframes too. Building a design system first stops only once, for you to approve the design system page.",
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
          "Yes, it can build a dark UI if you ask for one in the prompt. Adding dark mode to an existing app (a light / dark toggle) is still being tested, see Coming soon.",
      },
      {
        question: "Does it build landing pages?",
        answer:
          "No. It only builds screens inside an app: dashboards, lists, tables, forms, settings, modals, and pages people browse to choose something. Pricing tables are the one exception.",
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
