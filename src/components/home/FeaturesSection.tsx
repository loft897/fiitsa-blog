"use client";

import {
  ShoppingBag,
  CreditCard,
  MessageSquare,
  Smartphone,
  BarChart3,
  Bot,
  ArrowRight,
  Check,
  Zap,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLinkWithUTM } from "@/hooks/useLinkWithUTM";
import { useLanguage } from "@/hooks/useLanguage";

const FeaturesSection = () => {
  const { createExternalLink } = useLinkWithUTM();
  const { language } = useLanguage();

  const features = [
    {
      icon: ShoppingBag,
      title: language === "fr" ? "Gestion produits et services" : "Products and services management",
      description:
        language === "fr"
          ? "8 types de contenus pour vendre tout ce que tu veux"
          : "8 content types to sell anything you want",
      benefits:
        language === "fr"
          ? ["Produits digitaux et physiques", "Services et réservations", "Cours en ligne et événements"]
          : ["Digital and physical products", "Services and bookings", "Online courses and events"],
      color: "from-purple-500 to-purple-600",
      flameColor: "purple",
      cloudColor: "purple-700",
    },
    {
      icon: CreditCard,
      title: language === "fr" ? "Vente et paiement" : "Sales and payment",
      description:
        language === "fr"
          ? "Panier intelligent avec tous les moyens de paiement africains"
          : "Smart cart with all African payment methods",
      benefits:
        language === "fr"
          ? ["Mobile Money natif", "Récuperation paniers abandonnés", "Codes promo intelligents"]
          : ["Native Mobile Money", "Abandoned cart recovery", "Smart promo codes"],
      color: "from-green-500 to-green-600",
      flameColor: "green",
      cloudColor: "green-700",
    },
    {
      icon: BarChart3,
      title: language === "fr" ? "Analytique et suivi" : "Analytics and tracking",
      description:
        language === "fr"
          ? "Dashboard complet avec toutes tes métriques en temps réel"
          : "Complete dashboard with all your real-time metrics",
      benefits:
        language === "fr"
          ? ["Statistiques detaillées", "Rapports exportables", "Prédictions IA"]
          : ["Detailed statistics", "Exportable reports", "AI predictions"],
      color: "from-blue-500 to-blue-600",
      flameColor: "blue",
      cloudColor: "blue-700",
    },
    {
      icon: Bot,
      title: language === "fr" ? "Marketing et automatisation" : "Marketing and automation",
      description:
        language === "fr"
          ? "Automatisation complète de tes campagnes marketing"
          : "Complete automation of your marketing campaigns",
      benefits:
        language === "fr"
          ? ["Workflows visuels", "Systeme d'affiliation", "A/B testing automatique"]
          : ["Visual workflows", "Affiliate system", "Automatic A/B testing"],
      color: "from-indigo-500 to-indigo-600",
      flameColor: "indigo",
      cloudColor: "indigo-700",
    },
    {
      icon: MessageSquare,
      title: language === "fr" ? "Communication client" : "Customer communication",
      description:
        language === "fr"
          ? "WhatsApp Business et support omnicanal avec IA"
          : "WhatsApp Business API and omnichannel support with AI",
      benefits:
        language === "fr"
          ? ["Chat intégré", "WhatsApp Business", "Agent IA personnalisé"]
          : ["Integrated chat", "WhatsApp Business", "Personalized AI agent"],
      color: "from-cyan-500 to-cyan-600",
      flameColor: "cyan",
      cloudColor: "cyan-700",
    },
    {
      icon: Smartphone,
      title: language === "fr" ? "Fonctionnalités avancées" : "Advanced features",
      description:
        language === "fr"
          ? "Multi-boutiqueset app mobile PWA"
          : "Multi-stores and PWA mobile app",
      benefits:
        language === "fr"
          ? ["Gestion multi-boutiques", "App mobile PWA"]
          : ["Multi-store management", "PWA mobile app"],
      color: "from-pink-500 to-pink-600",
      flameColor: "pink",
      cloudColor: "pink-700",
    },
  ];

  const getFlameColorClasses = (flameColor: string) => {
    const colorMap = {
      purple: "from-purple-400/20 via-purple-500/30 to-purple-600/20",
      green: "from-green-400/20 via-green-500/30 to-green-600/20",
      blue: "from-blue-400/20 via-blue-500/30 to-blue-600/20",
      indigo: "from-indigo-400/20 via-indigo-500/30 to-indigo-600/20",
      cyan: "from-cyan-400/20 via-cyan-500/30 to-cyan-600/20",
      pink: "from-pink-400/20 via-pink-500/30 to-pink-600/20",
    };
    return colorMap[flameColor as keyof typeof colorMap] || colorMap.purple;
  };

  const getCloudColorClasses = (cloudColor: string) => {
    const colorMap = {
      "purple-700": "bg-purple-700/20",
      "green-700": "bg-green-700/20",
      "blue-700": "bg-blue-700/20",
      "indigo-700": "bg-indigo-700/20",
      "cyan-700": "bg-cyan-700/20",
      "pink-700": "bg-pink-700/20",
    };
    return colorMap[cloudColor as keyof typeof colorMap] || colorMap["purple-700"];
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full bg-fiitsa-purple/10 px-4 py-2 text-sm font-semibold text-fiitsa-purple">
            <Sparkles className="h-4 w-4" />
            <span>{language === "fr" ? "6 CATEGORIES PUISSANTES" : "6 POWERFUL CATEGORIES"}</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight text-fiitsa-dark md:text-5xl lg:text-6xl">
            {language === "fr" ? "Tout ce dont tu as besoin" : "Everything you néed"}
            <br />
            <span className="bg-gradient-to-r from-fiitsa-purple via-fiitsa-purple-light to-fiitsa-gold bg-clip-text text-transparent">
              {language === "fr" ? "dans une seule plateforme" : "in one platform"}
            </span>
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            {language === "fr"
              ? "Remplace plus de 10 outils separés avec notre solution tout-en-un conçue pour les entrepreneurs africains."
              : "Replace 10+ separate tools with our all-in-one solution designed for African entrepreneurs."}
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-white hover:shadow-2xl"
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute ${getCloudColorClasses(feature.cloudColor)} cloud-float rounded-full opacity-30`}
                      style={{
                        width: `${60 + i * 20}px`,
                        height: `${30 + i * 10}px`,
                        left: `${10 + i * 20}%`,
                        top: `${20 + i * 15}%`,
                        animationDelay: `${i * 1.5}s`,
                        animationDuration: `${8 + i * 2}s`,
                      }}
                    />
                  ))}
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${getFlameColorClasses(feature.flameColor)} animate-pulse opacity-20`}
                />

                <div className="absolute bottom-0 left-0 h-full w-full">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`flame-dance absolute bottom-0 h-8 w-2 rounded-full ${getFlameColorClasses(
                        feature.flameColor
                      )} opacity-40`}
                      style={{
                        left: `${15 + i * 12}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${2 + i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`float-particles absolute h-1 w-1 rounded-full ${getFlameColorClasses(
                        feature.flameColor
                      )} opacity-60`}
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + i * 8}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <CardContent className="relative z-10 space-y-6 p-8">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />

                <div
                  className={`relative z-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg transition-all duration-500 group-hover:scale-110`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-bold leading-tight text-fiitsa-dark">{feature.title}</h3>
                  <p className="leading-relaxed text-gray-600">{feature.description}</p>
                </div>

                <ul className="relative z-10 space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="group/item flex items-start space-x-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 text-fiitsa-gold transition-transform group-hover/item:scale-110" />
                      <span className="text-gray-600 transition-colors group-hover/item:text-gray-800">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 pt-4">
                  <a
                    href={createExternalLink("https://app.fiitsa.com/register?utm_source=website&utm_medium=features_section")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => (window as any).fbq?.("track", "Lead")}
                  >
                    <Button
                      size="sm"
                      className="group/btn w-full bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light text-white transition-all duration-300 hover:from-fiitsa-purple/90 hover:to-fiitsa-purple-light/90"
                    >
                      <span className="text-sm">
                        {language === "fr" ? "Créer ma boutique gratuitement" : "Create my free store"}
                      </span>
                      <Zap className="ml-2 h-3 w-3" />
                    </Button>
                  </a>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-fiitsa-purple to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-fiitsa-purple/5 to-fiitsa-gold/5 p-6 text-center sm:p-8 lg:p-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-fiitsa-dark sm:text-2xl md:text-3xl">
              {language === "fr"
                ? "Prêt à découvrir toutes nos fonctionnalités ?"
                : "Ready to discover all our features?"}
            </h3>
            <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
              {language === "fr"
                ? "Explore en détail chaque catégorie et découvre comment Fiitsa peut transformer ton business."
                : "Explore each category in detail and discover how Fiitsa can transform your business."}
            </p>
            <div className="flex justify-center">
              <a
                href={createExternalLink("https://app.fiitsa.com/register?utm_source=website&utm_medium=features_section_cta")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => (window as any).fbq?.("track", "Lead")}
              >
                <Button
                  size="lg"
                  className="w-full max-w-full bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light px-6 py-3 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:from-fiitsa-purple/90 hover:to-fiitsa-purple-light/90 hover:shadow-2xl sm:w-auto sm:min-w-[20rem] sm:px-8 sm:py-4 sm:text-lg"
                >
                  <span className="truncate">
                    {language === "fr" ? "Créer ma boutique gratuitement" : "Create my free store"}
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1 sm:ml-3 sm:h-5 sm:w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .flame-dance {
          animation: flame-dance ease-in-out infinite alternate;
        }

        .float-particles {
          animation: float-particles ease-in-out infinite;
        }

        .cloud-float {
          animation: cloud-float ease-in-out infinite;
        }

        @keyframes flame-dance {
          0% {
            transform: scaleY(1) translateY(0px) rotate(-2deg);
            opacity: 0.4;
          }
          25% {
            transform: scaleY(1.2) translateY(-2px) rotate(2deg);
            opacity: 0.6;
          }
          50% {
            transform: scaleY(0.8) translateY(-1px) rotate(-1deg);
            opacity: 0.5;
          }
          75% {
            transform: scaleY(1.1) translateY(-3px) rotate(1deg);
            opacity: 0.7;
          }
          100% {
            transform: scaleY(0.9) translateY(-2px) rotate(-2deg);
            opacity: 0.4;
          }
        }

        @keyframes float-particles {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          33% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.8;
          }
          66% {
            transform: translateY(-5px) translateX(-3px);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-15px) translateX(2px);
            opacity: 0.2;
          }
        }

        @keyframes cloud-float {
          0% {
            transform: translateX(-10px) translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateX(10px) translateY(-5px);
            opacity: 0.5;
          }
          100% {
            transform: translateX(-10px) translateY(0px);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
