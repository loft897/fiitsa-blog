"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users } from "lucide-react";

export default function BetaUrgencySection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Card className="border-fiitsa-gold/30 bg-gradient-to-r from-fiitsa-gold/10 to-fiitsa-purple/10">
          <CardContent className="grid gap-6 p-6 md:grid-cols-2 md:p-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-fiitsa-dark">
                <Clock className="h-4 w-4 text-fiitsa-gold" />
                Programme limité
              </div>
              <h3 className="text-2xl font-bold text-fiitsa-dark">Plus que quelques places</h3>
              <p className="text-sm text-gray-600">
                Le programme bêta est limité ? 100 entrepreneurs. Postule maintenant pour ne pas passer ? côté.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 text-sm text-gray-700">
              <Users className="h-10 w-10 text-fiitsa-purple" />
              <div>
                <div className="text-lg font-semibold text-fiitsa-dark">100 places</div>
                <div>Selection sur dossier et activations chaque semaine.</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
