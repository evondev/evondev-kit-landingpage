import type { Dictionary } from "@/features/landing/types/dictionary";

export const enDictionary: Dictionary = {
  meta: {
    home: {
      title: "evondevKit · evondev's skills for coding agents",
      description:
        "Skills for Claude Code, Cursor, Codex, OpenCode, Antigravity and ZCode, written by evondev. The first one, evon:ui-ux, builds app UI the way a designer would. Every skill is a set of concrete rules, tested on real projects. Free, MIT.",
    },
    "ui-ux": {
      title: "evon:ui-ux · Wireframes, design systems, UI rebuilds like a designer",
      description:
        "A UI/UX skill for Claude Code, Cursor, Codex, OpenCode, Antigravity and ZCode: a brief and 2–3 wireframes to pick from, a design system, reviews and rebuilds of your existing UI, always with your project's own components. Free, MIT.",
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
    themeToggleLabel: "Toggle light / dark theme",
  },
  kitHome: {
    announcement: {
      tag: "NEW",
      text: "evon:ui-ux 0.9.0 builds phone apps (beta): one prompt, a whole clickable app. It also uses fewer tokens.",
      linkLabel: "See what's new",
    },
    hero: {
      badge: "evon:ui-ux: UI like a designer",
      title: {
        lead: "Coding\u00a0agent skills",
        accent: "by evondev",
      },
      subheadline:
        "Every skill is a set of concrete rules, tested on real projects before it shows up here. Install once, use it in every project, in Claude Code, Cursor, Codex, OpenCode, Antigravity or ZCode.",
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
      description: "In Claude Code, install the evon plugin once. When I add a new skill, update the marketplace and it's there.",
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
            "Builds and redesigns app screens the way a designer would: a brief, 2–3 wireframes, you pick, then it builds. It also reviews the UI you have, rebuilds it while keeping your brand, and cleans up code without changing the look. Phone apps are in beta.",
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
      description: "Two commands in Claude Code and you have the whole kit; in Cursor, Codex, OpenCode, Antigravity or ZCode, one npx skills add. Free and MIT licensed.",
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
  announcement: {
    tag: "NEW",
    text: "Version 0.9.0: phone apps (beta) inside a device frame, with a flow board. Each turn reads only the rules it needs, so it uses fewer tokens.",
    linkLabel: "See what's new",
  },
  hero: {
    badge: "Works like a designer",
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
  supportedTools: {
    label: "Works with",
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
            status: null,
          },
          {
            id: "mobile",
            tabLabel: "Phone app",
            title: "Build a phone app",
            description:
              "You get an HTML prototype inside a phone frame, with every screen clickable. On a wide screen it opens a flow board, one row per flow. Your prompt needs to say “mobile app”, “phone app”, “iOS” or “Android”, otherwise the skill builds a web app. Porting to React Native or Flutter isn't well tested yet.",
            prompt: "/evon:ui-ux Build a coffee ordering mobile app: menu, cart, checkout.",
            status: "beta",
          },
          {
            id: "analyze",
            tabLabel: "Analyze",
            title: "Analyze the product before building",
            description:
              "Not sure how it should be designed? Ask first. The skill reads your code, looks up what products in the same industry usually do, and sends one report: the main screens, what yours is missing, three accent colors that fit the industry, and a look that fits your users. No code is touched.",
            prompt: "/evon:ui-ux Analyze this e-learning product, how should it be designed?",
            status: "new",
          },
          {
            id: "just-build",
            tabLabel: "Just build it",
            title: "Just build it, no wireframes",
            description:
              "Saves tokens. The skill picks the option it thinks fits best and builds it straight away. At handover it tells you which layout it chose and why.",
            prompt: "/evon:ui-ux Build the notification settings screen, just build it.",
            status: null,
          },
          {
            id: "design-system",
            tabLabel: "Design system",
            title: "Design system first",
            description:
              "Locks in color, type, spacing, and seven base components on one page. Approve it once, and every later screen is built from that set. Already on shadcn or your own kit? The skill tunes that instead.",
            prompt: "/evon:ui-ux Build a design system for a clinic management app first, no screens yet.",
            status: null,
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
          "All five start by measuring your page. They differ in what the skill looks at and how much it is allowed to change.",
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
            id: "flow",
            tabLabel: "Flow review",
            title: "Review a flow across screens",
            description:
              "Walks the steps in order, for example from sign-up to the first time a user gets the main job done. The skill counts the steps and points out where newcomers get lost: an empty screen with no next step, a save with no sign it worked, one name on this screen and another on the next. It fixes only the rows you pick.",
            prompt: "/evon:ui-ux Review the onboarding flow: from sign-up to creating the first course.",
            status: "new",
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
          {
            id: "dark-mode",
            tabLabel: "Dark mode",
            title: "Add dark mode to an existing app",
            description:
              "A Light / Dark / System toggle that remembers the choice and never flashes white on load. The skill switches colors through tokens, then re-checks tables, forms, overlays, and charts on dark. Tested on one real project, 7/7 items.",
            prompt: "/evon:ui-ux Add dark mode to the app, with a light / dark toggle in the header, following the OS by default.",
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
      "Right on the wireframe you can switch options, switch between 10 dashboard styles (Clean, Inset, Paper, Rail, Topbar…), switch color level (Neutral, Tinted, Vivid), try accents, check mobile, see the empty and error states, read pros and cons, and copy feedback by block number.",
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
    sweepNote:
      "Sample report. The script also checks selected items, focus rings, and the state right after a click. New: add --stress and it fills tables and cards with long names and billion-scale amounts, then measures again to see if the screen breaks on real data.",
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
    description: "Each tile shows the original prompt and the screen the skill built from it, captured as-is. You can still customize it however you like afterward.",
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
    stylesNote:
      "Flat gets the most care. Other styles keep the same contrast and hierarchy but are less polished. If your project already has its own style, the skill follows it and tells you when it hands over.",
    styleGroups: [
      { label: "Default", isDefault: true, styles: ["Flat, thin borders"] },
      { label: "From your project, or on request", isDefault: false, styles: ["Elevated", "Dark", "Colorful (Tinted, Vivid)"] },
      { label: "Doable, rarely right for dashboards", isDefault: false, styles: ["Glassmorphism", "Gradient"] },
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
        icon: "native-code",
        title: "Phone apps in React Native and Flutter",
        description:
          "From the approved prototype to code that runs on a device: tab bar, sheets, safe areas and keyboard done the way each platform expects.",
        progress: "Testing",
      },
    ],
    placeholderLabel: "Not announced yet",
  },
  cta: {
    eyebrow: "Get started",
    title: "Ready to build your first screen?",
    description: "Install it in Claude Code, Cursor, Codex, OpenCode, Antigravity or ZCode, then write your prompt like you're talking to a designer. Free and open source under MIT.",
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
          "Yes, as a beta. Light-theme app screens have passed 70 test prompts on real projects. Dark mode for an existing app has been tested on one project. Building new phone apps has passed about 13 test prompts; reviewing an existing phone app hasn't been tested yet. I haven't tested Cursor, Codex, OpenCode, Antigravity and ZCode myself yet, so if you hit a bug there, let me know. If something looks off, open a GitHub issue with a link or a screenshot of that screen. Get the latest version with /plugin marketplace update evondevkit (Claude Code) or npx skills update (other tools).",
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
        question: "How long should my prompt be?",
        answer:
          "One sentence is enough to start, and every prompt on this page is that short. The skill reads your codebase and gives you a brief to adjust before it builds. For a closer result, add who uses the screen, the main thing they do there, and what the real data looks like (a few sample rows, which columns matter). Skip words like “beautiful” or “modern”, the skill already takes care of that.",
      },
      {
        question: "What if my project already has a design system?",
        answer:
          "The skill uses your components. With shadcn, Radix, MUI, Ant, or an in-house kit, it uses those and only adjusts tokens to fit. Your brand colors stay unless you say “drop the old style”.",
      },
      {
        question: "Will later screens keep the look of earlier ones?",
        answer:
          "Yes. The skill writes what has been decided (the look, accent color, layout of each screen, anything you asked for app-wide) to a DESIGN.md file at the project root. The next session reads it before building, so it doesn't start recommending from scratch. You can edit that file by hand.",
      },
      {
        question: "Do I need Tailwind?",
        answer:
          "No. If your project uses CSS Modules, SCSS, or styled-components, it follows that. For plain HTML, WordPress, or PHP, it translates its samples into HTML and classes first.",
      },
      {
        question: "What dashboard styles are there?",
        answer:
          "10 named styles: Clean, Dark Sidebar, Soft, Midnight, Inset, Paper, Float, Rail, Topbar, and Editorial. They differ in where navigation sits (sidebar, icon rail, top menu), how content is contained, and the surface. The skill recommends one of the first 4 based on who uses your product. The other 6 are new and not yet tested on real projects, so they're used only when you pick them on the wireframe or send a reference image.",
      },
      {
        question: "Can a dashboard be more colorful?",
        answer:
          "Yes. By default the skill builds neutral, with color only on the main button and statuses. Say “more colorful” or “lively” and it turns on Tinted: each kind of data (channel, team, source) gets one fixed color across every screen, and open incidents get their own. Say “gradient” or “vivid” and it turns on Vivid, adding a gradient to the main button and the summary block. Both levels are new and not yet tested on real projects, so they're used only when you ask or pick them on the wireframe.",
      },
      {
        question: "What kinds of dashboards can it build?",
        answer:
          "The skill picks the layout by the screen's main job: multi-block overview, table, list + detail, kanban, calendar, date-range report, and a report that reads top to bottom. Version 0.8.0 adds the entity grid (cards with an image and stat bars, good for game characters, staff, products) and live monitoring (thresholds, incidents, auto refresh). Charts use the library your project already has, like shadcn chart; without one it draws them in SVG.",
      },
      {
        question: "Does it do dark mode?",
        answer:
          "Yes, as a beta. Adding dark mode to an existing app has been tested on one real project, all 7 items (theme toggle, tables, app shell, overlays, forms, charts, sign-in screen). By default the skill still builds light screens; it only does dark mode when you ask. Everyone's taste in dark themes differs, so if you want changes after it's built, just say so.",
      },
      {
        question: "Does it build landing pages?",
        answer:
          "No. The skill is only for screens inside an app, web or phone: dashboards, lists, tables, forms, settings, modals, and pages people browse to choose something, pricing tables included. Landing pages, e-commerce, and blogs aren't what this skill is for.",
      },
      {
        question: "Does it work in English?",
        answer:
          "Prompts in English work the same way, and UI copy follows your project's language. The skill's own rules are written in Vietnamese and the English test round hasn't run yet, so treat English output as early.",
      },
    ],
  },
  footer: {
    tagline: "evondev's skills for coding agents.",
    license: "MIT license",
  },
};
