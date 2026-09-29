import type { InstallTool } from "@/features/landing/types/install-tool";

const cloneCommand = "git clone https://github.com/evondev/evondevKit.git ~/evondevKit";

/** Lệnh lấy từ README của evondevKit. README đổi thì sửa ở đây. */
export const installTools: InstallTool[] = [
  {
    id: "claude-code",
    name: "Claude Code",
    isTested: true,
    steps: [
      {
        description: {
          vi: "Thêm marketplace rồi cài plugin evon.",
          en: "Add the marketplace, then install the evon plugin.",
        },
        commands: ["/plugin marketplace add evondev/evondevKit", "/plugin install evon@evondevkit"],
      },
      {
        description: {
          vi: "Gọi skill bằng lệnh này, hoặc cứ gõ đề: skill tự bật khi đề nói về giao diện app.",
          en: "Invoke the skill with this command, or just write a prompt: it turns on when the prompt is about app UI.",
        },
        commands: ["/evon:ui-ux"],
      },
      {
        description: {
          vi: "Lấy bản mới khi skill ra phiên bản mới.",
          en: "Pull the latest version when a new release is out.",
        },
        commands: ["/plugin marketplace update evondevkit"],
      },
    ],
  },
  {
    id: "codex",
    name: "Codex",
    isTested: false,
    steps: [
      {
        description: {
          vi: "Tải repo về máy.",
          en: "Clone the repo.",
        },
        commands: [cloneCommand],
      },
      {
        description: {
          vi: "Chép thư mục skill vào .agents/skills/ của dự án.",
          en: "Copy the skill folder into your project's .agents/skills/.",
        },
        commands: ["mkdir -p .agents/skills", "cp -R ~/evondevKit/skills/ui-ux .agents/skills/"],
      },
      {
        description: {
          vi: "Không có lệnh /evon:ui-ux: gõ “dùng skill ui-ux” trong đề.",
          en: "There's no /evon:ui-ux command: write “use the ui-ux skill” in your prompt.",
        },
        commands: [],
      },
    ],
  },
  {
    id: "antigravity",
    name: "Antigravity",
    isTested: false,
    steps: [
      {
        description: {
          vi: "Tải repo về máy.",
          en: "Clone the repo.",
        },
        commands: [cloneCommand],
      },
      {
        description: {
          vi: "Chép thư mục skill vào .agents/skills/ của dự án.",
          en: "Copy the skill folder into your project's .agents/skills/.",
        },
        commands: ["mkdir -p .agents/skills", "cp -R ~/evondevKit/skills/ui-ux .agents/skills/"],
      },
      {
        description: {
          vi: "Không có lệnh /evon:ui-ux: gõ “dùng skill ui-ux” trong đề.",
          en: "There's no /evon:ui-ux command: write “use the ui-ux skill” in your prompt.",
        },
        commands: [],
      },
    ],
  },
];
