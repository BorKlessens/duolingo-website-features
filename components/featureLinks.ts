export type FeatureMockup = {
  id: string;
  titleHighlight?: string;
  titleBefore?: string;
  titleAfter?: string;
  title?: string;
  description: string;
  bullets: string[];
  cta: string;
  ctaArrow?: boolean;
  mockupUrl: string;
};

export const FEATURE_MOCKUPS = {
  characterEditor: {
    id: "character-builder",
    titleBefore: "Maak ",
    titleHighlight: "jouw",
    titleAfter: " eigen Duolingo karakter",
    description:
      "Ontwerp jouw unieke personage van top tot teen. Kies kapsels, outfits, kleuren en accessoires. Voeg jouw eigen karakter toe aan de game en start met het verdienen van XP.",
    bullets: [
      "Verdien 50 XP bij het aanmaken van jouw karakter!",
      "Volledig aanpasbaar: hoofd, outfit, armen, benen en accessoires",
      "Verdien XP met jouw karakter om beloningen te ontvangen!",
      "Deel je karakter op social media",
    ],
    cta: "Maak jouw karakter",
    ctaArrow: false,
    mockupUrl: "https://character-editor-psi.vercel.app/character-editor",
  },
  miniLesson: {
    id: "free-lesson",
    titleBefore: "Probeer ",
    titleHighlight: "gratis",
    titleAfter: " korte les binnen 1 min",
    description:
      "Speel hieronder een korte proefles van 1 minuut en ontdek of Duolingo iets voor jou is — verdien meteen +50 XP!",
    bullets: [],
    cta: "Speel nu!",
    ctaArrow: true,
    mockupUrl: "https://mini-ad-test1.vercel.app/",
  },
  teamContest: {
    id: "team-contest",
    titleBefore: "Speel voor je ",
    titleHighlight: "team",
    titleAfter: " en verdien XP!",
    description:
      "Word automatisch in een team geplaatst en strijd samen voor XP om het contest te winnen met jouw team.",
    bullets: [],
    cta: "Speel met je team",
    ctaArrow: true,
    mockupUrl: "https://team-contest-thijn.vercel.app/",
  },
} as const satisfies Record<string, FeatureMockup>;

export const SECTION_COLORS = {
  character: "#f7fbf4",
  lesson: "#d7ffb8",
  contest: "#eef9ff",
} as const;
