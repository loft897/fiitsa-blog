"use client";

import { useLanguage } from "@/hooks/useLanguage";

type LocalizedDateProps = {
  date: string | Date;
  includeTime?: boolean;
};

export function LocalizedDate({ date, includeTime = false }: LocalizedDateProps) {
  const { language } = useLanguage();
  const locale = language === "fr" ? "fr-FR" : "en-US";
  return includeTime
    ? new Date(date).toLocaleString(locale)
    : new Date(date).toLocaleDateString(locale);
}
