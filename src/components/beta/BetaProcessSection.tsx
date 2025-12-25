"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "1. Postule",
    desc: "Remplis le formulaire pour rejoindre la liste des candidats.",
  },
  {
    title: "2. Evaluation",
    desc: "Notre équipe étudie ton profil et ta catégorie business.",
  },
  {
    title: "3. Activation",
    desc: "Si tu es retenu, tu actives ton compte premium en 48h.",
  },
];

export default function BetaProcessSection() {
  return (
    <section id="beta-process" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-fiitsa-dark md:text-3xl">Comment ca marche</h2>
          <p className="mt-2 text-gray-600">Un processus simple pour intégrer le programme.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className="border-fiitsa-purple/20 bg-white/90">
              <CardContent className="space-y-3 p-6">
                <CheckCircle2 className="h-5 w-5 text-fiitsa-gold" />
                <div className="text-lg font-semibold text-fiitsa-dark">{step.title}</div>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
