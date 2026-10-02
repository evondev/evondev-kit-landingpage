import type { InstallStep } from "@/features/landing/types/install-tool";

/** Một công cụ cài skill bằng `npx skills add`: tên agent của CLI và bước gọi skill riêng của công cụ đó. */
export interface SkillsCliAgent {
  /** Giá trị cờ `-a` của CLI skills */
  agentId: string;
  /** Thư mục công cụ đọc skill, mặc định `.agents/skills/` */
  skillsDir?: string;
  invokeStep: InstallStep;
}
