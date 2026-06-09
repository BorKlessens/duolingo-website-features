import { DuolingoLogo } from "../DuolingoLogo";
import { SectionWaveOverlap } from "../SectionWaveOverlap";

type FooterLink = {
  label: string;
  href: string;
  badge?: "plus" | "nieuw";
};

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  LEREN: [
    { label: "Talen overzicht", href: "#" },
    { label: "Duolingo Plus", href: "#", badge: "plus" },
    { label: "Duolingo for Schools", href: "#" },
    { label: "Duolingo ABC", href: "#" },
    { label: "English Test", href: "#" },
    { label: "Stories", href: "#", badge: "nieuw" },
    { label: "AI gesprekken", href: "#" },
  ],
  BEDRIJF: [
    { label: "Over ons", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Investeerders", href: "#" },
    { label: "Pers & media", href: "#" },
    { label: "Brand assets", href: "#" },
  ],
  SUPPORT: [
    { label: "Helpcentrum", href: "#" },
    { label: "Community forum", href: "#" },
    { label: "Richtlijnen", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Toegankelijkheid", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
};

const BADGE_LABELS: Record<"plus" | "nieuw", string> = {
  plus: "Plus",
  nieuw: "Nieuw",
};

export function FooterSection() {
  return (
    <footer className="site-footer" id="download">
      <SectionWaveOverlap
        position="top"
        variant="download"
        fill="#89e219"
        className="site-footer__wave site-footer__wave--back"
      />
      <SectionWaveOverlap
        position="top"
        variant="footer"
        fill="#58CC02"
        className="site-footer__wave site-footer__wave--front"
      />

      <h2 className="site-footer__headline">Klaar om te beginnen?</h2>

      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <DuolingoLogo variant="light" />
          <p className="site-footer__tagline">
            De gratis, leuke en effectieve manier om een taal te leren.
            Beschikbaar op alle apparaten, altijd en overal.
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title} className="site-footer__column">
            <h3>{title}</h3>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    {link.label}
                    {link.badge && (
                      <span className={`footer-badge footer-badge--${link.badge}`}>
                        {BADGE_LABELS[link.badge]}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
