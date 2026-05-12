import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";
import { brands, brandsExtra } from "@/data/brands";
import { services } from "@/data/services";
import { coverage } from "@/data/coverage";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950/80 pt-20 pb-10">
      <div className="container-x grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-ink-300">
            Mobile, on-site industrial band saw repair, anchoring, and
            preventive maintenance — across {site.address.serviceArea}.
          </p>
          <div className="space-y-3 pt-2 text-sm">
            {site.contacts.map((c) => (
              <div key={c.name} className="space-y-0.5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                  {c.name}
                </p>
                <a
                  href={c.phoneHref}
                  className="block font-mono text-spark-400 hover:text-spark-300"
                >
                  {c.phoneDisplay}
                </a>
                <a
                  href={c.emailHref}
                  className="block text-ink-200 hover:text-white"
                >
                  {c.emailDisplay}
                </a>
              </div>
            ))}
            <p className="pt-2 text-ink-300">{site.hours.weekdays}</p>
            <p className="text-ink-400">{site.hours.note}</p>
            <address className="not-italic pt-3 text-ink-300">
              {site.address.streetAddress}
              <br />
              {site.address.locality}, {site.address.state}{" "}
              {site.address.postalCode}
            </address>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href="#services"
                  className="text-ink-200 hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Brands serviced</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {brands.map((b) => (
              <li
                key={b.name}
                className={b.authorized ? "text-white" : "text-ink-200"}
              >
                {b.name}
                {b.authorized && (
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-spark-400">
                    Authorized
                  </span>
                )}
              </li>
            ))}
            <li className="text-spark-400">{brandsExtra}</li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Coverage area</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {coverage.map((s) => (
              <li
                key={s.code}
                className={s.primary ? "text-white" : "text-ink-200"}
              >
                {s.name}
                {s.primary ? (
                  <span className="ml-2 text-spark-400">— Primary</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. Mobile saw service in
          Greater Houston, TX.
        </p>
        <p className="font-mono uppercase tracking-[0.18em] text-ink-500">
          25 Years &middot; Any Saw &middot; Any Shop
        </p>
      </div>
    </footer>
  );
}
