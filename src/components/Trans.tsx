"use client";

import { useLanguage } from "@/hooks/useLanguage";

type TransProps = {
  fr: string;
  en: string;
};

export function Trans({ fr, en }: TransProps) {
  const { language } = useLanguage();
  return language === "fr" ? fr : en;
}
