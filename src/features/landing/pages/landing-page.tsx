import {
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
  SiteAnnouncement,
  SiteFooter,
  SiteHeader,
  TasteSection,
} from "@/features/landing/components";
import type { Locale } from "@/features/landing/types/locale";
import { getDictionary } from "@/features/landing/utils";

interface LandingPageProps {
  locale: Locale;
}

/** Cả hai route `/` và `/en` render trang này, chỉ khác `locale`. */
export default function LandingPage({ locale }: LandingPageProps) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <SiteAnnouncement dictionary={dictionary.announcement} />
      <SiteHeader locale={locale} dictionary={dictionary.header} />
      <main className="overflow-x-clip">
        <HeroSection dictionary={dictionary} />
        <ProofStrip dictionary={dictionary.proof} />
        <ModesSection number={1} dictionary={dictionary.modes} statusLabels={dictionary.statusLabels} />
        <DesignerSection number={2} dictionary={dictionary.designer} />
        <ProbeSection number={3} dictionary={dictionary.probe} />
        <ShowcaseSection number={4} locale={locale} dictionary={dictionary.showcase} />
        <TasteSection number={5} dictionary={dictionary.taste} />
        <InstallSection number={6} locale={locale} dictionary={dictionary} />
        <RoadmapSection number={7} dictionary={dictionary.roadmap} soonLabel={dictionary.statusLabels.soon} />
        <FaqSection number={8} dictionary={dictionary.faq} />
        <CtaSection dictionary={dictionary} />
      </main>
      <SiteFooter dictionary={dictionary} />
    </>
  );
}
