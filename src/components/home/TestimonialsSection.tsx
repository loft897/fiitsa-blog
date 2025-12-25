"use client";

import { Star, Quote, Users, Globe, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLinkWithUTM } from "@/hooks/useLinkWithUTM";
import { useLanguage } from "@/hooks/useLanguage";

const TestimonialsSection = () => {
  const { createExternalLink } = useLinkWithUTM();
  const { language } = useLanguage();

  const testimonials = [
    {
      name: "Aminata Kone",
      role: language === "fr" ? "Coach en développement personnel" : "Personal development coach",
      location: language === "fr" ? "Abidjan, Cote d'Ivoire" : "Abidjan, Ivory Coast",
      avatar: "AK",
      rating: 5,
      content:
        language === "fr"
          ? "Fiitsa a révolutionné mon business. La commission dégressive m'a fait économiser beaucoup d'argent. L'agent IA répond à mes clients 24h/24, j'ai triplé mes revenus."
          : "Fiitsa revolutionized my business. The decreasing commission saved me thousands. The AI agent replies 24/7 and I tripled my revenue.",
      metrics: language === "fr" ? "+300% de revenus" : "+300% revenue",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Ibrahim Sow",
      role: language === "fr" ? "Formateur et e-commerce" : "Trainer and e-commerce",
      location: language === "fr" ? "Dakar, Sénégal" : "Dakar, Senegal",
      avatar: "IS",
      rating: 5,
      content:
        language === "fr"
          ? "Enfin une plateforme qui comprend l'Afrique. Mobile Money intégré, retraits en 72h, commission à 7% pour mes gros volumes."
          : "Finally a platform that understands Africa. Native Mobile Money, 72h withdrawals, 7% commission for my high volumes.",
      metrics: language === "fr" ? "Économise 8% vs conçurrence" : "Saves 8% vs competition",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Grace Mumbere",
      role: language === "fr" ? "E-commerce et formation" : "E-commerce and training",
      location: language === "fr" ? "Kinshasa, RDC" : "Kinshasa, DRC",
      avatar: "GM",
      rating: 5,
      content:
        language === "fr"
          ? "L'option Premium avec Meta Ads est incroyable"
          : "The Premium option with Meta Ads is incredible.",
      metrics: language === "fr" ? "250+ commandes/mois" : "250+ orders/month",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Karim Ouedraogo",
      role: language === "fr" ? "Tech entrepreneur" : "Tech entrepreneur",
      location: language === "fr" ? "Ouagadougou, Burkina Faso" : "Ouagadougou, Burkina Faso",
      avatar: "KO",
      rating: 5,
      content:
        language === "fr"
          ? "La solution tout-en-un parfaite. Produits physiques, formations, tout est centralisé."
          : "The perfect all-in-one solution. Physical products, training, everything is centralized.",
      metrics: language === "fr" ? "Remplace 10+ outils" : "Replaces 10+ tools",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Fatou Diallo",
      role: language === "fr" ? "Consultante marketing" : "Marketing consultant",
      location: language === "fr" ? "Bamako, Mali" : "Bamako, Mali",
      avatar: "FD",
      rating: 5,
      content:
        language === "fr"
          ? "WhatsApp Business intégré et agent IA, combo gagnant. L'automatisation marketing a transformé mon approche."
          : "Integrated WhatsApp Business with AI agent is a winning combo. Marketing automation transformed my approach.",
      metrics: language === "fr" ? "95% automatisation" : "95% automation",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Christian Nkomo",
      role: language === "fr" ? "Formateur digital" : "Digital trainer",
      location: language === "fr" ? "Douala, Cameroun" : "Douala, Cameroon",
      avatar: "CN",
      rating: 5,
      content:
        language === "fr"
          ? "Les analytiques en temps réel avec IA sont bluffantes."
          : "AI Real-time analytics and AI are impressive.",
      metrics: language === "fr" ? "95% precision" : "95% accuracy",
      color: "from-teal-500 to-green-500",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "50+",
      label: language === "fr" ? "Entrepreneurs actifs" : "Active entrepreneurs",
      description: language === "fr" ? "Génèrent des revenus quotidiens" : "Generate daily revenue",
    },
    {
      icon: Globe,
      value: "13+",
      label: language === "fr" ? "Pays africains" : "African countries",
      description: language === "fr" ? "Utilisent Fiitsa quotidiennement" : "Use Fiitsa daily",
    },
    {
      icon: Award,
      value: "7%",
      label: language === "fr" ? "Commission minimum" : "Minimum commission",
      description: language === "fr" ? "Le plus bas du marché" : "Lowest in market",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-fiitsa-dark py-24">
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-fiitsa-purple/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-fiitsa-gold/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            <Star className="h-4 w-4 text-fiitsa-gold" />
            <span>{language === "fr" ? "Témoignages authentiques" : "Authentic testimonials"}</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {language === "fr" ? "Ils dominent leur marché" : "They dominate their market"}
            <br />
            <span className="bg-gradient-to-r from-fiitsa-gold via-fiitsa-purple-light to-fiitsa-gold bg-clip-text text-transparent">
              {language === "fr" ? "avec Fiitsa" : "with Fiitsa"}
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
            {language === "fr"
              ? "Découvre comment des entrepreneurs utilisent nos outils pour transformer leur business."
              : "See how entrepreneurs use our tools to transform their business."}
          </p>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10"
            >
              <CardContent className="relative space-y-6 p-8">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                />

                <Quote className="h-10 w-10 text-fiitsa-gold opacity-60" />

                <blockquote className="relative z-10 leading-relaxed text-gray-200">"{testimonial.content}"</blockquote>

                <div
                  className={`relative z-10 inline-block rounded-full bg-gradient-to-r ${testimonial.color} px-4 py-2 text-sm font-bold text-white shadow-lg`}
                >
                  {testimonial.metrics}
                </div>

                <div className="relative z-10 flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-fiitsa-gold" />
                  ))}
                </div>

                <div className="relative z-10 flex items-center space-x-4 border-t border-white/10 pt-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-lg font-bold text-white shadow-lg`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                    <p className="text-xs font-medium text-fiitsa-gold">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="group space-y-4 text-center">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-fiitsa-gold to-fiitsa-purple-light transition-transform duration-300 group-hover:scale-110">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white md:text-4xl">{stat.value}</div>
                <div className="font-semibold text-fiitsa-gold">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={createExternalLink("https://app.fiitsa.com/register?utm_source=website")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (window as any).fbq?.("track", "Lead")}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-fiitsa-gold to-fiitsa-purple-light px-8 py-6 text-lg font-semibold text-white shadow-xl hover:from-fiitsa-gold/90 hover:to-fiitsa-purple-light/90"
            >
              {language === "fr" ? "Rejoindre Fiitsa maintenant" : "Join Fiitsa now"}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
