"use client";

import { AssetSlot } from "../AssetSlot";
import { PhoneScreen } from "../PhoneScreen";
import { screens } from "../screenImages";
import { useScrollReveal } from "../useScrollReveal";

export function CharacterBuilderSection() {
  const reveal = useScrollReveal();

  return (
    <section className="character-builder section" id="character-builder">
      <div className="section-inner">
        <div ref={reveal.ref} className={`section-grid ${reveal.className}`}>
          <div className="section-grid__visual">
            <PhoneScreen
              src={screens.characterEditor.src}
              alt="Duolingo karakter editor"
              size="large"
              displayHeight={480}
              className="character-builder__screen"
            />
          </div>

          <div className="section-grid__content">
            <h2 className="section-title">
              Maak <span className="highlight">jouw</span> eigen Duolingo
              karakter
            </h2>
            <p className="section-body">
              Creëer een uniek karakter dat helemaal van jou is! Pas hoofd,
              outfit, armen, benen en accessoires aan en speel ermee in de app.
            </p>
            <ul className="feature-list">
              <li>
                <AssetSlot name="checkmark-icon" className="feature-list__icon" />
                Verdien 50 XP bij het aanmaken van jouw karakter!
              </li>
              <li>
                <AssetSlot name="checkmark-icon" className="feature-list__icon" />
                Volledig aanpasbaar: hoofd, outfit, armen, benen en accessoires
              </li>
              <li>
                <AssetSlot name="checkmark-icon" className="feature-list__icon" />
                Verdien XP met jouw karakter om beloningen te ontvangen!
              </li>
              <li>
                <AssetSlot name="checkmark-icon" className="feature-list__icon" />
                Deel jouw karakter op social media om leuke prijzen te winnen!
              </li>
            </ul>
            <button type="button" className="btn-green btn-green--large">
              Maak jouw karakter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
