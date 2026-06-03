"use client";

import { AssetSlot } from "../AssetSlot";
import { PhonesCarousel } from "../PhonesCarousel";
import { SectionWaveOverlap } from "../SectionWaveOverlap";
import { useScrollReveal } from "../useScrollReveal";

export function FreeLessonSection() {
  const reveal = useScrollReveal();

  return (
    <section className="free-lesson section" id="free-lesson">
      <div className="section-inner">
        <div
          ref={reveal.ref}
          className={`section-grid section-grid--reverse ${reveal.className}`}
        >
          <div className="section-grid__visual">
            <PhonesCarousel />
            <AssetSlot name="free-lesson-hand" className="free-lesson__hand" />
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
            <button type="button" className="btn-outline-green">
              Speel nu! →
            </button>
          </div>
        </div>
      </div>
      <AssetSlot name="free-lesson-owl" className="free-lesson__owl" />
      <SectionWaveOverlap
        position="bottom"
        variant="lesson"
        fill="#D7FFB8"
      />
    </section>
  );
}
