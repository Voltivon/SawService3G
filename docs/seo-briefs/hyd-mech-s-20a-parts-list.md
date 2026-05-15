# SEO Brief: Hyd-Mech S-20A Parts & Service Reference (Resource Page)

## Target keyword
- **Primary:** `hyd-mech s-20a parts list` cluster
  - `hyd-mech s-20a parts list` — 50/mo, **LOW competition (0.28)**, CPC **$11.80** (source: `dataforseo_labs_google_keyword_overview`, last_updated 2026-04-18)
  - `hyd mech s-20a parts list` — 50/mo, LOW, CPC $11.80 (clustered, `core_keyword: hyd mech s-20a parts list`)
  - **Cluster total ≈ 50/mo** (Google-clustered)
  - 12-month trend: **+25% yearly, +25% quarterly.** Demand growing as the owner population ages.
  - High CPC ($11.80) signals commercial intent behind a nominally informational query.
- **Secondary keywords (SERP-derived):**
  - `Hyd mech s 20a parts list pdf free download`
  - `Hyd mech s 20a parts list pdf`
  - `Hyd-Mech S23A Parts Manual PDF` (sister-model adjacency)
  - `Hyd-Mech S-20 Series II parts`
  - `Hyd-Mech S-20A Series II Manual`
- **Intent:** primary **informational** (0.747) with secondary **navigational** — page funnels informational traffic into service CTA via dealer pivot.

## Search intent
**Information-first, transactional-second.** Three searcher types:
1. Owners trying to identify a broken part (AI Overview shows part numbers 340775, 363105, 342340, 813176, 341686-E, 034.0206)
2. Maintenance leads downloading the PDF manual (Westway PDF dominant)
3. Resellers / shoppers checking parts availability

**Implication:** Page must respect informational intent. A clear "you can replace this yourself OR have us do it" decision tree is the conversion path.

## Top SERP competitors (Houston, EN, depth 10)

| Rank | URL | Notes |
|------|-----|-------|
| 1 paid | fabtechsolutions.com (ad) | "Hyd Mech Parts List" — aggressive paid bid |
| 1 organic | westwaymachinery.com/.../HYD-MECH-MODEL-S-20A-and-S-23A-MANUAL-2.pdf | OEM service & parts manual PDF (rehosted). We compete as human-readable companion, not by out-ranking a PDF. |
| 1 AI Overview | hydmech.com + Westway PDF + Sawblade + TS3Saw + Detroit Band Saw | Google AI already answering — be in the citation set OR have nothing better to cite |
| 2 organic | sawblade.com/.../aftermarket-hydmech-parts | E-commerce parts catalog with prices ($7–$234) |
| 3 organic | hydmech.com/products/band-saws-horitzontal-pivot-s-20a/ | OEM product page — specs, not parts list |
| 4 organic | fabtechsolutions.com/wp-content/uploads/2019/08/S20A_Service_Parts_Manual.pdf | Another rehosted OEM manual PDF |
| 5 organic | hydmechbandsawparts.com/ | Hyd-Mech parts microsite — ~10 words visible content, contact-form landing for AR Tools (Spokane Valley) |

**SERP features:**
- **AI Overview present** (async) with full structured response, 6 part numbers, 6 source citations
- No local pack (national informational query)
- No video pack on this query
- 2 paid ads top + 1 bottom — high commercial pressure

**Content gaps:**
- Nobody has a clean "symptoms → which part to suspect → DIY vs. call-a-tech" decision tree
- Two rehosted PDFs are great references but terrible reading experiences
- No `TechArticle` schema on any top organic result
- No FAQ addressing common owner questions

**E-E-A-T edge:** field-service experience. We've serviced S-20As. We speak to symptoms and lifespans from actual jobs (hedged language, no invented numbers).

## Page structure

- **Slug / route:** `app/resources/hyd-mech-s-20a-parts-list/page.tsx`
- **`<title>` (≤60 chars):**
  1. `Hyd-Mech S-20A Parts & Service Reference | Saw Service 3G` (57) — **recommended**
  2. `Hyd-Mech S-20A Parts List & Wear Items | 3G` (44)
  3. `S-20A Parts, Symptoms & Service Guide | Hyd-Mech | 3G` (54)
- **`<meta description>` (140–160 chars):**
  1. `A practical Hyd-Mech S-20A parts and service reference — top wear items, failure symptoms, and when to DIY vs. call a Texas-authorized tech.` (143) — **recommended**
  2. `Hyd-Mech S-20A parts overview, common failure symptoms, and service intervals from an authorized dealer. Free reference; service available.` (141)
  3. `Hyd-Mech S-20A owners: a plain-English parts and maintenance reference from a factory-authorized dealer. Decision tree for repair vs. service.` (146)
