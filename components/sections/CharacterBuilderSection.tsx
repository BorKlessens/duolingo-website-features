"use client";

import { FEATURE_MOCKUPS, SECTION_COLORS } from "../featureLinks";
import { FeatureSection } from "../FeatureSection";
import { SectionWaveOverlap } from "../SectionWaveOverlap";

export function CharacterBuilderSection() {
  return (
    <FeatureSection
      feature={FEATURE_MOCKUPS.characterEditor}
      variant="character"
      topWave={
        <SectionWaveOverlap
          position="top"
          fill={SECTION_COLORS.character}
          variant="character"
        />
      }
      preview={
        <img
          src="/images/features/character-editor.png"
          alt="Character editor mockup"
          className="feature-img feature-img--editor"
        />
      }
    />
  );
}
