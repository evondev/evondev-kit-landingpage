import {
  CtaSection,
  KitHeroSection,
  KitPrinciplesSection,
  KitSkillsSection,
  SiteAnnouncement,
  SiteFooter,
  SiteHeader,
  SupportedToolsStrip,
} from "@/features/landing/components";
import { kitHomeNavItems } from "@/features/landing/constants/kit-home-nav-items";
import { kitHomeSectionCount } from "@/features/landing/constants/kit-home-section-count";
import type { Locale } from "@/features/landing/types/locale";
import { getDictionary, getLocalePath } from "@/features/landing/utils";

interface KitHomePageProps {
  locale: Locale;
}

/** Trang chủ evondevKit: giới thiệu cả bộ skill, dẫn sang trang từng skill. Ở `/` và `/en`. */
export default function KitHomePage({ locale }: KitHomePageProps) {
  const dictionary = getDictionary(locale);
  const { kitHome } = dictionary;
  const uiUxPath = getLocalePath(locale, "ui-ux");

  return (
    <>
      <SiteAnnouncement content={kitHome.announcement} href={`${uiUxPath}#designer`} />
      <SiteHeader locale={locale} page="home" navItems={kitHomeNavItems} dictionary={dictionary.header} />
      <main className="overflow-x-clip">
        <KitHeroSection locale={locale} dictionary={dictionary} />
        <SupportedToolsStrip dictionary={dictionary.supportedTools} />
        <KitSkillsSection number={1} total={kitHomeSectionCount} locale={locale} dictionary={dictionary} />
        <KitPrinciplesSection number={2} total={kitHomeSectionCount} dictionary={kitHome.principles} />
        <CtaSection id="install" content={kitHome.cta} primaryHref={uiUxPath} copyLabels={dictionary.copyButton} />
      </main>
      <SiteFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
