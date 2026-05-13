"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Information architecture — single source of truth
//
// Edit the arrays below to add/remove nav entries. The desktop NavigationMenu
// and the mobile Sheet drawer both consume this data, so the two stay in sync.
// ---------------------------------------------------------------------------

type Entry = {
  href: string;
  label: string;
  /** Renders a small accent dot + spark-tinted text (used for "Authorized Hyd-Mech Dealer"). */
  accent?: boolean;
  /** Optional small descriptor below the label inside the mega menu. */
  hint?: string;
};

const servicesByBrand: Entry[] = [
  {
    href: "/services/hyd-mech-band-saw-repair",
    label: "Hyd-Mech Band Saw Repair",
    hint: "Authorized dealer · all models",
    accent: true,
  },
  { href: "/services/marvel-band-saw-repair", label: "Marvel Band Saw Repair" },
  { href: "/services/hem-saw-repair", label: "HEM Saw Repair" },
  { href: "/services/amada-band-saw-repair", label: "Amada Band Saw Repair" },
  {
    href: "/services/behringer-band-saw-repair",
    label: "Behringer Band Saw Repair",
  },
  { href: "/services/tsune-band-saw-repair", label: "Tsune Band Saw Repair" },
];

const servicesByType: Entry[] = [
  { href: "services", label: "On-Site Repair", hint: "Field calls · diagnosis" },
  {
    href: "services",
    label: "Anchoring & Relocation",
    hint: "Move, level, verify",
  },
  {
    href: "services",
    label: "Preventive Maintenance",
    hint: "Scheduled service",
  },
  { href: "services", label: "Emergency Service", hint: "Down-saw response" },
];

const brands: Entry[] = [
  {
    href: "/brands/hyd-mech",
    label: "Hyd-Mech",
    hint: "Authorized Dealer",
    accent: true,
  },
  { href: "/services/marvel-band-saw-repair", label: "Marvel" },
  { href: "/services/hem-saw-repair", label: "HEM" },
  { href: "/services/amada-band-saw-repair", label: "Amada" },
  { href: "/services/behringer-band-saw-repair", label: "Behringer" },
  { href: "/services/tsune-band-saw-repair", label: "Tsune" },
];

