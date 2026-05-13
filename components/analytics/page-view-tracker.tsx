"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

/**
 * Fires `gtag('event', 'page_view', ...)` on every Next.js soft navigation.
 *
 * The inline `gtag('config', GA_ID)` snippet in `app/layout.tsx` <head>
 * auto-fires one page_view on the initial hard load (and also makes the
 * tag visible to Google's tag detector + crawlers that don't execute JS).
 * But App Router uses `history.pushState()` for `<Link>` clicks — no
 * full page reload, so gtag never re-fires automatically.
 *
 * This component bridges that gap: on every route or search-param change
 * after the initial render, it pushes a `page_view` event. The first
 * render is intentionally skipped so the initial load isn't double-counted.
 *
 * Must be wrapped in `<Suspense>` because `useSearchParams` triggers
 * Next.js's static-rendering bailout otherwise.
 */
export function PageViewTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }
    const search = searchParams?.toString();
    const path = search ? `${pathname}?${search}` : pathname;
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
      send_to: gaId,
    });
  }, [pathname, searchParams, gaId]);

  return null;
}
