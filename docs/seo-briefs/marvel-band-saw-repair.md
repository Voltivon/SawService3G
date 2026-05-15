# SEO Brief: Marvel Band Saw Repair (Service Page)

## Target keyword
- **Primary:** `marvel band saw repair`
  - Volume: 10/mo, KD 0, competition LOW (`dataforseo_labs_google_keyword_overview`, last_updated 2026-04-13)
  - Note: Exact long-tail is at DataForSEO's measurement floor. Page is attached to the parent cluster.
  - Search intent: transactional 0.651 (`dataforseo_labs_search_intent`, 2026-05-12)
- **Volume justification (parent cluster):**
  - `marvel band saw` — **390/mo**, HIGH competition (0.98), CPC $1.40, intent transactional 0.865 (`keyword_overview` 2026-05-12)
  - `marvel saw` — **390/mo**, HIGH competition (1.0), CPC $2.16 (same call)
  - These are clustered (`core_keyword: marvel band saws`). Treat parent cluster as ~390/mo, not additive.
- **Secondary keywords (cited):**
  - `marvel series 8 mark ii` — 70/mo, HIGH, CPC $1.78, transactional (`keyword_overview` 2026-05-12) — most-searched Marvel model
  - `marvel band saw parts` — 20/mo, MEDIUM (0.36), CPC $3.66, transactional (same call)
  - `marvel vertical band saw` — 20/mo, HIGH (1.0), CPC $2.18, transactional (same call)
  - `marvel saw repair` — 10/mo, LOW (0.29), CPC $6.61, informational (same call)
  - `marvel saw service` — 10/mo, LOW (0.27), CPC $8.64, navigational 0.402 (`search_intent` 2026-05-12)
  - SERP-related (no volume confirmed): "Marvel band saw repair shop near me", "Marvel saw parts", "Marvel saw repair near me" (`serp_organic_live_advanced` related_searches 2026-05-12)

## Search intent
**Transactional 0.651** for `marvel band saw repair`. Parent `marvel band saw` is transactional 0.865 — high purchase-intent cluster.

**Implication:** Service-page treatment is correct. Lead with on-site repair offer + model coverage; relegate "what is Marvel" history to footer/about-block.

## Top SERP competitors (Houston, EN, depth 10)
Source: `serp_organic_live_advanced` keyword=`marvel band saw repair`, location=Houston TX, 2026-05-12.

