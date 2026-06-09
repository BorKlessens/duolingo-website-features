"use client";

import { DuolingoLogo } from "../DuolingoLogo";
import { PhoneScreen } from "../PhoneScreen";
import { screens } from "../screenImages";
import { useScrollReveal } from "../useScrollReveal";

export function HeroSection() {
  const reveal = useScrollReveal();

  return (
    <section className="hero" id="hero">
      <header className="hero__header">
        <DuolingoLogo />
      </header>

      <div ref={reveal.ref} className={`hero__grid ${reveal.className}`}>
        <div className="hero__content">
          <h1 className="hero__headline">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </h1>
          <button type="button" className="btn-green">
            Download
          </button>
        </div>

        <div className="hero__visual-wrap">
          <img
            src="/images/characters/bea.png"
            alt=""
            className="hero__character-side hero__character-side--left float-soft"
            aria-hidden="true"
          />
          <PhoneScreen
            src={screens.topics.src}
            width={screens.topics.width}
            height={screens.topics.height}
            alt="Duolingo app — kies een onderwerp"
            size="large"
            className="hero__phone"
            displayHeight={400}
          />
          <img
            src="/images/characters/junior.png"
            alt=""
            className="hero__character-side hero__character-side--right float-soft float-soft--delay"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="hero__decor">
        <img
          src="/images/characters/fallstaff.png"
          alt=""
          className="hero__decor-character float-soft"
          aria-hidden="true"
        />
        <img
          src="/images/characters/duo.png"
          alt=""
          className="hero__decor-owl float-soft float-soft--delay"
          aria-hidden="true"
        />
      </div>

      <div className="pagination-dots" aria-label="Hero slides">
        <span className="active" />
        <span />
        <span />
      </div>
    </section>
  );
}
