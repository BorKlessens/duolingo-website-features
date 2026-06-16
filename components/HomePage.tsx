"use client";

import { HeroSection } from "./sections/HeroSection";
import { CharacterBuilderSection } from "./sections/CharacterBuilderSection";
import { FreeLessonSection } from "./sections/FreeLessonSection";
import { TeamContestSection } from "./sections/TeamContestSection";
import { DownloadCTASection } from "./sections/DownloadCTASection";
import { FooterSection } from "./sections/FooterSection";

export function HomePage() {
  return (
    <div className="homepage">
      <HeroSection />
      <CharacterBuilderSection />
      <FreeLessonSection />
      <TeamContestSection />
      <DownloadCTASection />
      <FooterSection />
    </div>
  );
}
