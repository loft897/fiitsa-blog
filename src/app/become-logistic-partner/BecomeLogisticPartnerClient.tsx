"use client";

import { useEffect, useState } from "react";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { Truck, Ship, CheckCircle } from "lucide-react";
import FreightPartnerForm from "@/components/logistics/FreightPartnerForm";
import LocalLogisticsForm from "@/components/logistics/LocalLogisticsForm";

export default function BecomeLogisticPartnerClient() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"freight" | "local">("freight");

  const t = {
    title: {
      fr: "Devenir partenaire logistique Fiitsa",
      en: "Become a Fiitsa Logistics Partner",
    },
    subtitle: {
      fr: "Rejoignez notre réseau de partenaires logistiques et développez votre activité",
      en: "Join our logistics partners network and grow your business",
    },
    benefits: {
      fr: "Avantages de devenir partenaire",
      en: "Benefits of becoming a partner",
    },
    benefitsList: {
      fr: [
        "Visibilité accrue auprès de milliers de vendeurs africains",
        "Plateforme de gestion des demandes de devis",
        "Système d’avis et de notation pour renforcer votre crédibilité",
        "Support technique et commercial dédié",
        "Tableau de bord pour suivre vos performances",
      ],
      en: [
        "Increased visibility to thousands of African sellers",
        "Quote request management platform",
        "Review and rating system to strengthen your credibility",
        "Dedicated technical and commercial support",
        "Dashboard to track your performance",
      ],
    },
    freightTab: {
      fr: "Transitaire Chine → Afrique",
      en: "China → Africa Forwarder",
    },
    localTab: {
      fr: "Logistique locale",
      en: "Local Logistics",
    },
  };

  useEffect(() => {
    document.title = `${t.title[language]} | Fiitsa`;
    const description =
      document.querySelector('meta[name="description"]') || document.createElement("meta");
    description.setAttribute("name", "description");
    description.setAttribute("content", t.subtitle[language]);
    if (!description.parentNode) {
      document.head.appendChild(description);
    }
  }, [language, t.subtitle, t.title]);

  return (
    <MarketingLayout>
      <div className="bg-gradient-to-br from-fiitsa-purple via-fiitsa-purple-light to-fiitsa-purple/80 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{t.title[language]}</h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">{t.subtitle[language]}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Card className="mb-8 border-fiitsa-purple/20 bg-gradient-to-r from-fiitsa-purple/5 to-fiitsa-purple-light/5 p-6 md:p-8">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-fiitsa-dark">
            <CheckCircle className="h-6 w-6 text-fiitsa-purple" />
            {t.benefits[language]}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {t.benefitsList[language].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-fiitsa-gold" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 md:p-8">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "freight" | "local")} className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="freight" className="flex items-center gap-2">
                <Ship className="h-4 w-4" />
                <span className="hidden sm:inline">{t.freightTab[language]}</span>
                <span className="sm:hidden">Transit</span>
              </TabsTrigger>
              <TabsTrigger value="local" className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span className="hidden sm:inline">{t.localTab[language]}</span>
                <span className="sm:hidden">Local</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="freight">
              <FreightPartnerForm />
            </TabsContent>

            <TabsContent value="local">
              <LocalLogisticsForm />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </MarketingLayout>
  );
}