- **`<h1>`:** `Hyd-Mech S-20A Parts & Service Reference`
- **Outline (H2s):**
  1. About the Hyd-Mech S-20A (1 paragraph — capture AI Overview's first-sentence material)
  2. Top 5 Wear Parts on the S-20A (component CATEGORIES — see honesty constraint below)
  3. Common Failure Symptoms — and What They Usually Mean (symptom → cause, hedged)
  4. DIY vs. Call a Tech — Decision Tree (conversion section)
  5. Service Interval Reference (simple table, hedged)
  6. Official Hyd-Mech Resources (link out to OEM portal + manual PDF)
  7. Frequently Asked Questions (4 Q&A)
  8. Need Hands-On Help With Your S-20A? (CTA → Brief 1 + quote)
- **FAQ (4 Q&A):**
  1. "How often should I change the hydraulic filter on a Hyd-Mech S-20A?" — reference manual schedule, hedge with "typical"
  2. "What's the difference between S-20A Series II and Series III?" — year range + system differences
  3. "Can I replace S-20A blade guides myself?" — yes-with-caveats
  4. "Where can I get OEM Hyd-Mech S-20A parts in Texas?" — authorized dealer language → service funnel
- **Word count target:** **700–850 words.** AI Overview answers in ~200 words; we need enough beyond that to justify the click without padding.

## Structured data
- **`TechArticle`** — `headline`, `proficiencyLevel: "Expert"`, `dependencies: "Hyd-Mech S-20A band saw"`, `about: { @type: "Product", name: "Hyd-Mech S-20A Horizontal Pivot Band Saw", brand: "Hyd-Mech" }`, `author: { @id: "<LocalBusiness @id>" }`, `publisher: { @id: "<LocalBusiness @id>" }`, `datePublished`, `dateModified`
- **`FAQPage`** — one Question/Answer per FAQ item
- **`BreadcrumbList`** — Home → Resources → Hyd-Mech S-20A Parts & Service Reference
- **Avoid:** `Product` as page-level schema (we're not selling). `TechArticle.about.@type: "Product"` is fine inline.

## Internal links
- "Hyd-Mech Band Saw Repair" → `/services/hyd-mech-band-saw-repair` (Brief 1) — primary CTA in decision tree + closing
- "Authorized Hyd-Mech Dealer" → `/brands/hyd-mech` (Brief 2) — anchored in intro
- "Request a quote" → `/#quote`
- "Service area" → `/#coverage`
- Phone link `tel:+12818015612`

## Open Graph / Twitter
- **og:title:** `Hyd-Mech S-20A Parts & Service Reference | Saw Service 3G` (57)
- **og:description:** `Wear parts, failure symptoms, service intervals, and a DIY-vs-tech decision tree for the Hyd-Mech S-20A — from an authorized dealer.` (130)
- **og:image:** real 1200×630 of an S-20A close-up (head/guide arm preferred)
- **og:type:** `article` (resource page, not landing)
- **twitter:card:** `summary_large_image`

## Notes for Frontend (with honesty constraints)

**IMPORTANT honesty constraints — read carefully:**
- **DO NOT publish specific OEM part numbers** (340775, 363105, 813176, etc.) without verified current-database access. Use category names ("Carbide blade guide inserts", "Hydraulic filter element", "Guide arm locking handle", "Coolant pump", "Tensioner handwheel", "Chip brush"). Link to OEM portal or quote form for actual P/N lookup.
- **DO NOT fabricate service intervals.** Service Interval Reference table sourced from official Hyd-Mech S-20A Series II/III manual. If manual not available, use "Typical usage tier → likely service window — confirm against your manual" with hedge language.
- **DO NOT promise parts in stock.** We service, we don't retail. "We can source OEM parts as part of a service job" is fine. "We have S-20A blade guides in stock" is not.
- Per `CLAUDE.md` §4 — "no fabricated metrics, no unverifiable claims." Applies more strongly to a technical reference page than a service page.

**Implementation:**
- Decision tree: simple `<dl>` with symptoms `<dt>` + DIY/call-tech outcomes `<dd>`. Don't over-engineer with collapsible JS — keep crawlable.
- **Outbound links:** ONE link each to (a) OEM Hyd-Mech S-20A product page, (b) OEM parts/support page. `rel="noopener"`, follow. Don't link Sawblade/TS3Saw/Bandsawparts — those compete with our service offer.
- Add to `app/sitemap.ts`.
- **Crawl-friendliness for AI Overview citation:** SSR-rendered. Don't gate FAQ answers behind client-side accordions — use `<details>`/`<summary>` or render open-by-default.

## Cited MCP calls (audit trail)
- `dataforseo_labs_google_keyword_overview` × `[hyd-mech s-20a parts list, hyd-mech s20a parts list, hyd mech s-20a parts list, hyd mech s20a parts list]` — 2026-05-12 (returned 2 of 4 — hyphen variants only)
- `dataforseo_labs_search_intent` × `hyd-mech s-20a parts list` — 2026-05-12
- `serp_organic_live_advanced` × `hyd-mech s-20a parts list`, Houston, depth 10 — 2026-05-12 (AI Overview with 6 citations captured)
- `on_page_content_parsing` × `hydmechbandsawparts.com/` — 2026-05-12 (rank 5, confirmed thin content)
- `on_page_content_parsing` × `fabtechsolutions.com/hydmech-saw-parts-repair/` — 2026-05-12 (S-Series model list source)
