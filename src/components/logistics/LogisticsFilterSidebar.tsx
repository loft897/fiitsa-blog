"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/useLanguage";
import type { PartnerType } from "@/types/logistics";

type LogisticsFilterSidebarProps = {
  partnerType: PartnerType;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onPartnerTypeChange: (value: PartnerType) => void;
};

export default function LogisticsFilterSidebar({
  partnerType,
  isOpen,
  onOpenChange,
  onPartnerTypeChange,
}: LogisticsFilterSidebarProps) {
  const { language } = useLanguage();

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="outline">
          {language === "fr" ? "Filtrés" : "Filters"}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>{language === "fr" ? "Filtrer les partenaires" : "Filter partners"}</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label>{language === "fr" ? "Type de partenaire" : "Partner type"}</Label>
            <div className="flex gap-2">
              <Button
                variant={partnerType === "freight" ? "default" : "outline"}
                className="flex-1"
                onClick={() => onPartnerTypeChange("freight")}
              >
                {language === "fr" ? "Transitaire" : "Freight"}
              </Button>
              <Button
                variant={partnerType === "local" ? "default" : "outline"}
                className="flex-1"
                onClick={() => onPartnerTypeChange("local")}
              >
                {language === "fr" ? "Local" : "Local"}
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>{language === "fr" ? "Pays" : "Country"}</Label>
            <Input placeholder={language === "fr" ? "Ex: Cameroun" : "e.g. Cameroon"} />
          </div>
          <div className="space-y-2">
            <Label>{language === "fr" ? "Ville" : "City"}</Label>
            <Input placeholder={language === "fr" ? "Ex: Douala" : "e.g. Douala"} />
          </div>
          <Button className="w-full">
            {language === "fr" ? "Appliquer" : "Apply"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
