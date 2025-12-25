"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BetaHeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-fiitsa-purple/10 via-transparent to-fiitsa-gold/10" />
      <div className="container mx-auto relative z-10 px-4 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-fiitsa-purple/20 bg-white/70 px-4 py-2 text-sm text-fiitsa-dark shadow-sm">
            <Sparkles className="h-4 w-4 text-fiitsa-purple" />
            Programme bêta-testeurs Fiitsa
          </div>
          <h1 className="text-3xl font-bold text-fiitsa-dark md:text-5xl">
            Rejoins l'élite des entrepreneurs africains
          </h1>
          <p className="text-base text-gray-600 md:text-lg">
            0% commission pendant 3 mois, accès premium aux fonctionnalités IA et WhatsApp Business, et un
            accompagnement prioritaire.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="https://app.fiitsa.com/register" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light text-white">
                Postuler maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#beta-process" className="text-sm font-medium text-fiitsa-purple">
              Decouvrir le programme
            </a>
          </div>
          <p className="text-xs text-gray-500">Seulement 100 places disponibles.</p>
        </div>
      </div>
    </section>
  );
}
