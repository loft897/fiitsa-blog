"use client";

import { useEffect } from "react";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import BetaHeroSection from "@/components/beta/BetaHeroSection";
import BetaProgramSection from "@/components/beta/BetaProgramSection";
import BetaAdvantagesSection from "@/components/beta/BetaAdvantagesSection";
import BetaTestimonialsSection from "@/components/beta/BetaTestimonialsSection";
import BetaProcessSection from "@/components/beta/BetaProcessSection";
import BetaUrgencySection from "@/components/beta/BetaUrgencySection";
import BetaFloatingCTA from "@/components/beta/BetaFloatingCTA";

export default function BetaTestingPage() {
  useEffect(() => {
    document.title =
      "Programme Beta-Testeurs Fiitsa - Rejoins l'Élite des Entrepreneurs Africains";

    const descriptionContent =
      "Rejoins les 100 bêta-testeurs exclusifs de Fiitsa ! 0% commission pendant 3 mois, accès premium aux fonctionnalités IA, WhatsApp Business et automatisations.";

    const updateMeta = (name: string, content: string) => {
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (existing) {
        existing.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateMeta("description", descriptionContent);
    updateMeta(
      "keywords",
      "fiitsa, bêta-testeurs, entrepreneurs africains, vente en ligne, e-commerce Afrique, mobile money, whatsapp business, automatisation"
    );

    const updateOG = (property: string, content: string) => {
      const existing = document.querySelector(`meta[property="${property}"]`);
      if (existing) {
        existing.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    updateOG("og:title", "Programme Beta-Testeurs Fiitsa - Rejoins l'Élite des Entrepreneurs Africains");
    updateOG("og:description", "Programme exclusif : 0% commission pendant 3 mois, accès premium aux fonctionnalités IA et WhatsApp Business.");
    updateOG("og:type", "website");
    updateOG("og:url", "https://fiitsa.com/beta-testing-program");
    updateOG("og:image", "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png");

    const updateTwitter = (name: string, content: string) => {
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (existing) {
        existing.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("name", name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    updateTwitter("twitter:card", "summary_large_image");
    updateTwitter("twitter:title", "Programme Beta-Testeurs Fiitsa - 100 Places Exclusives");
    updateTwitter(
      "twitter:description",
      "Rejoins l'élite des entrepreneurs africains avec 0% commission pendant 3 mois !"
    );
    updateTwitter("twitter:image", "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png");

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Programme Beta-Testeurs Fiitsa",
      description:
        "Programme exclusif de bêta-testing pour entrepreneurs africains avec 0% commission pendant 3 mois",
      url: "https://fiitsa.com/beta-testing-program",
      mainEntity: {
        "@type": "Organization",
        name: "Fiitsa",
        description: "Plateforme e-commerce tout-en-un pour l'Afrique",
        url: "https://fiitsa.com",
        logo: "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png",
      },
      offers: {
        "@type": "Offer",
        name: "Programme Beta-Testeurs",
        description: "Accès gratuit avec 0% commission pendant 3 mois",
        availability: "https://schema.org/LimitedAvailability",
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          value: "100",
        },
      },
    };

    let jsonLd = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
    if (jsonLd) {
      jsonLd.textContent = JSON.stringify(structuredData);
    } else {
      jsonLd = document.createElement("script") as HTMLScriptElement;
      jsonLd.type = "application/ld+json";
      jsonLd.textContent = JSON.stringify(structuredData);
      document.head.appendChild(jsonLd);
    }
  }, []);

  return (
    <MarketingLayout>
      <div className="relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-fiitsa-purple/5 via-transparent to-fiitsa-gold/5"></div>
          <div className="stars"></div>
          <div className="floating-particles"></div>
        </div>

        <div className="relative z-10">
          <BetaHeroSection />
          <BetaProgramSection />
          <BetaAdvantagesSection />
          <BetaTestimonialsSection />
          <BetaProcessSection />
          <BetaUrgencySection />
        </div>

        <BetaFloatingCTA />
      </div>
    </MarketingLayout>
  );
}
