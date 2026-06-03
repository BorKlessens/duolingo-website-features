"use client";

import { WaveDivider } from "./WaveDivider";
import { HeroSection } from "./sections/HeroSection";
import { CharacterBuilderSection } from "./sections/CharacterBuilderSection";
import { FreeLessonSection } from "./sections/FreeLessonSection";
import { TeamContestSection } from "./sections/TeamContestSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FooterSection } from "./sections/FooterSection";

export function HomePage() {
  return (
    <div className="homepage">
      <HeroSection />
      <WaveDivider variant="hero" fill="#ffffff" background="#D7FFB8" />
      <CharacterBuilderSection />
      <WaveDivider variant="character" fill="#D7FFB8" background="#ffffff" />
      <FreeLessonSection />
      <TeamContestSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}
