"use client";

import type { ReactNode } from "react";
import type { FeatureMockup } from "./featureLinks";
import { FeatureMockupLink } from "./FeatureMockupLink";
import { useScrollReveal } from "./useScrollReveal";

function CheckIcon() {
  return (
    <span className="feature-panel__check" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path
          fill="none"
          stroke="#58cc02"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12.5l4.5 4.5L19 7"
        />
      </svg>
    </span>
  );
}

type FeatureSectionProps = {
  feature: FeatureMockup;
  variant: "character" | "lesson";
  preview: ReactNode;
  topWave?: ReactNode;
  bottomWave?: ReactNode;
};

function FeatureTitle({ feature }: { feature: FeatureMockup }) {
  if (feature.title) {
    return <>{feature.title}</>;
  }

  return (
    <>
      {feature.titleBefore}
      <span className="highlight">{feature.titleHighlight}</span>
      {feature.titleAfter}
    </>
  );
}

export function FeatureSection({
  feature,
  variant,
  preview,
  topWave,
  bottomWave,
}: FeatureSectionProps) {
  const reveal = useScrollReveal();

  return (
    <section
      className={`feature-panel feature-panel--${variant} section`}
      id={feature.id}
    >
      {topWave}
      <div className="section-inner">
        <div
          ref={reveal.ref}
          className={`feature-panel__grid feature-panel__grid--visual-first ${reveal.className}`}
        >
          <div className="feature-panel__preview">{preview}</div>

          <div className="feature-panel__content">
            <h2 className="feature-panel__title">
              <FeatureTitle feature={feature} />
            </h2>
            <p className="feature-panel__body">{feature.description}</p>
            {feature.bullets.length > 0 && (
              <ul className="feature-panel__list">
                {feature.bullets.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <FeatureMockupLink href={feature.mockupUrl}>
              {feature.cta}
              {feature.ctaArrow ? " →" : ""}
            </FeatureMockupLink>
          </div>
        </div>
      </div>
      {bottomWave}
    </section>
  );
}
