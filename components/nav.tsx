"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#brands", label: "Brands" },
  { href: "#about", label: "About" },
  { href: "#coverage", label: "Coverage" },
  { href: "#quote", label: "Get a Quote" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="-m-2 p-2" aria-label={site.name}>
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-200 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={site.phone.href}
          className="group inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-spark-500/50"
        >
          <Phone className="h-4 w-4 text-spark-400 transition group-hover:text-spark-300" />
          <span className="hidden sm:inline">{site.phone.display}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
