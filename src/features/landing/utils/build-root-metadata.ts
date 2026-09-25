import type { Metadata } from "next";
import { getSiteUrl } from "@/features/landing/utils/get-site-url";

/** Metadata chung của root layout, để cả trang 404 cũng có metadataBase. */
export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(getSiteUrl()),
  };
}
