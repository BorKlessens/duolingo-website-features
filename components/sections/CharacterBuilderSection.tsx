"use client";

import { PhoneScreen } from "../PhoneScreen";
import { screens } from "../screenImages";
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

export function CharacterBuilderSection() {
  const reveal = useScrollReveal();

  return (
    <section className="character-builder section" id="character-builder">
      <div className="section-inner">
        <div ref={reveal.ref} className={`section-grid ${reveal.className}`}>
          <div className="section-grid__visual">
            <PhoneScreen
              src={screens.characterEditor.src}
              width={screens.characterEditor.width}
              height={screens.characterEditor.height}
              alt="Duolingo karakter editor"
              size="large"
              displayHeight={580}
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
                <CheckIcon />
                Verdien 50 XP bij het aanmaken van jouw karakter!
              </li>
              <li>
                <CheckIcon />
                Volledig aanpasbaar: hoofd, outfit, armen, benen en accessoires
              </li>
              <li>
                <CheckIcon />
                Verdien XP met jouw karakter om beloningen te ontvangen!
              </li>
              <li>
                <CheckIcon />
                Deel jouw karakter op social media om leuke prijzen te winnen!
              </li>
            </ul>
            <button type="button" className="btn-green">
              Maak jouw karakter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
