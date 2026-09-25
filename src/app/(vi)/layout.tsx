import type { ReactNode } from "react";
import { SiteDocument } from "@/features/landing/components";
import { buildRootMetadata } from "@/features/landing/utils";

export const metadata = buildRootMetadata();

interface VietnameseRootLayoutProps {
  children: ReactNode;
}

/** Root layout riêng để <html lang="vi">. Sang /en là root layout khác, tải lại cả trang. */
export default function VietnameseRootLayout({ children }: VietnameseRootLayoutProps) {
  return <SiteDocument locale="vi">{children}</SiteDocument>;
}
