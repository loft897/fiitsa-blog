"use client";

import MarketingLayout from "@/components/marketing/MarketingLayout";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import StickyMobileCTA from "@/components/marketing/StickyMobileCTA";
import { SEOHead } from "@/components/seo/SEOHead";

export default function HomeClient() {
  return (
    <MarketingLayout>
      <SEOHead
        title="Fiitsa - Ta boutique. Tes rЁgles. Tes gains."
        description="Plateforme de vente en ligne adaptゼe au marchゼ africain. Vends tes produits physiques et digitaux, et services avec seulement 7% de commission. Mobile Money intゼgrゼ dans 13 pays."
        canonical="https://fiitsa.com"
        ogImage="https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png"
        keywords="boutique en ligne, vente en ligne, Afrique, Mobile Money, e-commerce, produits physiques, produits digitaux"
      />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <StickyMobileCTA />
    </MarketingLayout>
  );
}
