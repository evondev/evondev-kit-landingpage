import UiUxPage from "@/features/landing/pages/ui-ux-page";
import { buildPageMetadata } from "@/features/landing/utils";

export const metadata = buildPageMetadata("vi", "ui-ux");

export default function VietnameseUiUxPage() {
  return <UiUxPage locale="vi" />;
}
