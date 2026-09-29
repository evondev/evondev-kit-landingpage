import UiUxPage from "@/features/landing/pages/ui-ux-page";
import { buildPageMetadata } from "@/features/landing/utils";

export const metadata = buildPageMetadata("en", "ui-ux");

export default function EnglishUiUxPage() {
  return <UiUxPage locale="en" />;
}
