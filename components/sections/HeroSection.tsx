"use client";

import { AssetSlot } from "../AssetSlot";
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
          <AssetSlot name="hero-character-left" className="hero__character-side" />
          <PhoneScreen
            src={screens.topics.src}
            alt="Duolingo app — kies een onderwerp"
            size="large"
            className="hero__phone"
            displayHeight={400}
            priority
          />
          <AssetSlot name="hero-character-right" className="hero__character-side" />
        </div>
      </div>

      <div className="hero__decor">
        <AssetSlot name="hero-characters-group" className="hero__characters-group" />
        <AssetSlot name="hero-owl" className="hero__decor-owl" />
      </div>

      <div className="pagination-dots" aria-label="Hero slides">
        <span className="active" />
        <span />
        <span />
      </div>
    </section>
  );
}
