import LandingPage from "@/features/landing/pages/landing-page";
import { buildPageMetadata } from "@/features/landing/utils";

export const metadata = buildPageMetadata("vi");

export default function VietnameseHomePage() {
  return <LandingPage locale="vi" />;
}
