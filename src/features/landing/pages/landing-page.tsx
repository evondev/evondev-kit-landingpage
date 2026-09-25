import {
  FaqSection,
  HeroSection,
  HowItWorksSection,
  InstallSection,
  PlatformsSection,
  ShowcaseSection,
  SiteFooter,
  SiteHeader,
  StatsSection,
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
      <SiteHeader locale={locale} dictionary={dictionary.header} />
      {/* Quầng sáng tràn ra ngoài khung: cắt ngang để trang không cuộn ngang (R1). */}
      <main className="overflow-x-clip">
        <HeroSection dictionary={dictionary} />
        <StatsSection dictionary={dictionary.stats} />
        <HowItWorksSection dictionary={dictionary.howItWorks} />
        <ShowcaseSection locale={locale} dictionary={dictionary.showcase} />
        <TasteSection dictionary={dictionary.taste} />
        <PlatformsSection dictionary={dictionary.platforms} />
        <InstallSection locale={locale} dictionary={dictionary} />
        <FaqSection dictionary={dictionary.faq} />
      </main>
      <SiteFooter dictionary={dictionary} />
    </>
  );
}
