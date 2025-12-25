"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/hooks/useLanguage";
import type { PartnerType } from "@/types/logistics";

type LogisticsTabsProps = {
  activeTab: PartnerType;
  onTabChange: (tab: PartnerType) => void;
  freightCount: number;
  localCount: number;
  freightCountries: number;
  localCountries: number;
  children: React.ReactNode;
};

export default function LogisticsTabs({
  activeTab,
  onTabChange,
  freightCount,
  localCount,
  freightCountries,
  localCountries,
  children,
}: LogisticsTabsProps) {
  const { language } = useLanguage();

  return (
    <Tabs value={activeTab} onValueChange={(value) => onTabChange(value as PartnerType)} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="freight" className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-2">
          <span className="text-sm font-semibold">
            {language === "fr" ? "Transitaire Chine → Afrique" : "China → Africa Forwarder"}
          </span>
          <span className="text-xs text-muted-foreground">
            {freightCount} · {freightCountries} {language === "fr" ? "pays" : "countries"}
          </span>
        </TabsTrigger>
        <TabsTrigger value="local" className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-2">
          <span className="text-sm font-semibold">{language === "fr" ? "Logistique locale" : "Local logistics"}</span>
          <span className="text-xs text-muted-foreground">
            {localCount} · {localCountries} {language === "fr" ? "pays" : "countries"}
          </span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value={activeTab} className="mt-6">
        {children}
      </TabsContent>
    </Tabs>
  );
}
