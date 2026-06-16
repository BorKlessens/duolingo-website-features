"use client";

import { useScrollReveal } from "../useScrollReveal";

export function DownloadCTASection() {
  const reveal = useScrollReveal();

  return (
    <section className="download-cta section" id="download">
      <div className="download-cta__wave" aria-hidden="true" />
      <div ref={reveal.ref} className={`section-inner download-cta__inner ${reveal.className}`}>
        <h2 className="download-cta__title">Klaar om te beginnen?</h2>
        <p className="download-cta__subtitle">
          Download Duolingo en start vandaag nog!
        </p>
        <div className="store-buttons">
          <a href="#" className="store-btn">
            Google Play
          </a>
          <a href="#" className="store-btn">
            App Store
          </a>
        </div>
      </div>
    </section>
  );
}
