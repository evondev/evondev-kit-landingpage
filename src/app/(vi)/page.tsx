import KitHomePage from "@/features/landing/pages/kit-home-page";
import { buildPageMetadata } from "@/features/landing/utils";

export const metadata = buildPageMetadata("vi", "home");

export default function VietnameseHomePage() {
  return <KitHomePage locale="vi" />;
}
