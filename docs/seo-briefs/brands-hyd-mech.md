# SEO Brief: Hyd-Mech Brand Authority Page

## Target keyword
- **Primary:** `hyd-mech saw` cluster
  - `hyd-mech saw` — 320/mo, HIGH competition (0.99), CPC **$19.34** (source: `dataforseo_labs_google_keyword_overview`, last_updated 2026-04-16)
  - `hyd mech saw` — 320/mo, HIGH, CPC $19.34, same `core_keyword: hydmech saws` cluster
  - **Cluster total ≈ 320/mo** (Google-clustered, not additive)
  - 12-month trend: +22% quarterly. Demand is growing.
- **Adjacent cluster (for context, not target):**
  - `hyd-mech band saw` parent cluster — 480/mo (Brief 1 owns this)
  - `hydmech` (bare brand) — 720/mo, MEDIUM (0.42), CPC $32.21 — detected `lang:de` (German clustering noise); don't target standalone
- **Secondary keywords (SERP-derived from related_searches + people_also_search):**
  - `Hyd mech saw parts`
  - `Hyd mech saw for sale`
  - `Hyd mech saw price`
  - `HYDMECH vertical band saw`
  - `HYDMECH H22A`
  - `Hydmech S23P`
- **Intent:** transactional 0.868

## Search intent
**Transactional with strong "where to buy / who services" angle.** SERP confirms: top results are HydMech.com, paid Fabtech ad, Popular Products carousel (8 SKUs), then dealer pages.

**Implication:** Brand authority + service pivot. We rank by being the most credible dealer-and-service resource in the region; we convert to a service quote, not a sale.

## Top SERP competitors (Houston, EN, depth 10)

| Rank | URL | Notes |
|------|-----|-------|
| 1 organic | hydmech.com/ | OEM homepage. Sitelinks: Band Saws, Contact, Support, Horizontal Band Saws, About. |
| 2 organic | advancedmachinery.com/hydmech/ | Dealer brand page, ~720 words. H1 "HYDMECH Metal Cutting Saws". Heavy OEM marketing copy. No FAQ. No JSON-LD. Generic "best cost-per-cut" positioning. |
| 3 organic | practicalmachinist.com forum | Forum drift |
| 4 organic | foxmachinery.com/hydmech-saws/ | Dealer brand page, ~290 words. Mostly a product catalog grid (12 saw model tiles) + 3-bullet footer. Very thin. |
| 5 organic | capitalmachine.com/products/sawing/horizontal-mitering/hyd-mech/ | Product catalog |

**SERP features:** 2 paid ads top (Fabtech + Voortman), Popular Products carousel (8 SKUs, $4,200–$98,500), More Products carousel, people_also_search, related_searches. **NO local pack** (unlike `hyd-mech band saw repair`). **NO People Also Ask** on this query.

**Content gaps:**
- No clean "Hyd-Mech model index" with deep-link anchors anywhere on page 1
- Nobody leads with "authorized dealer" language
- No `Brand` / `Organization` JSON-LD on any dealer page
- No service & maintenance cross-link

**E-E-A-T edge:** Authorized dealer status is the centerpiece here.

## Page structure

- **Slug / route:** `app/brands/hyd-mech/page.tsx`
- **`<title>` (≤60 chars):**
  1. `Hyd-Mech Saw Sales & Service | Authorized Dealer | 3G` (54)
  2. `Authorized Hyd-Mech Dealer in Texas | Saw Service 3G` (53) — **recommended**
  3. `Hyd-Mech Band Saws & Service — Authorized Dealer | 3G` (54)
- **`<meta description>` (140–160 chars):**
  1. `Saw Service 3G is an authorized Hyd-Mech dealer in Texas. Sales, parts access, on-site service for S-Series, DM, V-Series, H-Series, and CSNC saws.` (148) — **recommended**
  2. `Authorized Hyd-Mech dealer covering Houston and Texas. Every model — S20A, DM-10, V-25, H-22A, CSNC. Call us for service, parts, or a quote.` (142)
  3. `Texas's authorized Hyd-Mech dealer. We sell, service, and stock parts for every Hyd-Mech band saw, cold saw, and carbide saw on the market.` (140)
- **`<h1>`:** `Authorized Hyd-Mech Dealer — Sales, Parts & On-Site Service`
- **Outline (H2s):**
  1. Authorized Hyd-Mech Dealer — Why It Matters (trust block + badge)
  2. Hyd-Mech Models We Cover (model index — anchor links to deeper resources)
  3. Why Hyd-Mech, and Why Service With Us (brand pitch + service pivot)
  4. Parts Access (short)
  5. Need Hyd-Mech Repair? (funnel → Brief 1 CTA)
  6. Service Area
  7. Get a Quote
- **FAQ:** SKIP. SERP has no PAA for `hyd-mech saw`; FAQ adds bulk without ranking signal. Keep tight.
- **Word count target:** **600–750 words.**

## Structured data
- **`Brand`** — `name: "Hyd-Mech"`, `alternateName: ["HYDMECH", "Hyd Mech", "Hydmech"]`, `logo:` only if licensed usage rights (honesty §4)
- **`Organization`** — extend LocalBusiness with `brand: { @id: <Brand @id> }`
- **`BreadcrumbList`** — Home → Brands → Hyd-Mech
- **Skip:** `Service` (Brief 1 owns), `Product` (we don't sell SKUs)

## Internal links
- "Hyd-Mech Band Saw Repair" → `/services/hyd-mech-band-saw-repair` (Brief 1) — primary CTA
- "Hyd-Mech S-20A Parts & Service Reference" → `/resources/hyd-mech-s-20a-parts-list` (Brief 3) — anchor on "S-20A" in model index
- "Get a quote" → `/#quote`
- "About Saw Service 3G" → `/#about`
- "Service area" → `/#coverage`
- "All brands we service" → `/#brands`

## Open Graph / Twitter
- **og:title:** `Authorized Hyd-Mech Dealer in Texas | Saw Service 3G` (53)
- **og:description:** `Authorized Hyd-Mech dealer covering Houston and Texas. Every model serviced. Sales, parts, on-site repair.` (107)
- **og:image:** real 1200×630 photo of a Hyd-Mech S/H-series saw on a shop floor
- **og:type:** `website`
- **twitter:card:** `summary_large_image`

## Notes for Frontend
- This page is thinner-by-design than Brief 1. Resist padding.
- **Model index implementation:** 2-column responsive list. `<dt>`/`<dd>` styled. Anchor only models with dedicated resource pages (currently S-20A → Brief 3). **Don't link to Hydmech.com from this list** — dilutes authority signal.
- **Dealer badge:** text badge with our design tokens unless we have authorized usage of OEM mark. Must be removable in 5 minutes if dealer status lapses.
- Add to `app/sitemap.ts`.
- This page is the future hub for Hyd-Mech-specific content. Keep model index expandable to ~30 entries without re-design.

## Cited MCP calls (audit trail)
- `dataforseo_labs_google_keyword_overview` × `[hyd-mech saw, hyd mech saw, hyd-mech]` — 2026-05-12
- `dataforseo_labs_search_intent` × `hyd-mech saw` — 2026-05-12
- `serp_organic_live_advanced` × `hyd-mech saw`, Houston, depth 10 — 2026-05-12
- `on_page_content_parsing` × `advancedmachinery.com/hydmech/` — 2026-05-12 (rank 2)
- `on_page_content_parsing` × `foxmachinery.com/hydmech-saws/` — 2026-05-12 (rank 4)
- `dataforseo_labs_google_related_keywords` × `hyd-mech saw`, US, EN, depth 2 — 2026-05-12
