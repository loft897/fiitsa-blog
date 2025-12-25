"use client";

import { useCallback, useState } from "react";

export function useImagePreloader() {
  const [cache, setCache] = useState<Record<string, boolean>>({});

  const preloadImage = useCallback((src: string, highPriority = false) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      if (highPriority) {
        img.fetchPriority = "high";
      }
      img.onload = () => {
        setCache((prev) => ({ ...prev, [src]: true }));
        resolve();
      };
      img.onerror = () => resolve();
      img.src = src;
    });
  }, []);

  const isPreloaded = useCallback((src: string) => Boolean(cache[src]), [cache]);

  return { preloadImage, isPreloaded };
}
