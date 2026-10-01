import type { ComponentProps, ComponentType } from "react";

/** Một công cụ trong dải logo "Dùng được với" dưới hero. */
export interface SupportedTool {
  name: string;
  icon: ComponentType<ComponentProps<"svg">>;
}
