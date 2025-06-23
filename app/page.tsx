"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { PageLoader } from "@/components/page-loader";
import { CursorEffect } from "@/components/cursor-effect";
import { ParallaxBackground } from "@/components/parallax-background";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <ParallaxBackground />
      <CursorEffect />
      <main className="min-h-screen relative">
        <Navigation />

        <div id="home">
          <HeroSection />
        </div>

        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
