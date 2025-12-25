"use client";

import { Check, Star, ArrowRight, Zap, TrendingUp, Clock, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLinkWithUTM } from "@/hooks/useLinkWithUTM";
import { useLanguage } from "@/hooks/useLanguage";

const PricingSection = () => {
  const { createExternalLink } = useLinkWithUTM();
  const { language } = useLanguage();

  const mainPlan = {
    name: language === "fr" ? "PLAN UNIQUE - ACCES COMPLET" : "SINGLE PLAN - FULL ACCESS",
    description:
      language === "fr" ? "Toutes les fonctionnalités incluses, commission dégressive" : "All features included, decreasing commission",
    commissions: [
      { range: language === "fr" ? "0 à 19 999 FCFA" : "0 to 19,999 FCFA", rate: "12%", color: "from-blue-500 to-blue-600" },
      {
        range: language === "fr" ? "20 000 à 49 999 FCFA" : "20,000 to 49,999 FCFA",
        rate: "9%",
        color: "from-green-500 to-green-600",
      },
      { range: language === "fr" ? "50 000 FCFA et plus" : "50,000 FCFA and more", rate: "7%", color: "from-purple-500 to-purple-600" },
    ],
    features:
      language === "fr"
        ? [
            "Nombre de boutiques illimité",
            "Produits et services illimités",
            "CRM complet",
            "Formulaires",
            "Agendas intelligents",
            "Generation de documents (facture, devis, contrat) en PDF",
            "Marketing avancé",
            "Coupons de réduction",
            "Gestion intélligente de fichiers",
            "Automatisations marketing",
            "Support client complet sur WhatsApp",
            "Et bien plus",
          ]
        : [
            "Unlimited number of stores",
            "Unlimited products and services",
            "CRM complet",
            "Forms",
            "Smart calendars",
            "Document generation (invoice, quote, contract) in PDF",
            "Advanced marketing",
            "Discount coupons",
            "Smart file management",
            "Marketing automation",
            "Complete customer support on WhatsApp",
            "And much more",
          ],
  };

  const essentialPlan = {
    name: "ESSENTIAL",
    price: "19 900 FCFA/mois",
    priceDetails: "~ 35 USD / ~ 30 EUR",
    trial: language === "fr" ? "Essayer gratuitement pendant 7 jours" : "Try free for 7 days",
    cta: language === "fr" ? "Essayer Essential" : "Try Essential",
    features:
      language === "fr"
        ? [
            { icon: "🤖", title: "Agent IA", description: "Reponses automatiques intélligentes à tes clients" },
            { icon: "📱", title: "Messagerie WhatsApp Business", description: "Gère tes conversations WhatsApp Business" },
            { icon: "📢", title: "Campagnes marketing simplifiées", description: "Campagnes WhatsApp" },
          ]
        : [
            { icon: "🤖", title: "AI Agent", description: "Smart automatic responses to your customers" },
            { icon: "📱", title: "WhatsApp Business messaging", description: "Manage your WhatsApp Business conversations" },
            { icon: "📢", title: "Simplified marketing campaigns", description: "WhatsApp campaigns" },
          ],
  };

  const premiumPlan = {
    name: "PREMIUM",
    price: "49 900 FCFA/mois",
    priceDetails: "~ 88 USD / ~ 73 EUR",
    trial: language === "fr" ? "Essayer gratuitement pendant 7 jours" : "Try free for 7 days",
    cta: language === "fr" ? "Essayer Premium" : "Try Premium",
    features:
      language === "fr"
        ? [
            { icon: "🤖", title: "Agent IA avancé", description: "Réponses automatiques intelligentes à tes clients 24h/24" },
            { icon: "📱", title: "Messagerie Meta unifiée", description: "WhatsApp Business, Facebook, Instagram" },
            { icon: "⚡", title: "Automatisations", description: "Workflows automatisés pour booster tes ventes" },
            { icon: "📢", title: "Campagnes marketing", description: "Meta Ads, WhatsApp Business, Emails et SMS" },
            { icon: "💬", title: "SMS et Emails", description: "100 SMS et 1000 emails gratuits par mois" },
            { icon: "📊", title: "Réseaux sociaux", description: "Création et gestion de contenu sur Facebook et Instagram" },
          ]
        : [
            { icon: "🤖", title: "Advanced AI agent", description: "Smart automatic responses to your customers 24/7" },
            { icon: "📱", title: "Unified Meta messaging", description: "WhatsApp Business, Facebook, Instagram" },
            { icon: "⚡", title: "Automations", description: "Automated workflows to boost sales" },
            { icon: "📢", title: "Marketing campaigns", description: "Meta Ads, WhatsApp Business, Email and SMS" },
            { icon: "💬", title: "SMS and Emails", description: "100 free SMS and 1000 free emails per month" },
            { icon: "📊", title: "Social media", description: "Create and manage content on Facebook and Instagram" },
          ],
  };

  const advantages = [
    {
      icon: TrendingUp,
      title: language === "fr" ? "Taux les plus bas du marché" : "Lowest rates in the market",
      description: language === "fr" ? "Économise jusqu'a 50% vs la conçurrence" : "Save up to 50% vs competition",
    },
    {
      icon: Clock,
      title: language === "fr" ? "Retraits en 72h" : "Withdrawals in 72h",
      description: language === "fr" ? "Le plus rapide d'Afrique" : "Fastest in Africa",
    },
    {
      icon: Shield,
      title: language === "fr" ? "Support réactif en français" : "Responsive support",
      description: language === "fr" ? "Équipe locale qui comprend tes besoins" : "Local team that understands your néeds",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-fiitsa-light via-white to-fiitsa-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-fiitsa-purple/10 px-4 py-2 text-sm font-semibold text-fiitsa-purple">
            <Award className="h-4 w-4" />
            <span>{language === "fr" ? "TARIFICATION REVOLUTIONNAIRE" : "REVOLUTIONARY PRICING"}</span>
          </div>
          <h2 className="text-3xl font-bold text-fiitsa-dark md:text-4xl">
            {language === "fr" ? "Une seule plateforme," : "One platform,"}
            <span className="bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light bg-clip-text text-transparent">
              {language === "fr" ? " commission dégressive" : " decreasing commission"}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {language === "fr"
              ? "Plus tu vends, moins tu paies. Simple, transparent et avantageux."
              : "The more you sell, the less you pay. Simple, transparent and competitive."}
          </p>
        </div>

        <div className="mb-16">
          <Card className="overflow-hidden border-fiitsa-purple bg-gradient-to-br from-white to-fiitsa-light/30 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light pb-8 text-center text-white">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{mainPlan.name}</h3>
                <p className="text-lg opacity-90">{mainPlan.description}</p>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="mb-8">
                <h4 className="mb-6 text-center text-xl font-semibold text-fiitsa-dark">
                  {language === "fr" ? "Commission sur ventes (dégressive)" : "Sales commission (decreasing)"}
                </h4>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {mainPlan.commissions.map((commission, index) => (
                    <div key={index} className={`rounded-xl bg-gradient-to-r ${commission.color} p-6 text-center text-white`}>
                      <div className="mb-2 text-3xl font-bold">{commission.rate}</div>
                      <div className="text-sm opacity-90">{commission.range}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p className="inline-block rounded-lg border border-fiitsa-purple/20 bg-fiitsa-purple/10 px-4 py-2 text-sm font-medium text-fiitsa-purple">
                    {language === "fr"
                      ? "Commission spéciale de 7% pour les produits physiques, quel que soit le montant"
                      : "Special 7% commission for physical products, regardless of order amount"}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="mb-4 text-xl font-semibold text-fiitsa-dark">
                  {language === "fr"
                    ? "Inclus gratuitement pour faciliter la gestion et la croissance"
                    : "Included free to facilitate management and growth"}
                </h4>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {mainPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 flex-shrink-0 text-fiitsa-gold" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <a href={createExternalLink("https://app.fiitsa.com?utm_source=website")} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light px-8 py-4 text-lg text-white shadow-xl transition-all hover:shadow-2xl"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    {language === "fr" ? "Démarrer gratuitement" : "Start for free"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden border-fiitsa-purple/50 bg-gradient-to-br from-white to-fiitsa-light/30 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-fiitsa-purple/80 to-fiitsa-purple-light pb-6 text-center text-white">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">
                  <Zap className="h-4 w-4" />
                  <span>{essentialPlan.name}</span>
                </div>
                <div className="text-3xl font-bold">{essentialPlan.price}</div>
                <div className="text-sm opacity-80">{essentialPlan.priceDetails}</div>
                <p className="text-sm opacity-90">{essentialPlan.trial}</p>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="mb-6 space-y-4">
                {essentialPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl font-semibold text-fiitsa-gold">{feature.icon}</span>
                    <div>
                      <div className="font-semibold text-fiitsa-dark">{feature.title}</div>
                      <div className="text-sm text-gray-600">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a href={createExternalLink("https://app.fiitsa.com?utm_source=website")} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light text-white shadow-xl transition-all hover:shadow-2xl"
                  >
                    {essentialPlan.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-fiitsa-gold bg-gradient-to-br from-fiitsa-dark to-fiitsa-dark/90 text-white shadow-xl">
            <CardHeader className="bg-gradient-to-r from-fiitsa-gold to-fiitsa-purple-light pb-6 text-center">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">
                  <Star className="h-4 w-4" />
                  <span className="text-fiitsa-dark">{premiumPlan.name}</span>
                </div>
                <div className="text-3xl font-bold text-fiitsa-dark">{premiumPlan.price}</div>
                <div className="text-sm text-fiitsa-dark/80">{premiumPlan.priceDetails}</div>
                <p className="text-sm text-fiitsa-dark/90">{premiumPlan.trial}</p>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="mb-6 space-y-4">
                {premiumPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-xl font-semibold text-fiitsa-gold">{feature.icon}</span>
                    <div>
                      <div className="font-semibold text-white">{feature.title}</div>
                      <div className="text-sm text-gray-300">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a href={createExternalLink("https://app.fiitsa.com?Utm_source=website")} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-fiitsa-gold to-fiitsa-gold/80 font-semibold text-fiitsa-dark shadow-xl transition-all hover:shadow-2xl"
                  >
                    {premiumPlan.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-0 bg-white/80 text-center backdrop-blur-sm transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light text-white">
                  <advantage.icon className="h-8 w-8" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-fiitsa-dark">{advantage.title}</h4>
                <p className="text-sm text-gray-600">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-sm text-gray-600">
            {language === "fr"
              ? "Cette structure tarifaire positionne Fiitsa comme une solution accessible et complète pour les créateurs africains."
              : "This pricing structure positions Fiitsa as an accessible and complète solution for African creators."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
