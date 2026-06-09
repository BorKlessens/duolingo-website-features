"use client";

import { useState, useCallback } from "react";
import { SectionWaveOverlap } from "../SectionWaveOverlap";
import { useScrollReveal } from "../useScrollReveal";
import { useMediaQuery } from "../useMediaQuery";

const TESTIMONIALS = [
  { text: "Duolingo is de perfecte en leukste manier om een taal te leren", author: "Tom" },
  { text: "Duolingo is de perfecte en leukste manier om een taal te leren", author: "Lisa" },
  { text: "Duolingo is de perfecte en leukste manier om een taal te leren", author: "Sam" },
];

function Stars() {
  return (
    <div className="testimonial-stars" aria-label="5 van 5 sterren">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            fill="#FFC800"
            d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.9l-5.8 3.05 1.1-6.47L2.6 9.9l6.5-.95L12 2.5z"
          />
        </svg>
      ))}
    </div>
  );
}

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
      <SectionWaveOverlap position="top" variant="testimonials" fill="#ffffff" />

      <div ref={reveal.ref} className={reveal.className}>
        <h2 className="testimonials__title">Wat zeggen onze gebruikers</h2>

        <div className="testimonials__carousel-wrap">
          <button
            type="button"
            className="carousel-nav carousel-nav--prev"
            onClick={prev}
            aria-label="Vorige review"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 5l-7 7 7 7"
              />
            </svg>
          </button>

          <div className="testimonials__track-outer">
            <div
              className="testimonials__track"
              style={{ transform: `translateX(-${index * slideWidth}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <article key={i} className="testimonial-card">
                  <div className="testimonial-card__inner">
                    <span className="testimonial-quote" aria-hidden="true">
                      &ldquo;
                    </span>
                    <p className="testimonial-text">{t.text}</p>
                    <Stars />
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
            aria-label="Volgende review"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <img
        src="/images/characters/travel.png"
        alt=""
        className="testimonials__character float-soft"
        aria-hidden="true"
      />
    </section>
  );
}
