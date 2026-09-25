import LandingPage from "@/features/landing/pages/landing-page";
import { buildPageMetadata } from "@/features/landing/utils";

export const metadata = buildPageMetadata("en");

export default function EnglishHomePage() {
  return <LandingPage locale="en" />;
}
