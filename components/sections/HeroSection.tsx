"use client";

import { DuolingoLogo } from "../DuolingoLogo";
import { useScrollReveal } from "../useScrollReveal";

export function HeroSection() {
  const reveal = useScrollReveal();

  return (
    <section className="hero" id="hero">
      <img
        src={encodeURI("/images/image 151 (1).png")}
        alt=""
        className="hero__image"
        aria-hidden="true"
      />
      <div className="section-inner hero__inner">
        <div ref={reveal.ref} className={`hero__grid ${reveal.className}`}>
          <div className="hero__content">
            <DuolingoLogo />
            <p className="hero__body">
              De gratis, leuke en effectieve manier om een taal te leren.
              Ontdek onze nieuwe features en probeer de live mockups.
            </p>
            <a href="#character-builder" className="btn-green">
              Ontdek features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
