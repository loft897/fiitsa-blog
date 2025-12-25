"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type UTMParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

type UTMTrackingResult = {
  utmParams: UTMParams;
  addUTMToUrl: (url: string) => string;
  addUTMToLink: (href: string) => string;
};

const UTM_STORAGE_KEY = "fiitsa_utm_params";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export function useUTMTracking(): UTMTrackingResult {
  const searchParams = useSearchParams();
  const [utmParams, setUtmParams] = useState<UTMParams>({});

  useEffect(() => {
    let existing: UTMParams = {};
    const stored = window.localStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      try {
        existing = JSON.parse(stored) as UTMParams;
      } catch {
        existing = {};
      }
    }

    const current: UTMParams = {};
    let hasNew = false;
    UTM_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) {
        current[key as keyof UTMParams] = value;
        hasNew = true;
      }
    });

    const merged = { ...existing, ...current };
    if (hasNew || Object.keys(merged).length > 0) {
      window.localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged));
    }

    setUtmParams(merged);
  }, [searchParams]);

  const addUTMToUrl = (url: string): string => {
    if (Object.keys(utmParams).length === 0) return url;

    try {
      const urlObj = new URL(url, window.location.origin);
      Object.entries(utmParams).forEach(([key, value]) => {
        if (value) {
          urlObj.searchParams.set(key, value);
        }
      });
      return urlObj.toString();
    } catch {
      return url;
    }
  };

  const addUTMToLink = (href: string): string => {
    if (Object.keys(utmParams).length === 0) return href;

    if (
      href.startsWith("/") ||
      (!href.includes("://") && !href.startsWith("mailto:") && !href.startsWith("tel:"))
    ) {
      const params = new URLSearchParams();
      Object.entries(utmParams).forEach(([key, value]) => {
        if (value) params.set(key, value);
      });
      const separator = href.includes("?") ? "&" : "?";
      return `${href}${separator}${params.toString()}`;
    }

    return addUTMToUrl(href);
  };

  return { utmParams, addUTMToUrl, addUTMToLink };
}