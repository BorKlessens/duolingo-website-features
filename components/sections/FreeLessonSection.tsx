"use client";

import { FEATURE_MOCKUPS, SECTION_COLORS } from "../featureLinks";
import { FeatureMockupLink } from "../FeatureMockupLink";
import { LessonPhonesCarousel } from "../LessonPhonesCarousel";
import { SectionWaveOverlap } from "../SectionWaveOverlap";
import { useScrollReveal } from "../useScrollReveal";

function FeatureTitle() {
  const feature = FEATURE_MOCKUPS.miniLesson;
  return (
    <>
      {feature.titleBefore}
      <span className="highlight">{feature.titleHighlight}</span>
      {feature.titleAfter}
    </>
  );
}

export function FreeLessonSection() {
  const reveal = useScrollReveal();
  const feature = FEATURE_MOCKUPS.miniLesson;

  return (
    <section className="feature-panel feature-panel--lesson section" id={feature.id}>
      <SectionWaveOverlap
        position="top"
        fill={SECTION_COLORS.character}
        variant="lesson"
        flip
      />

      <div className="section-inner">
        <div
          ref={reveal.ref}
          className={`feature-panel__grid feature-panel__grid--content-first ${reveal.className}`}
        >
          <div className="feature-panel__content">
            <h2 className="feature-panel__title">
              <FeatureTitle />
            </h2>
            <p className="feature-panel__body">{feature.description}</p>
            <FeatureMockupLink href={feature.mockupUrl}>
              {feature.cta} →
            </FeatureMockupLink>
          </div>

          <div className="feature-panel__preview feature-panel__preview--lesson">
            <LessonPhonesCarousel />
          </div>
        </div>
      </div>

      <SectionWaveOverlap
        position="bottom"
        fill={SECTION_COLORS.contest}
        variant="testimonials"
      />
    </section>
  );
}
