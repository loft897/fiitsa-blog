"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, ShieldCheck, Sparkles } from "lucide-react";

const advantages = [
  {
    icon: Rocket,
    title: "Croissance acceleree",
    description: "Des outils IA pour vendre plus vite et mieux convertir vos visiteurs.",
  },
  {
    icon: ShieldCheck,
    title: "Support prioritaire",
    description: "Une équipe dédiée pour vous accompagner dans vos premiers mois.",
  },
  {
    icon: Sparkles,
    title: "Fonctionnalités exclusives",
    description: "Accès en avant-première aux intégrations et automatisations Fiitsa.",
  },
];

export default function BetaAdvantagesSection() {
  return (
    <section className="bg-gradient-to-br from-fiitsa-light to-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-fiitsa-dark md:text-3xl">Pourquoi rejoindre la bêta</h2>
          <p className="mt-2 text-gray-600">Des avantages concrets pour accelerer votre business.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {advantages.map((advantage) => (
            <Card key={advantage.title} className="border-fiitsa-purple/20 bg-white/90">
              <CardHeader>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-fiitsa-purple/10">
                  <advantage.icon className="h-5 w-5 text-fiitsa-purple" />
                </div>
                <CardTitle className="text-lg">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
