"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

type LogisticsHeaderProps = {
  onSubmitCompany?: () => void;
};

export default function LogisticsHeader({ onSubmitCompany }: LogisticsHeaderProps) {
  const { language } = useLanguage();

  return (
    <div className="mb-8 flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-md md:flex-row md:items-center md:justify-between md:p-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-fiitsa-dark md:text-3xl">
          {language === "fr" ? "Partenaires Logistiques" : "Logistics Partners"}
        </h1>
        <p className="text-sm text-gray-600 md:text-base">
          {language === "fr"
            ? "Trouvez un transitaire Chine→Afrique ou un partenaire local (livraison, stockage, closing)"
            : "Find a China→Africa forwarder or local partner (delivery, warehousing, closing)"}
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          variant="outline"
          className="border-fiitsa-purple text-fiitsa-purple hover:bg-fiitsa-purple hover:text-white"
          onClick={onSubmitCompany}
        >
          {language === "fr" ? "Soumettre mon entreprise" : "Submit my company"}
        </Button>
        <Button asChild className="bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light text-white">
          <Link href="/become-logistic-partner">
            {language === "fr" ? "Devenir partenaire" : "Become a partner"}
          </Link>
        </Button>
      </div>
    </div>
  );
}
