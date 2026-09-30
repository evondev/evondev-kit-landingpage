import {
  BeforeAfterSection,
  CtaSection,
  DesignerSection,
  FaqSection,
  HeroSection,
  InstallSection,
  ModesSection,
  ProbeSection,
  ProofStrip,
  RoadmapSection,
  ShowcaseSection,
  SiteFooter,
  SiteHeader,
  TasteSection,
} from "@/features/landing/components";
import { uiUxNavItems } from "@/features/landing/constants/ui-ux-nav-items";
import type { Locale } from "@/features/landing/types/locale";
import { getDictionary } from "@/features/landing/utils";

interface UiUxPageProps {
  locale: Locale;
}

/** Trang skill evon:ui-ux, một skill trong bộ evondevKit. Ở `/ui-ux` và `/en/ui-ux`. */
export default function UiUxPage({ locale }: UiUxPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <SiteHeader
        locale={locale}
        page="ui-ux"
        navItems={uiUxNavItems}
        dictionary={dictionary.header}
        statusLabel={dictionary.statusLabels.beta}
      />
      <main className="overflow-x-clip">
        <HeroSection locale={locale} dictionary={dictionary} />
        <ProofStrip dictionary={dictionary.proof} />
        <ModesSection number={1} dictionary={dictionary.modes} statusLabels={dictionary.statusLabels} />
        <DesignerSection number={2} dictionary={dictionary.designer} />
        <BeforeAfterSection number={3} dictionary={dictionary.beforeAfter} />
        <ProbeSection number={4} dictionary={dictionary.probe} />
        <ShowcaseSection number={5} locale={locale} dictionary={dictionary.showcase} />
        <TasteSection number={6} dictionary={dictionary.taste} />
        <InstallSection number={7} locale={locale} dictionary={dictionary} />
        <RoadmapSection number={8} dictionary={dictionary.roadmap} soonLabel={dictionary.statusLabels.soon} />
        <FaqSection number={9} dictionary={dictionary.faq} />
        <CtaSection content={dictionary.cta} primaryHref="#install" copyLabels={dictionary.copyButton} />
      </main>
      <SiteFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
