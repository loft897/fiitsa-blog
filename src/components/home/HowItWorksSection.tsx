"use client";

import { UserPlus, PlusCircle, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLinkWithUTM } from "@/hooks/useLinkWithUTM";
import { useLanguage } from "@/hooks/useLanguage";

export default function HowItWorksSection() {
  const { createExternalLink } = useLinkWithUTM();
  const { language } = useLanguage();

  const steps = [
    {
      icon: UserPlus,
      title: language === "fr" ? "Inscris-toi gratuitement" : "Sign up for free",
      desc:
        language === "fr"
          ? "3 minutes — avec ton email ou compte Google"
          : "3 minutes — with your email or Google account",
    },
    {
      icon: PlusCircle,
      title: language === "fr" ? "Ajoute ton produit/service" : "Add your product/service",
      desc:
        language === "fr"
          ? "2 minutes — physique, digital ou service"
          : "2 minutes — physical, digital or service",
    },
    {
      icon: Wallet,
      title: language === "fr" ? "Commence à encaisser" : "Start collecting payments",
      desc: language === "fr" ? "Mobile Money / Carte bancaire" : "Mobile Money / Bank card",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-fiitsa-dark md:text-5xl">
            {language === "fr" ? "Vends en ligne en 3 étapes simples" : "Sell online in 3 simple steps"}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {language === "fr"
              ? "Peu importe ton produit ou service — lance-toi aujourd'hui"
              : "No matter your product or service — start today"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Card key={i} className="border-0 bg-white/80 shadow-md backdrop-blur-sm">
              <CardContent className="space-y-4 p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-fiitsa-purple to-fiitsa-purple-light shadow">
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-fiitsa-dark">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={createExternalLink("https://app.fiitsa.com/register")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).fbq?.("track", "Lead")}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light px-8 py-6 text-lg font-semibold text-white shadow-xl hover:from-fiitsa-purple/90 hover:to-fiitsa-purple-light/90"
            >
              {language === "fr" ? "JE LANCE MA BOUTIQUE" : "I RUN MY STORE"}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
