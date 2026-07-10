import HeroSection from "../../features/hero/HeroSection";
import TrustMetricsSection from "../../features/trustmetrics/TrustMetricsSection";
import SolutionsSection from "../../features/solutions/SolutionsSection";
import FeaturedWorkSection from "../../features/works/FeaturedWorkSection";
import EngineeringProcessSection from "../../features/process/EngineeringProcessSection";
import TrustedTechnologySection from "../../features/technologies/TrustedTechnologySection";
import WhyChooseMeSection from "../../features/whyme/WhyChooseMeSection";
import FAQSection from "../../features/faq/FAQSection";
import ContactCTASection from "../../features/contact/ContactCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustMetricsSection/>
      <SolutionsSection />
      <FeaturedWorkSection />
      <EngineeringProcessSection/>
      <TrustedTechnologySection/>
      <WhyChooseMeSection/>
      <FAQSection/>
      <ContactCTASection />
    </>
  );
}