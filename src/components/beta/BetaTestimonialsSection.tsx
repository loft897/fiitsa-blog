"use client";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Awa N.",
    role: "Creatrice de marque, Dakar",
    quote: "Fiitsa m'a permis de vendre en ligne sans complexité. Le support est ultra réactif.",
  },
  {
    name: "Junior M.",
    role: "Boutique en ligne, Douala",
    quote: "Le Mobile Money intégré change tout. Je reçois mes paiements rapidement.",
  },
  {
    name: "Mariam S.",
    role: "Coach business, Abidjan",
    quote: "Les automatisations WhatsApp font gagner un temps énorme à mon équipe.",
  },
];

export default function BetaTestimonialsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-fiitsa-dark md:text-3xl">Ils parlent déjà de Fiitsa</h2>
          <p className="mt-2 text-gray-600">Des retours qui confirment l'impact du programme.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="border-fiitsa-purple/10 bg-white/90">
              <CardContent className="space-y-3 p-6">
                <p className="text-sm text-gray-700">"{item.quote}"</p>
                <div className="text-sm font-semibold text-fiitsa-dark">{item.name}</div>
                <div className="text-xs text-gray-500">{item.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
