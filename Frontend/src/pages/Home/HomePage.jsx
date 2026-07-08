import HeroSection from "../../features/hero/HeroSection";
import AboutSection from "../../features/about/AboutSection";
import ServicesSection from "../../features/services/ServicesSection";
import StatisticsSection from "../../features/statistics/StatisticsSection";
import SkillsSection from "../../features/skills/SkillsSection";
import ResumeSection from "../../features/resume/ResumeSection";
import ProjectsSection from "../../features/projects/ProjectsSection";
import CertificatesSection from "../../features/certificates/CertificatesSection";
import ContactSection from "../../features/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatisticsSection />
      <SkillsSection />
      <ResumeSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}