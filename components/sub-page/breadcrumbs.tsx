import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = {
  label: string;
  /** Omit href on the last (current) crumb. */
  href?: string;
};

/**
 * Visible breadcrumb trail for sub-pages.
 *
 * The JSON-LD `BreadcrumbList` is emitted by the page itself (next to the
 * page's other structured data) so that the @id graph stays page-scoped.
 * This component only renders the on-page text trail; it expects the page
 * to handle the schema.org payload independently.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container-x relative z-10 pt-24 md:pt-28"
    >
      <ol
        className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={`${c.label}-${i}`}
              className="inline-flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {c.href && !isLast ? (
                <Link
                  href={c.href}
                  className="hover:text-spark-300"
                  itemProp="item"
                >
                  <span itemProp="name">{c.label}</span>
                </Link>
              ) : (
                <span
                  className="text-ink-200"
                  aria-current={isLast ? "page" : undefined}
                  itemProp="name"
                >
                  {c.label}
                </span>
              )}
              <meta itemProp="position" content={String(i + 1)} />
              {!isLast && (
                <ChevronRight
                  aria-hidden
                  className="h-3 w-3 text-ink-500"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
