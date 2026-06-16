# Duolingo Website Features

A single-page marketing site that showcases new Duolingo app features — character editor, mini lesson, and team contest. It follows Duolingo’s playful visual style (Nunito font, brand greens, rounded UI) and links out to interactive demos hosted separately on Vercel.

The copy is in Dutch. Each feature section has a CTA that opens a live mockup in a new tab.

## Live demo

This project is **hosted on Vercel**.

**Production URL:** [INSERT VERCEL LINK]

> Replace the placeholder above with your deployed Vercel URL once the project is live.

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Custom CSS** — section styling lives in `app/globals.css`, `app/showcase.css`, and `app/sections.css` (Tailwind is installed but not used for the page layout)
- **Nunito** via `next/font/google`

## Run locally

**Requirements:** Node.js 18+ and npm

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
npm run build   # production build
npm run start   # run production build locally
npm run lint    # ESLint
```

## Page structure

The homepage is built as stacked sections in `components/HomePage.tsx`:

1. **Hero** — full-width hero image with headline and download CTA
2. **Character builder** — feature intro + link to character editor mockup
3. **Free lesson** — text + auto-rotating phone carousel
4. **Team contest** — overlapping phone mockups with Junior & Eddy characters
5. **Download CTA** — app store buttons
6. **Footer** — logo, tagline, and link columns

## Folder structure

```
app/
  layout.tsx          # Root layout, fonts, global CSS imports
  page.tsx            # Renders HomePage
  globals.css         # Design tokens, buttons, wave utilities
  showcase.css        # Main section layout and component styles
  sections.css        # Shared section utilities (e.g. logo)

components/
  HomePage.tsx        # Composes all sections
  FeatureSection.tsx  # Reusable two-column feature layout
  SectionWaveOverlap.tsx  # SVG wave transitions between sections
  featureLinks.ts     # Copy, colors, and mockup URLs (single source of truth)
  sections/           # One file per homepage section
  LessonPhonesCarousel.tsx  # Auto-cycling phone screens in free lesson

public/images/
  features/           # Feature mockup images (phones, characters)
  screens/            # Lesson flow phone screenshots
  …                   # Hero and other static assets
```

## External feature mockups

CTA links are defined in `components/featureLinks.ts`:

| Feature           | Mockup URL |
|-------------------|------------|
| Character editor  | `https://character-editor-psi.vercel.app/character-editor` |
| Mini lesson       | `https://mini-ad-test1.vercel.app/` |
| Team contest      | `https://team-contest-thijn.vercel.app/` |

Update copy, section colors, and URLs there — not inside individual section files.

## Things to know when continuing

- **Styling approach:** Layout and visuals are hand-written CSS, not Tailwind utility classes. Match existing patterns in `showcase.css` when adding or changing sections.
- **Wave transitions:** Sections use `SectionWaveOverlap` with paths from `wavePaths.ts`. Wave height and overlap are controlled by CSS variables (`--wave-overlap`, `--wave-pull`) in `globals.css`.
- **Images:** Character PNGs (e.g. team contest) may need background removal if exported on black — Junior was transparent from source; Eddy required extra processing.
- **No testimonials section:** The reviews carousel was removed; the page goes from team contest straight to the download CTA.
- **No footer wave:** The transition wave into the footer was removed — download CTA and footer meet with a flat color change.
- **Next.js version:** This repo uses Next.js 16, which may differ from older docs. Check `node_modules/next/dist/docs/` if something behaves unexpectedly.

## Deploy on Vercel

Push to your connected Git repo or import the project in the [Vercel dashboard](https://vercel.com). Vercel detects Next.js automatically — no extra config needed for a standard deploy.

After deploying, drop the production URL into the [Live demo](#live-demo) section above.
