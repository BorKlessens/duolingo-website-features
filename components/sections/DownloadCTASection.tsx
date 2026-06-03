"use client";

import { AssetSlot } from "../AssetSlot";
import { useScrollReveal } from "../useScrollReveal";

export function DownloadCTASection() {
  const reveal = useScrollReveal();

  return (
    <section className="download-cta" id="download">
      <div ref={reveal.ref} className={reveal.className}>
        <h2 className="download-cta__title">Klaar om te beginnen?</h2>
        <p className="download-cta__subtitle">
          Download Duolingo en start vandaag nog!
        </p>
        <div className="store-buttons">
          <a href="#" className="store-btn">
            <AssetSlot name="google-play-icon" className="store-btn__icon" />
            Google Play
          </a>
          <a href="#" className="store-btn">
            <AssetSlot name="app-store-icon" className="store-btn__icon" />
            App Store
          </a>
        </div>
      </div>
      <AssetSlot name="download-cta-sprout" className="download-cta__sprout" />
      <AssetSlot name="download-cta-cloud" className="download-cta__cloud" />
    </section>
  );
}
