import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { FloatingDock } from "@/components/FloatingDock";

export default function Home() {
  return (
    <div className="min-h-screen grid-bg">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <HeroSection />
        <main className="mt-12 space-y-16 sm:space-y-20">
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ResearchSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
      <FloatingDock />
    </div>
  );
}
