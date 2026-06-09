"use client";

import { useEffect, useState } from "react";
import { PhoneScreen } from "./PhoneScreen";
import { screens, type ScreenAsset } from "./screenImages";

const LESSON_PHONES: { key: keyof typeof screens; alt: string }[] = [
  { key: "topics", alt: "Duolingo — kies een onderwerp" },
  { key: "translate", alt: "Duolingo — vertaal deze zin" },
  { key: "xp", alt: "Duolingo — streak en voortgang" },
];

const ROTATE_MS = 4000;

function getPosition(
  index: number,
  active: number
): "left" | "center" | "right" {
  if (index === active) return "center";
  if (index === (active + 1) % LESSON_PHONES.length) return "right";
  return "left";
}

function getDisplayHeight(
  screen: ScreenAsset,
  position: "left" | "center" | "right"
): number | undefined {
  if (position === "center") return screen.displayHeightCenter;
  return screen.displayHeightSide;
}

export function PhonesCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % LESSON_PHONES.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="phones-carousel"
      aria-label="Duolingo les schermen"
      aria-live="polite"
    >
      {LESSON_PHONES.map((phone, index) => {
        const screen = screens[phone.key];
        const position = getPosition(index, active);
        return (
          <PhoneScreen
            key={phone.key}
            src={screen.src}
            width={screen.width}
            height={screen.height}
            alt={phone.alt}
            displayHeight={getDisplayHeight(screen, position)}
            className={`phones-carousel__item phones-carousel__item--${position}`}
          />
        );
      })}
    </div>
  );
}
