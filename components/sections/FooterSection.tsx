import { DuolingoLogo } from "../DuolingoLogo";

type FooterLink = {
  label: string;
  href: string;
};

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  LEREN: [
    { label: "Talen overzicht", href: "#" },
    { label: "Duolingo Plus", href: "#" },
    { label: "Duolingo for Schools", href: "#" },
  ],
  BEDRIJF: [
    { label: "Over ons", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Carrières", href: "#" },
  ],
  SUPPORT: [
    { label: "Helpcentrum", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Toegankelijkheid", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="section-inner site-footer__grid">
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
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