| Rank | URL | Title | Notes |
|------|-----|-------|-------|
| 3 (organic #1) | ts3machine.com/marvel | "MARVEL - TS3 Machine \| Saws, Services, Sales, & Repairs" | National competitor. Marvel-branded landing page with repair + sales bundling. No FAQ visible. |
| 4 | simase-llc.com/brands-we-serve/marvel-band-saw-repair | "Marvel Band Saw Repair" | **Direct Houston competitor (SI Machine).** "20+ years," Texas + Louisiana coverage. No schema. Mirrors their Hydmech page template. |
| 5 | amadamca.com/service-request | "Service Support" | **OEM (Amada owns Marvel since 1996).** Phone-only — 847-285-4800 ext341. No local SEO. |
| 6 | practicalmachinist.com/...1943-marvel-8-restoration | forum | informational/historical |
| 7 | midstatessawservice.com | "Mid States Saw Service" | Iowa-based, sells Marvel + Amada. National competitor. |
| 8 | sawguides.com/bandsawrepair | "Band Saw Repair Service" | SHARC Industries — Ohio/Michigan, no Texas presence. |
| 10 | bandsawmanuals.com/...marvel-series-8-mark-ii | content piece | informational |
| 11 | metalsaw.com/ | "Metalsaw.com" | **Direct Houston competitor (Metal Sawing Technology).** Mentions parts for "Amada, Marvel, Doall, Hydmech, HEM" — broad. Houston-based. |

**Content gaps to exploit:**
- No Houston-specific Marvel page from a service-only shop (SI Machine has one but no schema; Metalsaw bundles it)
- No model-coverage list on any Top-5 page — Marvel models (Series 8 Mark II/III/IV, Series 81, Series 15A9, Spartan, Premium 15A) are searched independently
- No FAQ section on any competitor
- No JSON-LD `Service` or `FAQPage` markup on any competitor
- Amada/OEM contact is generic — owners want a local human, not a phone tree
- No mention of Marvel's Amada ownership (since 1996, Oshkosh WI plant) — opportunity to demonstrate expertise

**E-E-A-T edge:** Saw Service 3G is NOT an authorized Marvel dealer (per owner intake — only Hyd-Mech is authorized). Lead instead with experience signals: "decades servicing Marvel," "every Marvel series from Series 8 through Premium," "trained on Amada-Marvel platform."

## SERP features
- **Video pack** (4 YouTube videos, position 1) — major signal. Videos cover Marvel feed worm gears, Armstrong Blum Marvel cleaning, Marvel No. 8 rewiring, blade change procedures. **Embed our own field-service video if available**, or link to YouTube channel placeholders for future content.
- **AI Overview** (asynchronous, position 2). Write a 50-60 word "what is Marvel band saw repair" intro paragraph for AI Overview citation eligibility.
- **Discussions and forums block** (Practical Machinist, JustAnswer) — informational sub-intent confirmed
- **Local pack** (3 listings): Circle Saw (4.5, 144 reviews), SI Machine Services (4.2, 5), Metal Sawing Technology (4.0, 16)
- **Related searches:** "Marvel band saw repair near me", "Marvel band saw repair shop near me", "Marvel saw parts", "Marvel Saw company" — feed into FAQ + internal anchor variety
- **No People Also Ask** block for the exact `marvel band saw repair` query (vs. `amada band saw repair` which has PAA) — opportunity for unopposed FAQ schema capture

## Page structure
- **Slug / route:** `app/services/marvel-band-saw-repair/page.tsx`
- **`<title>` (≤60 chars):**
  1. `Marvel Band Saw Repair Houston | Saw Service 3G` (49) — **recommended**
  2. `Marvel Band Saw Repair & Service in Houston, TX` (48)
  3. `Marvel Band Saw Repair · Series 8 to Premium | 3G` (50)
- **`<meta description>` (140–160 chars):**
  1. `Houston Marvel band saw repair: Series 8 Mark II/III/IV, Series 81, Premium and Spartan. Decades servicing Marvel saws on site across Texas. Call today.` (153) — **recommended**
  2. `On-site Marvel band saw repair across Houston and Texas. Drive systems, hydraulics, feed worm gears, blade tracking. Every Marvel series. Call now.` (149)
  3. `Mobile Marvel band saw repair from a Houston shop with decades on the Amada-Marvel platform. Series 8, Series 81, Premium and Spartan. Get a quote.` (150)
- **`<h1>`:** `Marvel Band Saw Repair in Houston — Every Marvel Series, On-Site`
- **Outline (H2s):**
  1. Marvel Band Saw Repair, Done On-Site Across Houston (lead block, AI Overview target)
  2. Marvel Repairs We Perform (component list)
  3. Marvel Models We Service (Series 8 Mark II/III/IV, Series 81, Series 15A9, Spartan, Premium 15A, vertical band saws)
  4. Common Marvel Issues We Fix (feed worm gear, hydraulic down-feed, blade tracking, coolant)
  5. Our Process: From Call to Cutting Again
  6. Service Area: Houston, Texas & Surrounding States
  7. Why Owners Choose Saw Service 3G for Marvel (3 reasons — experience, mobile, family-owned)
  8. Frequently Asked Questions
  9. Get an Estimate
- **FAQ (4–5 Q&A):**
  1. "Are you an authorized Marvel dealer?" — **Honest answer:** No — Amada is the OEM. We are not an authorized Marvel dealer. We are an independent shop with decades of experience servicing Marvel band saws.
  2. "Which Marvel models do you repair?" — Series 8 Mark II, III, IV; Series 81; Series 15A9; Spartan; Premium 15A; verticals
  3. "Why is my Marvel feed worm gear failing?" — wear pattern, lubrication schedule, replacement signals
  4. "How fast can you respond in Houston?" — owner-confirmed window (do not fabricate)
  5. "Who makes Marvel band saws?" — Amada Marvel, Inc., 3501 Marvel Drive, Oshkosh WI — owned by Amada since 1996
- **Word count target:** **900–1,100 words.** Competitor pages are 400–700; beat with model list + FAQ + technical depth.

## Structured data
- **`Service`** — `serviceType: "Marvel band saw repair and maintenance"`, `provider: { @id: "<LocalBusiness @id>" }`, `areaServed: ["Houston", "Texas", "Greater Gulf Coast"]`, `brand: { @type: "Brand", name: "Marvel" }`, `audience.audienceType: "Industrial fabricators, machine shops, steel service centers"`
- **`FAQPage`** — one Question/Answer pair per FAQ item (4–5)
- **`BreadcrumbList`** — Home → Services → Marvel Band Saw Repair
- **Skip:** `Product` (this is a service)

## Internal links
- "Get a quote" → `/#quote` (primary CTA)
- "Hyd-Mech band saw repair" → `/services/hyd-mech-band-saw-repair` (sibling cross-link, brand authority)
- "About Saw Service 3G" → `/#about`
- "Service area" → `/#coverage`
- "Other brands we service" → `/#services` (or future `/brands`)
- Phone link `tel:+12818015612`

## Open Graph / Twitter
- **og:title:** `Marvel Band Saw Repair Houston | Every Series, On-Site` (55)
- **og:description:** `On-site Marvel band saw repair across Houston: Series 8 Mark II/III/IV, Series 81, Premium, Spartan. Decades of experience.` (124)
- **og:image:** needs new image — 1200×630 of a Marvel band saw being serviced on a shop floor. **Real photo from field** (honesty rule §4). If no Marvel-specific photo exists yet, use the same field-service hero used on Hyd-Mech and note in the brief that a brand-specific shot is pending.
- **og:type:** `website`
- **twitter:card:** `summary_large_image`

## Notes for Frontend
- New page beyond Hyd-Mech. Create `app/services/marvel-band-saw-repair/page.tsx`.
- Add route to `app/sitemap.ts`.
- Extend Nav / Services submenu to include Marvel once page lands.
- Reuse `QuoteForm` at bottom OR anchored CTA to `/#quote` (matches Hyd-Mech pattern).
- **Honesty constraint:** Page must NOT claim authorized-dealer status for Marvel. Approved language: "experienced," "decades servicing," "every Marvel series," "trained on the Amada-Marvel platform." Forbidden language: "authorized," "factory-authorized," "OEM-certified," "factory-backed." Per owner intake, only Hyd-Mech carries that authorization.
- Confirm `metadataBase` resolves canonical (apex vs www) per CLAUDE.md §10.

## Cited MCP calls (audit trail)
- `dataforseo_labs_google_keyword_overview` × `[marvel band saw repair, marvel band saw, marvel saw, marvel band saw parts, marvel vertical band saw, marvel saw repair, marvel saw service, marvel series 8 mark ii, marvel band saw service]` — 2026-05-12
- `dataforseo_labs_search_intent` × `[marvel band saw repair, marvel band saw, marvel saw service]` — 2026-05-12
- `serp_organic_live_advanced` × `marvel band saw repair`, Houston TX, EN, depth 10 — 2026-05-12