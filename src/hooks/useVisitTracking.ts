"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { supabaseClient } from "@/lib/supabaseClient";
import { useUTMTracking } from "@/hooks/useUTMTracking";

const STORE_ID = "00000000-0000-0000-0000-000000000000";
const SESSION_STORAGE_KEY = "fiitsa_session_id";
const VISITOR_STORAGE_KEY = "fiitsa_visitor_id";

const generateId = (): string =>
  "xxxx-xxxx-4xxx-yxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

const getDeviceType = (): string => {
  const width = window.screen.width;
  if (width <= 768) return "mobile";
  if (width <= 1024) return "tablet";
  return "desktop";
};

const getBrowserName = (): string => {
  const ua = navigator.userAgent;
  if (ua.includes("Edge")) return "Edge";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Safari")) return "Safari";
  return "Unknown";
};

export function useVisitTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { utmParams } = useUTMTracking();
  const trackingRef = useRef(false);
  const lastTrackedPath = useRef<string>("");

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [visitorId, setVisitorId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let storedSession = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!storedSession) {
      storedSession = generateId();
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, storedSession);
    }
    setSessionId(storedSession);

    let storedVisitor = window.localStorage.getItem(VISITOR_STORAGE_KEY);
    if (!storedVisitor) {
      storedVisitor = generateId();
      window.localStorage.setItem(VISITOR_STORAGE_KEY, storedVisitor);
    }
    setVisitorId(storedVisitor);
  }, []);

  useEffect(() => {
    if (!sessionId || !visitorId) return;

    const trackVisit = async () => {
      if (trackingRef.current || lastTrackedPath.current === pathname) {
        return;
      }

      trackingRef.current = true;
      lastTrackedPath.current = pathname;

      try {
        const payload = {
          store_id: STORE_ID,
          visitor_id: visitorId,
          session_id: sessionId,
          page_visited: window.location.href,
          referrer: document.referrer || "",
          user_agent: navigator.userAgent,
          screen_resolution: `${window.screen.width}x${window.screen.height}`,
          device_type: getDeviceType(),
          browser_language: navigator.language,
          browser_platform: navigator.platform || "",
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
          browser_name: getBrowserName(),
          is_mobile: getDeviceType() === "mobile",
          connection_type: (navigator as Navigator & { connection?: { effectiveType?: string } }).connection
            ?.effectiveType,
          cookie_enabled: navigator.cookieEnabled,
          do_not_track: navigator.doNotTrack === "1",
          utm_source: utmParams.utm_source,
          utm_medium: utmParams.utm_medium,
          utm_campaign: utmParams.utm_campaign,
          utm_term: utmParams.utm_term,
          utm_content: utmParams.utm_content,
        };

        const { error } = await supabaseClient.functions.invoke("track-visit", {
          body: payload,
        });

        if (error) {
          console.error("Erreur lors du tracking de visite:", error);
        }
      } catch (error) {
        console.error("Erreur useVisitTracking:", error);
      } finally {
        setTimeout(() => {
          trackingRef.current = false;
        }, 1000);
      }
    };

    const timeoutId = setTimeout(trackVisit, 100);
    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams, utmParams, sessionId, visitorId]);

  return { sessionId, visitorId };
}
