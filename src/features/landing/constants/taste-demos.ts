import type { ComponentType } from "react";
import TasteDemoDark from "@/features/landing/components/taste-demo-dark";
import TasteDemoFlat from "@/features/landing/components/taste-demo-flat";
import TasteDemoHairline from "@/features/landing/components/taste-demo-hairline";
import TasteDemoNarrow from "@/features/landing/components/taste-demo-narrow";
import TasteDemoOneAccent from "@/features/landing/components/taste-demo-one-accent";
import type { TasteRuleId } from "@/features/landing/types/taste-rule-id";

export const tasteDemos: Record<TasteRuleId, ComponentType> = {
  flat: TasteDemoFlat,
  "one-accent": TasteDemoOneAccent,
  hairline: TasteDemoHairline,
  narrow: TasteDemoNarrow,
  dark: TasteDemoDark,
};
