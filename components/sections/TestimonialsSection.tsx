"use client";

import { useState, useCallback } from "react";
import { AssetSlot } from "../AssetSlot";
import { SectionWaveOverlap } from "../SectionWaveOverlap";
import { useScrollReveal } from "../useScrollReveal";
import { useMediaQuery } from "../useMediaQuery";

const TESTIMONIALS = [
  { text: "Duolingo is de perfecte en leukste manier om een taal te leren", author: "Tom" },
  { text: "Duolingo is de perfecte en leukste manier om een taal te leren", author: "Lisa" },
  { text: "Duolingo is de perfecte en leukste manier om een taal te leren", author: "Sam" },
];

export function TestimonialsSection() {
  const reveal = useScrollReveal();
  const isMobile = useMediaQuery("(max-width: 699px)");
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;
  const slideWidth = isMobile ? 100 : 100 / 3;

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  return (
    <section className="testimonials" id="testimonials">
      <SectionWaveOverlap
        position="top"
        variant="testimonials"
        fill="#ffffff"
      />
      <AssetSlot name="testimonials-clouds-top" className="testimonials__clouds-top" />

      <div ref={reveal.ref} className={reveal.className}>
        <h2 className="testimonials__title">What are users say</h2>

        <div className="testimonials__carousel-wrap">
          <button
            type="button"
            className="carousel-nav carousel-nav--prev"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <AssetSlot name="carousel-arrow-prev" className="carousel-nav__icon" />
          </button>

          <div className="testimonials__track-outer">
            <div
              className="testimonials__track"
              style={{ transform: `translateX(-${index * slideWidth}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <article key={i} className="testimonial-card">
                  <div className="testimonial-card__inner">
                    <AssetSlot
                      name="testimonial-quote-icon"
                      className="testimonial-quote"
                    />
                    <p className="testimonial-text">{t.text}</p>
                    <AssetSlot
                      name="testimonial-stars"
                      className="testimonial-stars"
                    />
                    <p className="testimonial-author">- {t.author}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="carousel-nav carousel-nav--next"
            onClick={next}
            aria-label="Next testimonial"
          >
            <AssetSlot name="carousel-arrow-next" className="carousel-nav__icon" />
          </button>
        </div>
      </div>

      <AssetSlot name="testimonials-character" className="testimonials__character" />

      <AssetSlot
        name="testimonials-clouds-bottom"
        className="testimonials__clouds-bottom"
      />
    </section>
  );
}
