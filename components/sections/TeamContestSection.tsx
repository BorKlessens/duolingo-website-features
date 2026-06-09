"use client";

import { PhoneScreen } from "../PhoneScreen";
import { screens } from "../screenImages";
import { useScrollReveal } from "../useScrollReveal";

const HIGHLIGHTS = [
  { icon: "⭐", text: "Verdien samen XP" },
  { icon: "🗓️", text: "Maandelijkse resets" },
  { icon: "🙌", text: "Bouw een sterke community" },
];

export function TeamContestSection() {
  const reveal = useScrollReveal();

  return (
    <section className="team-contest" id="team-contest">
      <div ref={reveal.ref} className={`team-contest__inner ${reveal.className}`}>
        <h2 className="team-contest__title">
          Speel voor je team en verdien XP!
        </h2>
        <p className="team-contest__subtitle">
          Word automatisch in een team geplaatst en strijd samen voor XP om het
          contest te winnen met jouw team. Kies jouw kleur en laat zien wie de
          sterkste taalhelden zijn!
        </p>

        <div className="team-contest__visual">
          <img
            src="/images/characters/junior.png"
            alt=""
            className="team-contest__character team-contest__character--left float-soft"
            aria-hidden="true"
          />
          <div className="team-contest__phones">
            <PhoneScreen
              src={screens.teamBlue.src}
              width={screens.teamBlue.width}
              height={screens.teamBlue.height}
              alt="Duolingo — Team Blauw"
              className="team-contest__phone team-contest__phone--blue"
              displayHeight={360}
            />
            <PhoneScreen
              src={screens.teamStandings.src}
              width={screens.teamStandings.width}
              height={screens.teamStandings.height}
              alt="Duolingo — team scores"
              className="team-contest__phone team-contest__phone--center"
              displayHeight={430}
            />
            <PhoneScreen
              src={screens.teamRed.src}
              width={screens.teamRed.width}
              height={screens.teamRed.height}
              alt="Duolingo — Team Rood"
              className="team-contest__phone team-contest__phone--red"
              displayHeight={360}
            />
          </div>
          <img
            src="/images/characters/eddy.png"
            alt=""
            className="team-contest__character team-contest__character--right float-soft float-soft--delay"
            aria-hidden="true"
          />
        </div>

        <ul className="team-contest__highlights">
          {HIGHLIGHTS.map((item) => (
            <li key={item.text} className="team-contest__highlight">
              <span aria-hidden="true">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>

        <button type="button" className="btn-green">
          Join your team
        </button>
      </div>
    </section>
  );
}
