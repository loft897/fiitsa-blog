"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const perks = [
  "0% commission pendant 3 mois",
  "Accès premium aux fonctionnalités IA",
  "Intégration WhatsApp Business",
  "Automatisations marketing avancées",
  "Support prioritaire et suivi personnalise",
];

export default function BetaProgramSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Card className="border-fiitsa-purple/20 bg-white/90 shadow-lg">
          <CardContent className="grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-fiitsa-dark md:text-3xl">Programme exclusif</h2>
              <p className="text-gray-600">
                Le programme bêta Fiitsa est conçu pour accompagner 100 entrepreneurs africains avec des
                fonctionnalités premium et un support prioritaire.
              </p>
            </div>
            <div className="space-y-3">
              {perks.map((perk) => (
                <div key={perk} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-fiitsa-gold" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
