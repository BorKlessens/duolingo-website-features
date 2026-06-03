/** Smooth rounded waves (no sharp points) — horizontal tangents at each join */

export type WaveVariant =
  | "hero"
  | "character"
  | "lesson"
  | "testimonials"
  | "download"
  | "footer";

export const WAVE_PATHS: Record<WaveVariant, string> = {
  hero:
    "M0,44 C200,44 200,30 400,30 C600,30 600,50 800,50 C1000,50 1000,34 1200,34 C1400,34 1400,46 1440,46 L1440,80 L0,80 Z",
  character:
    "M0,38 C160,38 160,52 320,52 C480,52 480,36 640,36 C800,36 800,50 960,50 C1120,50 1120,38 1280,38 C1400,38 1400,44 1440,44 L1440,80 L0,80 Z",
  lesson:
    "M0,50 C220,50 220,36 440,36 C660,36 660,52 880,52 C1100,52 1100,38 1320,38 C1400,38 1400,48 1440,48 L1440,80 L0,80 Z",
  testimonials:
    "M0,36 C190,36 190,50 380,50 C570,50 570,34 760,34 C950,34 950,48 1140,48 C1330,48 1330,36 1440,42 L1440,80 L0,80 Z",
  download:
    "M0,46 C210,46 210,32 420,32 C630,32 630,48 840,48 C1050,48 1050,34 1260,34 C1380,34 1380,44 1440,44 L1440,80 L0,80 Z",
  footer:
    "M0,52 C320,52 320,24 640,24 C960,24 1120,42 1280,38 C1360,36 1400,48 1440,46 L1440,80 L0,80 Z",
};

export function getWavePath(variant: WaveVariant): string {
  return WAVE_PATHS[variant];
}
