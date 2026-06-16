"use client";

import { FEATURE_MOCKUPS } from "../featureLinks";
import { FeatureMockupLink } from "../FeatureMockupLink";
import { useScrollReveal } from "../useScrollReveal";

function FeatureTitle() {
  const feature = FEATURE_MOCKUPS.teamContest;
  return (
    <>
      {feature.titleBefore}
      <span className="highlight">{feature.titleHighlight}</span>
      {feature.titleAfter}
    </>
  );
}

export function TeamContestSection() {
  const reveal = useScrollReveal();
  const feature = FEATURE_MOCKUPS.teamContest;

  return (
    <section className="feature-panel feature-panel--contest section" id={feature.id}>
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

          <div className="feature-panel__preview feature-panel__preview--contest">
            <div className="team-contest__phones" aria-hidden="true">
              <img
                src="/images/features/team-char-blue.png"
                alt=""
                className="team-contest__char team-contest__char--blue"
              />
              <img
                src="/images/features/team-blue.png"
                alt=""
                className="team-contest__phone team-contest__phone--left"
              />
              <img
                src="/images/features/team-standings.png"
                alt="Team standings mockup"
                className="team-contest__phone team-contest__phone--center"
              />
              <img
                src="/images/features/team-red.png"
                alt=""
                className="team-contest__phone team-contest__phone--right"
              />
              <img
                src="/images/features/team-char-red.png"
                alt=""
                className="team-contest__char team-contest__char--red"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