const serviceAreas: Entry[] = [
  { href: "/service-area/houston-tx", label: "Houston, TX" },
  { href: "/service-area/spring-tx", label: "Spring, TX" },
  { href: "/service-area/katy-tx", label: "Katy, TX" },
  { href: "/service-area/cypress-tx", label: "Cypress, TX" },
  { href: "/service-area/the-woodlands-tx", label: "The Woodlands, TX" },
  { href: "/service-area/conroe-tx", label: "Conroe, TX" },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Resolve a nav entry's `href` against the current pathname.
 * - Absolute paths (start with `/`) stay as-is.
 * - Hash-only labels (e.g. `"services"`) become `#services` on the home page
 *   and `"/#services"` everywhere else, so they always resolve.
 */
function resolveHref(href: string, onHome: boolean): string {
  if (href.startsWith("/") || href.startsWith("http")) return href;
  return onHome ? `#${href}` : `/#${href}`;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer whenever the route changes (link tap navigation).
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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

        {/* Desktop nav — hidden on mobile */}
        <DesktopNav onHome={onHome} />

        <div className="flex items-center gap-2">
          <a
            href={site.phone.href}
            className="group inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-spark-500/50"
          >
            <Phone className="h-4 w-4 text-spark-400 transition group-hover:text-spark-300" />
            <span className="hidden sm:inline">{site.phone.display}</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Hamburger — mobile only */}
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-spark-500/50 md:hidden"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </button>
            </Dialog.Trigger>
            <MobileDrawer onHome={onHome} />
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Desktop NavigationMenu (≥md)
// ---------------------------------------------------------------------------

function DesktopNav({ onHome }: { onHome: boolean }) {
  return (
    <NavMenu.Root className="relative z-10 hidden md:flex" aria-label="Primary">
      <NavMenu.List className="flex items-center gap-1 lg:gap-2">
        {/* Services */}
        <NavMenu.Item>
          <NavMenu.Trigger className={triggerClass}>
            Services
            <ChevronDown
              className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavMenu.Trigger>
          <NavMenu.Content className={contentClass}>
            <div className="grid w-[560px] grid-cols-2 gap-x-6 gap-y-1 p-5">
              <div>
                <p className="mb-2 px-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
                  By Brand
                </p>
                <ul className="flex flex-col">
                  {servicesByBrand.map((e) => (
                    <DropdownLink
                      key={e.href}
                      entry={e}
                      onHome={onHome}
                    />
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 px-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
                  By Service Type
                </p>
                <ul className="flex flex-col">
                  {servicesByType.map((e, i) => (
                    <DropdownLink
                      key={`${e.label}-${i}`}
                      entry={e}
                      onHome={onHome}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <FooterCta
              href={onHome ? "#services" : "/#services"}
              label="All services"
            />
          </NavMenu.Content>
        </NavMenu.Item>

        {/* Brands */}
        <NavMenu.Item>
          <NavMenu.Trigger className={triggerClass}>
            Brands
            <ChevronDown
              className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavMenu.Trigger>
          <NavMenu.Content className={contentClass}>
            <ul className="flex w-[280px] flex-col p-3">
              {brands.map((e) => (
                <DropdownLink key={e.href} entry={e} onHome={onHome} />
              ))}
            </ul>
          </NavMenu.Content>
        </NavMenu.Item>

        {/* Service Area */}
        <NavMenu.Item>
          <NavMenu.Trigger className={triggerClass}>
            Service Area
            <ChevronDown
              className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </NavMenu.Trigger>
          <NavMenu.Content className={contentClass}>
            <ul className="flex w-[280px] flex-col p-3">
              {serviceAreas.map((e) => (
                <DropdownLink key={e.href} entry={e} onHome={onHome} />
              ))}
            </ul>
            <FooterCta
              href={onHome ? "#coverage" : "/#coverage"}
              label="See full coverage map"
            />
          </NavMenu.Content>
        </NavMenu.Item>

        {/* Resources (direct link — no dropdown yet) */}
        <NavMenu.Item>
          <NavMenu.Link asChild>
            <Link
              href="/resources/hyd-mech-s-20a-parts-list"
              className={linkClass}
            >
              Resources
            </Link>
          </NavMenu.Link>
        </NavMenu.Item>

        {/* About — anchor on home, hash-routed elsewhere */}
        <NavMenu.Item>
          <NavMenu.Link asChild>
            <Link href={resolveHref("about", onHome)} className={linkClass}>
              About
            </Link>
          </NavMenu.Link>
        </NavMenu.Item>
      </NavMenu.List>

      {/* Floating panel — Radix positions Content via this Viewport.
          Viewport sizes itself from --radix-navigation-menu-viewport-width/height,
          which Radix measures off-DOM from the active Content's intrinsic size.
          `w-fit` does NOT work here because Content is position:absolute (removed
          from flow), so `fit-content` would resolve to 0 and the panel would be
          invisible. */}
      <div className="absolute left-0 top-full flex justify-start">
        <NavMenu.Viewport className="nav-viewport relative mt-2 h-(--radix-navigation-menu-viewport-height) w-(--radix-navigation-menu-viewport-width) overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-950/95 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-[width,height] duration-200" />
      </div>
    </NavMenu.Root>
  );
}

const triggerClass =
  "group inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-ink-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spark-500/60 data-[state=open]:text-white";

const linkClass =
  "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-ink-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spark-500/60";

// Radix NavMenu.Content lives inside NavMenu.Viewport. We position absolutely
// so multiple Contents can occupy the same space during the cross-fade between
// dropdowns, but we do NOT set width — each inner panel sets its own width
// (`w-[560px]` / `w-[280px]`) and the Viewport (`w-fit`) sizes to whichever
// Content is mounted. Setting `w-full` here created a circular constraint
// where Content wanted to match Viewport's width while Viewport tried to size
// to Content, collapsing the dropdown to zero width.
const contentClass = "nav-content absolute left-0 top-0";

function DropdownLink({
  entry,
  onHome,
}: {
  entry: Entry;
  onHome: boolean;
}) {
  const href = resolveHref(entry.href, onHome);
  return (
    <li>
      <NavMenu.Link asChild>
        <Link
          href={href}
          className={cn(
            "block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spark-500/60",
          )}
        >
          <span
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              entry.accent ? "text-spark-300" : "text-ink-100",
            )}
          >
            {entry.accent && (
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-spark-500 shadow-[0_0_8px_var(--color-spark-500)]"
              />
            )}
            {entry.label}
          </span>
          {entry.hint && (
            <span className="mt-0.5 block text-xs text-ink-400">
              {entry.hint}
            </span>
          )}
        </Link>
      </NavMenu.Link>
    </li>
  );
}

function FooterCta({ href, label }: { href: string; label: string }) {
  return (
    <div className="border-t border-white/[0.06] bg-white/[0.02] px-5 py-3">
      <NavMenu.Link asChild>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-spark-300 transition-colors hover:text-spark-200 focus-visible:outline-none focus-visible:underline"
        >
          {label}
          <span aria-hidden>→</span>
        </Link>
      </NavMenu.Link>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mobile Sheet drawer (<md)
// ---------------------------------------------------------------------------

function MobileDrawer({ onHome }: { onHome: boolean }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="nav-overlay fixed inset-0 z-50 bg-ink-950/70 backdrop-blur-sm" />
      <Dialog.Content
        className="nav-drawer fixed inset-y-0 right-0 z-50 flex h-full w-[88vw] max-w-sm flex-col border-l border-white/[0.06] bg-ink-950 shadow-[-24px_0_60px_-20px_rgba(0,0,0,0.6)]"
        aria-describedby={undefined}
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <Dialog.Title className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
            Menu
          </Dialog.Title>
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Close menu"
              className="inline-grid h-9 w-9 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-spark-500/50"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </Dialog.Close>
        </div>

        <nav
          aria-label="Mobile primary"
          className="flex-1 overflow-y-auto px-2 py-3"
        >
          <Accordion.Root type="single" collapsible className="flex flex-col">
            <MobileGroup
              value="services"
              label="Services"
              entries={[
                {
                  heading: "By Brand",
                  items: servicesByBrand,
                },
                {
                  heading: "By Service Type",
                  items: servicesByType,
                },
              ]}
              onHome={onHome}
            />
            <MobileGroup
              value="brands"
              label="Brands"
              entries={[{ heading: null, items: brands }]}
              onHome={onHome}
            />
            <MobileGroup
              value="service-area"
              label="Service Area"
              entries={[{ heading: null, items: serviceAreas }]}
              onHome={onHome}
              footer={{
                href: onHome ? "#coverage" : "/#coverage",
                label: "See full coverage map",
              }}
            />
          </Accordion.Root>

          <div className="mt-2 flex flex-col">
            <Dialog.Close asChild>
              <Link
                href="/resources/hyd-mech-s-20a-parts-list"
                className="block rounded-xl px-4 py-3 text-base font-semibold text-ink-100 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                Resources
              </Link>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Link
                href={resolveHref("about", onHome)}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-ink-100 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                About
              </Link>
            </Dialog.Close>
          </div>
        </nav>

        <div className="border-t border-white/[0.06] bg-ink-950/80 p-4">
          <Dialog.Close asChild>
            <a
              href={site.phone.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-base font-semibold btn-spark"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {site.phone.display}
            </a>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

function MobileGroup({
  value,
  label,
  entries,
  onHome,
  footer,
}: {
  value: string;
  label: string;
  entries: { heading: string | null; items: Entry[] }[];
  onHome: boolean;
  footer?: { href: string; label: string };
}) {
  return (
    <Accordion.Item value={value} className="border-b border-white/[0.04]">
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink-100 transition-colors hover:bg-white/[0.04] hover:text-white">
          {label}
          <ChevronDown
            className="h-4 w-4 text-ink-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="nav-accordion overflow-hidden">
        <div className="pb-2 pl-2">
          {entries.map((group, gi) => (
            <div key={gi} className="mt-1">
              {group.heading && (
                <p className="mb-1 px-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
                  {group.heading}
                </p>
              )}
              <ul className="flex flex-col">
                {group.items.map((e, i) => (
                  <li key={`${e.href}-${i}`}>
                    <Dialog.Close asChild>
                      <Link
                        href={resolveHref(e.href, onHome)}
                        className="block rounded-lg px-4 py-2.5"
                      >
                        <span
                          className={cn(
                            "flex items-center gap-2 text-sm font-medium",
                            e.accent ? "text-spark-300" : "text-ink-200",
                          )}
                        >
                          {e.accent && (
                            <span
                              aria-hidden
                              className="inline-block h-1.5 w-1.5 rounded-full bg-spark-500 shadow-[0_0_8px_var(--color-spark-500)]"
                            />
                          )}
                          {e.label}
                        </span>
                        {e.hint && (
                          <span className="mt-0.5 block text-xs text-ink-500">
                            {e.hint}
                          </span>
                        )}
                      </Link>
                    </Dialog.Close>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {footer && (
            <div className="mt-2 px-4">
              <Dialog.Close asChild>
                <Link
                  href={footer.href}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-spark-300 transition-colors hover:text-spark-200"
                >
                  {footer.label}
                  <span aria-hidden>→</span>
                </Link>
              </Dialog.Close>
            </div>
          )}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
