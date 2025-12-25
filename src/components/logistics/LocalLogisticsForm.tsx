"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function LocalLogisticsForm() {
  const { language } = useLanguage();

  return (
    <Card className="border-border/60">
      <CardHeader>
        <CardTitle className="text-xl text-fiitsa-dark">
          {language === "fr" ? "Logistique locale" : "Local logistics"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="local-company">{language === "fr" ? "Nom de l'entreprise" : "Company name"}</Label>
            <Input id="local-company" placeholder={language === "fr" ? "Votre entreprise" : "Your company"} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="local-country">{language === "fr" ? "Pays / Ville" : "Country / City"}</Label>
            <Input id="local-country" placeholder="Douala, Cameroun" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="local-email">Email</Label>
            <Input id="local-email" type="email" placeholder="contact@entreprise.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="local-phone">{language === "fr" ? "Telephone" : "Phone"}</Label>
            <Input id="local-phone" placeholder="+237 ..." />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="local-services">
            {language === "fr" ? "Services proposes" : "Services offered"}
          </Label>
          <Textarea
            id="local-services"
            rows={4}
            placeholder={
              language === "fr"
                ? "Livraison, stockage, closing, cash on delivery..."
                : "Delivery, warehousing, closing, cash on delivery..."
            }
          />
        </div>
        <Button className="w-full bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light text-white">
          {language === "fr" ? "Envoyer la demande" : "Send application"}
        </Button>
      </CardContent>
    </Card>
  );
}
