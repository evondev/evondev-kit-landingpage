import type { ReactNode } from "react";
import { SiteDocument } from "@/features/landing/components";
import { siteViewport } from "@/features/landing/constants/site-viewport";
import { buildRootMetadata } from "@/features/landing/utils";

export const metadata = buildRootMetadata();
export const viewport = siteViewport;

interface EnglishRootLayoutProps {
  children: ReactNode;
}

/** Root layout riêng để <html lang="en">. */
export default function EnglishRootLayout({ children }: EnglishRootLayoutProps) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
