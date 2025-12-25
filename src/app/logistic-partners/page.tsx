"use client";

import { useEffect, useState } from "react";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import LogisticsHeader from "@/components/logistics/LogisticsHeader";
import LogisticsTabs from "@/components/logistics/LogisticsTabs";
import LogisticsFilterSidebar from "@/components/logistics/LogisticsFilterSidebar";
import { Search } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import type { PartnerType } from "@/types/logistics";

export default function LogisticsPartners() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<PartnerType>("freight");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSubmitCompany = () => {
    // TODO: Ouvrir modal de soumission
    console.log("Submit company modal");
  };

  const t = {
    title: {
      fr: "Partenaires Logistiques",
      en: "Logistics Partners",
    },
    subtitle: {
      fr: "Trouvez un transitaire Chine→Afrique ou un partenaire local (livraison, stockage, closing)",
      en: "Find a China→Africa forwarder or local partner (delivery, warehousing, closing)",
    },
    comingSoon: {
      fr: "Prochainement disponible",
      en: "Coming soon",
    },
    description: {
      fr: "Cette section sera bientot disponible avec un annuaire complet de partenaires logistiques verifies.",
      en: "This section will be available soon with a complete directory of verified logistics partners.",
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
      <div className="min-h-screen bg-gradient-to-b from-fiitsa-light to-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
          <LogisticsHeader onSubmitCompany={handleSubmitCompany} />

          <div className="mb-6 flex justify-start">
            <LogisticsFilterSidebar
              partnerType={activeTab}
              isOpen={isFilterOpen}
              onOpenChange={setIsFilterOpen}
              onPartnerTypeChange={setActiveTab}
            />
          </div>

          <LogisticsTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            freightCount={0}
            localCount={0}
            freightCountries={0}
            localCountries={0}
          >
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl bg-white p-8 text-center shadow-lg md:p-12">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-fiitsa-light">
                <Search className="h-10 w-10 text-fiitsa-purple" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-fiitsa-dark">{t.comingSoon[language]}</h2>
              <p className="max-w-md text-gray-600">{t.description[language]}</p>
            </div>
          </LogisticsTabs>
        </div>
      </div>
    </MarketingLayout>
  );
}
