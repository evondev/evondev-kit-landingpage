import type { InstallStep } from "@/features/landing/types/install-tool";
import type { SkillsCliAgent } from "@/features/landing/types/skills-cli-agent";

/** Ba bước chung của các công cụ đọc `.agents/skills/`: cài bằng npx, gọi skill, cập nhật. */
export function buildSkillsCliSteps({ agentId, invokeStep }: SkillsCliAgent): InstallStep[] {
  return [
    {
      description: {
        vi: "Chạy một trong hai lệnh ở thư mục gốc dự án: npx nếu máy có Node, bunx nếu dùng Bun. Skill vào .agents/skills/, thêm -g để dùng chung cho mọi dự án.",
        en: "Run one of these in your project root: npx if you have Node, bunx if you use Bun. The skill lands in .agents/skills/; add -g to install it for every project.",
      },
      commands: [`npx skills add evondev/evondevKit -a ${agentId}`, `bunx skills add evondev/evondevKit -a ${agentId}`],
    },
    invokeStep,
    {
      description: {
        vi: "Cập nhật khi skill có bản mới, cũng chạy một trong hai lệnh.",
        en: "Pull the latest version when a new release is out, again with either command.",
      },
      commands: ["npx skills update", "bunx skills update"],
    },
  ];
}
