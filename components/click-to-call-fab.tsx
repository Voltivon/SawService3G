"use client";

import { Phone } from "lucide-react";
import { site } from "@/data/site";

export function ClickToCallFab() {
  return (
    <a
      href={site.phone.href}
      aria-label={`Call ${site.name} at ${site.phone.display}`}
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 font-semibold btn-spark md:bottom-8 md:right-8"
    >
      <span aria-hidden className="relative inline-flex h-2.5 w-2.5">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
        <span className="absolute inset-0 rounded-full bg-white" />
      </span>
      <Phone className="h-4 w-4" aria-hidden />
      <span className="text-sm">Call now</span>
    </a>
  );
}
