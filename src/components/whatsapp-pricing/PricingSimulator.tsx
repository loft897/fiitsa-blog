"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

type Lang = "fr" | "en";

const USD_TO_FCFA = 600;

const rates = {
  marketing: 0.0225,
  utility: 0.004,
  authentication: 0.004,
};

const labels = {
  fr: {
    title: "Simulateur de messages",
    type: "Type de message",
    count: "Nombre de messages",
    total: "Total estime",
    note: "Les tarifs utilitaires et authentication peuvent être gratuits si le client écrit en premier.",
    types: {
      marketing: "Marketing",
      utility: "Utilitaire",
      authentication: "Authentification",
    },
  },
  en: {
    title: "Message Simulator",
    type: "Message type",
    count: "Number of messages",
    total: "Estimated total",
    note: "Utility and authentication can be free when the customer messages first.",
    types: {
      marketing: "Marketing",
      utility: "Utility",
      authentication: "Authentication",
    },
  },
};

export default function PricingSimulator({ lang }: { lang: Lang }) {
  const [type, setType] = useState<keyof typeof rates>("utility");
  const [count, setCount] = useState("1000");

  const t = labels[lang];

  const total = useMemo(() => {
    const amount = Number(count || 0) * rates[type];
    return Number.isFinite(amount) ? amount : 0;
  }, [count, type]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>{t.type}</Label>
            <Select value={type} onValueChange={(value) => setType(value as keyof typeof rates)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="marketing">{t.types.marketing}</SelectItem>
                <SelectItem value="utility">{t.types.utility}</SelectItem>
                <SelectItem value="authentication">{t.types.authentication}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>{t.count}</Label>
            <Input
              inputMode="numeric"
              value={count}
              onChange={(event) => setCount(event.target.value)}
              placeholder="1000"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/60 bg-muted/30 px-4 py-3">
          <span className="text-sm text-muted-foreground">{t.total}</span>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Badge variant="outline">${total.toFixed(2)}</Badge>
            <span className="text-muted-foreground">
              ({Math.round(total * USD_TO_FCFA).toLocaleString()} FCFA)
            </span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">{t.note}</p>
      </CardContent>
    </Card>
  );
}
