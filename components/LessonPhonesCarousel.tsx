"use client";

import { useEffect, useState } from "react";

const LESSON_SCREENS = [
  { src: "/images/screens/lesson-flow-1.png", alt: "Kies een topic" },
  { src: "/images/screens/lesson-flow-2.png", alt: "Vertaal de zin" },
  { src: "/images/screens/lesson-flow-3.png", alt: "Les voltooid" },
];

const ROTATE_MS = 4000;

function getPosition(
  index: number,
  active: number
): "left" | "center" | "right" {
  if (index === active) return "center";
  if (index === (active + 1) % LESSON_SCREENS.length) return "right";
  return "left";
}

export function LessonPhonesCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % LESSON_SCREENS.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="lesson-phones-carousel"
      aria-label="Duolingo les schermen"
      aria-live="polite"
    >
      {LESSON_SCREENS.map((screen, index) => {
        const position = getPosition(index, active);
        return (
          <img
            key={screen.src}
            src={screen.src}
            alt={screen.alt}
            className={`lesson-phones-carousel__item lesson-phones-carousel__item--${position}`}
          />
        );
      })}
    </div>
  );
}
