import type { ReactNode } from "react";
import { SiteDocument } from "@/features/landing/components";
import { siteViewport } from "@/features/landing/constants/site-viewport";
import { buildRootMetadata } from "@/features/landing/utils";

export const metadata = buildRootMetadata();
export const viewport = siteViewport;

interface VietnameseRootLayoutProps {
  children: ReactNode;
}

/** Root layout riêng để <html lang="vi">. Sang /en là root layout khác, tải lại cả trang. */
export default function VietnameseRootLayout({ children }: VietnameseRootLayoutProps) {
  return <SiteDocument locale="vi">{children}</SiteDocument>;
}
