"use client";

import { useVisitTracking } from "@/hooks/useVisitTracking";

export function GlobalTracker() {
  useVisitTracking();
  return null;
}