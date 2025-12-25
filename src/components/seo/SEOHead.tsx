"use client";

import { useEffect } from "react";

type SEOHeadProps = {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  keywords?: string;
};

export function SEOHead({ title, description, canonical, ogImage, keywords }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (existing) {
        existing.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("name", name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    const setOG = (property: string, content: string) => {
      const existing = document.querySelector(`meta[property="${property}"]`);
      if (existing) {
        existing.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:type", "website");
    if (ogImage) {
      setOG("og:image", ogImage);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonical);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", canonical);
      document.head.appendChild(link);
    }
  }, [canonical, description, keywords, ogImage, title]);

  return null;
}
