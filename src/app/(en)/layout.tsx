import type { ReactNode } from "react";
import { SiteDocument } from "@/features/landing/components";
import { buildRootMetadata } from "@/features/landing/utils";

export const metadata = buildRootMetadata();

interface EnglishRootLayoutProps {
  children: ReactNode;
}

/** Root layout riêng để <html lang="en">. */
export default function EnglishRootLayout({ children }: EnglishRootLayoutProps) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
