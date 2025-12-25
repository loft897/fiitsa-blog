"use client";

import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLinkWithUTM } from "@/hooks/useLinkWithUTM";
import { useLanguage } from "@/hooks/useLanguage";

const CTASection = () => {
  const { createExternalLink } = useLinkWithUTM();
  const { language } = useLanguage();

  const advantages = [
    {
      icon: Globe,
      title: language === "fr" ? "100% adapté à l'Afrique" : "100% adapted to Africa",
      description: language === "fr" ? "Mobile Money, dévises locales, support français" : "Mobile Money, local currencies, French support",
    },
    {
      icon: Zap,
      title: language === "fr" ? "IA intégrée" : "Integrated AI",
      description: language === "fr" ? "Automatisation intélligente et prédictions" : "Smart automation and predictions",
    },
    {
      icon: Shield,
      title: language === "fr" ? "Sécurité enterprise" : "Enterprise security",
      description: language === "fr" ? "Cryptage avancé et conformite RGPD" : "Advanced encryption and GDPR compliance",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-fiitsa-purple via-fiitsa-purple-light to-fiitsa-gold py-24">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-full opacity-5" />
        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {language === "fr" ? "Prêt à révolutionner" : "Ready to revolutionize"}
              <br />
              <span className="bg-gradient-to-r from-white to-fiitsa-gold bg-clip-text text-transparent">
                {language === "fr" ? "ton empire digital ?" : "your digital empire?"}
              </span>
            </h2>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-white/90 md:text-2xl">
              {language === "fr"
                ? "Rejoins plus de 250 entrepreneurs africains qui ont déjà choisi Fiitsa."
                : "Join over 250 African entrepreneurs who already chose Fiitsa."}
              <br />
              <span className="font-semibold">
                {language === "fr" ? "10 outils puissants, 1 plateforme, resultats garantis." : "10 powerful tools, 1 platform, guaranteed results."}
              </span>
            </p>
          </div>

          <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 transition-transform group-hover:scale-110">
                    <advantage.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white">{advantage.title}</h3>
                    <p className="text-sm text-white/80">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-6 pt-8 sm:flex-row">
            <a href={createExternalLink("https://app.fiitsa.com/register")} target="_blank" rel="noopener noreferrer" className="group">
              <Button
                size="lg"
                className="h-auto w-full rounded-2xl bg-white px-10 py-6 text-lg font-bold text-fiitsa-purple shadow-2xl transition-all duration-500 hover:bg-gray-100 hover:shadow-3xl group-hover:scale-105 sm:w-auto"
              >
                <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                {language === "fr" ? "Créer mon empire gratuitement" : "Create my empire free"}
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href={createExternalLink("https://app.fiitsa.com/login")} target="_blank" rel="noopener noreferrer" className="group">
              <Button
                variant="outline"
                size="lg"
                className="h-auto w-full rounded-2xl border-2 border-white/30 bg-transparent px-10 py-6 text-lg text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:w-auto"
              >
                {language === "fr" ? "J'ai déjà un compte" : "I already have an account"}
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 border-t border-white/20 pt-12 text-sm text-white/90">
            <span className="group flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-fiitsa-gold group-hover:animate-pulse" />
              <span>{language === "fr" ? "Produit en ligne en moins de 3 minutes" : "Your product online in less than 3 minutes"}</span>
            </span>
            <span className="group flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-fiitsa-gold group-hover:animate-pulse" />
              <span>{language === "fr" ? "Support 7j/7 inclus" : "24/7 support included"}</span>
            </span>
            <span className="group flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-fiitsa-gold group-hover:animate-pulse" />
              <span>{language === "fr" ? "Sans engagement" : "No commitment"}</span>
            </span>
            <span className="group flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-fiitsa-gold group-hover:animate-pulse" />
              <span>{language === "fr" ? "Démarrage rapide" : "Quick start"}</span>
            </span>
          </div>

          <div className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
            <p className="text-lg text-white/90">
              <span className="font-semibold">
                {language === "fr" ? "Plusieurs nouveaux utilisateurs nous rejoignent chaque semaine." : "Several new users join us every week."}
              </span>
              <br />
              {language === "fr"
                ? "Ne reste pas à la traine, transforme ton business dès aujourd'hui."
                : "Do not get left behind, transform your business today."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
