"use client";

import { AssetSlot } from "../AssetSlot";
import { PhoneScreen } from "../PhoneScreen";
import { screens } from "../screenImages";
import { useScrollReveal } from "../useScrollReveal";
import teamContestBackground from "@/public/images/team-contest-bg.png";

export function TeamContestSection() {
  const reveal = useScrollReveal();

  return (
    <section className="team-contest" id="team-contest">
      <img
        src={teamContestBackground.src}
        alt=""
        className="team-contest__bg"
        width={teamContestBackground.width}
        height={teamContestBackground.height}
        decoding="async"
      />
      <div ref={reveal.ref} className={`team-contest__inner ${reveal.className}`}>
        <h2 className="team-contest__title">
          Speel voor je team en verdien XP!
        </h2>
        <p className="team-contest__subtitle">
          Word automatisch in een team geplaatst en strijd samen voor XP om het
          contest te winnen met jouw team
        </p>

        <div className="team-contest__visual">
          <AssetSlot
            name="team-contest-character-left"
            className="team-contest__character"
          />
          <PhoneScreen
            src={screens.teamStandings.src}
            alt="Duolingo — team standings"
            size="large"
          />
          <AssetSlot
            name="team-contest-character-right"
            className="team-contest__character"
          />
        </div>

        <button type="button" className="btn-green btn-green--large">
          Join your team
        </button>
      </div>
    </section>
  );
}
