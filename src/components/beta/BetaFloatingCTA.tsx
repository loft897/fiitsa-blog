"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BetaFloatingCTA() {
  return (
    <div className="fixed bottom-6 left-1/2 z-40 w-[calc(100%-2rem)] -translate-x-1/2 sm:w-auto">
      <div className="flex items-center gap-3 rounded-full bg-white/95 px-4 py-2 shadow-xl ring-1 ring-fiitsa-purple/20 backdrop-blur">
        <span className="text-sm font-semibold text-fiitsa-dark">0% commission pendant 3 mois</span>
        <a href="https://app.fiitsa.com/register" target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="bg-fiitsa-purple text-white hover:bg-fiitsa-purple/90">
            Postuler
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
}
