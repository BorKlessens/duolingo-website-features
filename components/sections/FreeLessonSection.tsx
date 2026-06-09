"use client";

import { PhonesCarousel } from "../PhonesCarousel";
import { SectionWaveOverlap } from "../SectionWaveOverlap";
import { useScrollReveal } from "../useScrollReveal";

function CheckIcon() {
  return (
    <span className="feature-list__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="16" height="16">
        <path
          fill="none"
          stroke="#fff"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12.5l4.5 4.5L19 7"
        />
      </svg>
    </span>
  );
}

export function FreeLessonSection() {
  const reveal = useScrollReveal();

  return (
    <section className="free-lesson section" id="free-lesson">
      <div className="section-inner">
        <div
          ref={reveal.ref}
          className={`section-grid section-grid--reverse ${reveal.className}`}
        >
          <div className="section-grid__visual free-lesson__stage">
            <img
              src="/images/characters/travel.png"
              alt=""
              className="free-lesson__owl free-lesson__owl--travel float-soft"
              aria-hidden="true"
            />
            <img
              src="/images/characters/owl-fly.png"
              alt=""
              className="free-lesson__owl free-lesson__owl--left float-soft float-soft--delay"
              aria-hidden="true"
            />

            <PhonesCarousel />

            <img
              src="/images/characters/owl-fly.png"
              alt=""
              className="free-lesson__owl free-lesson__owl--top float-soft"
              aria-hidden="true"
            />
            <img
              src="/images/characters/owl-fly.png"
              alt=""
              className="free-lesson__owl free-lesson__owl--right float-soft float-soft--slow"
              aria-hidden="true"
            />
            <img
              src="/images/characters/hand.png"
              alt=""
              className="free-lesson__hand"
              aria-hidden="true"
            />
          </div>

          <div className="section-grid__content">
            <h2 className="section-title">
              Probeer <span className="highlight">gratis</span> korte les binnen
              1 min
            </h2>
            <p className="section-body">
              Speel hieronder een korte proefles van 1 minuut en ontdek of
              Duolingo iets voor jou is — verdien meteen +50 XP!
            </p>
            <ul className="feature-list">
              <li>
                <CheckIcon />
                Verdien +50 XP bij het voltooien van een les!
              </li>
              <li>
                <CheckIcon />
                Probeer volledig gratis!
              </li>
              <li>
                <CheckIcon />
                Binnen 1 min!
              </li>
              <li>
                <CheckIcon />
                Kies je eigen topic!
              </li>
            </ul>
            <button type="button" className="btn-green">
              Speel nu! →
            </button>
          </div>
        </div>
      </div>
      <SectionWaveOverlap position="bottom" variant="lesson" fill="#D7FFB8" />
    </section>
  );
}
