'use client';

import StarField from '@/components/ui/StarField';
import MenuBar from '@/components/ui/MenuBar';
import HeroSection from '@/components/sections/HeroSection';
import TimelineSection from '@/components/sections/TimelineSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      {/* Global star field background */}
      <StarField starCount={180} />

      {/* RPG-style navigation */}
      <MenuBar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
