"use client";

import { useUTMTracking } from "@/hooks/useUTMTracking";

export function useLinkWithUTM() {
  const { addUTMToLink, addUTMToUrl } = useUTMTracking();

  const createLink = (href: string) => addUTMToLink(href);
  const createExternalLink = (href: string) => addUTMToUrl(href);

  return { createLink, createExternalLink };
}
