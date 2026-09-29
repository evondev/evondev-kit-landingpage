import KitHomePage from "@/features/landing/pages/kit-home-page";
import { buildPageMetadata } from "@/features/landing/utils";

export const metadata = buildPageMetadata("en", "home");

export default function EnglishHomePage() {
  return <KitHomePage locale="en" />;
}
