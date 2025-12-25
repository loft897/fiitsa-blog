"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

type Lang = "fr" | "en";

const USD_TO_FCFA = 600;
const RATE_PER_MINUTE = 0.0103;

const labels = {
  fr: {
    title: "Simulateur d'appels sortants",
    minutes: "Minutes d'appels sortants",
    total: "Total estime",
    note: "Les appels entrants sont gratuits. Le tarif affiche est une estimation.",
  },
  en: {
    title: "Outbound call simulator",
    minutes: "Outbound call minutes",
    total: "Estimated total",
    note: "Inbound calls are free. The rate shown is an estimate.",
  },
};

export default function CallingSimulator({ lang }: { lang: Lang }) {
  const [minutes, setMinutes] = useState("100");
  const t = labels[lang];

  const total = useMemo(() => {
    const amount = Number(minutes || 0) * RATE_PER_MINUTE;
    return Number.isFinite(amount) ? amount : 0;
  }, [minutes]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>{t.minutes}</Label>
          <Input
            inputMode="numeric"
            value={minutes}
            onChange={(event) => setMinutes(event.target.value)}
            placeholder="100"
          />
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
