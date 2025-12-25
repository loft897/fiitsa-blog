"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FreightPartnerForm() {
  const { language } = useLanguage();

  return (
    <Card className="border-border/60">
      <CardHeader>
        <CardTitle className="text-xl text-fiitsa-dark">
          {language === "fr" ? "Transitaire Chine → Afrique" : "China → Africa Forwarder"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="freight-company">{language === "fr" ? "Nom de l'entreprise" : "Company name"}</Label>
            <Input id="freight-company" placeholder={language === "fr" ? "Votre entreprise" : "Your company"} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="freight-country">{language === "fr" ? "Pays d'operation" : "Operating country"}</Label>
            <Input id="freight-country" placeholder="China / Cameroun" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="freight-email">Email</Label>
            <Input id="freight-email" type="email" placeholder="contact@entreprise.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="freight-phone">{language === "fr" ? "Telephone" : "Phone"}</Label>
            <Input id="freight-phone" placeholder="+237 ..." />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="freight-services">
            {language === "fr" ? "Services proposes" : "Services offered"}
          </Label>
          <Textarea
            id="freight-services"
            rows={4}
            placeholder={
              language === "fr"
                ? "Transit, douane, groupage, livraison..."
                : "Freight, customs, consolidation, delivery..."
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
