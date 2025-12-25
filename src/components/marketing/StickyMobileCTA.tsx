"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] -translate-x-1/2 sm:hidden">
      <div className="flex items-center justify-between rounded-full bg-white/95 px-4 py-3 shadow-2xl ring-1 ring-fiitsa-purple/20 backdrop-blur">
        <span className="text-sm font-semibold text-fiitsa-dark">Démarrer gratuitement</span>
        <a href="https://app.fiitsa.com/register" target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="bg-fiitsa-purple text-white hover:bg-fiitsa-purple/90">
            GO
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
}
