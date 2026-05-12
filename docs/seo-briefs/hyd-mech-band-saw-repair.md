# SEO Brief: Hyd-Mech Band Saw Repair (Service Page)

## Target keyword
- **Primary:** `hyd-mech band saw repair`
  - Note: This exact long-tail did NOT return data in `dataforseo_labs_google_keyword_overview` (empty `items[]`, 2026-05-12). That means search volume is below DataForSEO's reporting floor (~10/mo). It is, however, the most relevant transactional intent string per the SERP — the top organic result (S I Machine Services) targets it exactly, and there's an active local pack for it in Houston.
  - **Search intent for this exact phrase** (source: `dataforseo_labs_search_intent`, 2026-05-12): navigational 0.333, transactional 0.303, commercial 0.218 — split intent, but transactional+commercial sum to 0.521, justifying a service-page treatment.
- **Volume justification (parent cluster):** Because the long-tail itself is below-floor, we attach this page to the parent cluster:
  - `hyd-mech band saw` — 480/mo, KD HIGH (competition 1.0), CPC $5.45 (source: `dataforseo_labs_google_keyword_overview`, last_updated 2026-04-19)
  - `hyd mech bandsaw` — 480/mo, KD HIGH, CPC $5.45 (same call)
  - `band saw hyd mech` — 480/mo, KD HIGH, CPC $5.45 (same call)
  - These three are clustered by Google (same `core_keyword: hyd-mech band saw`), so they are NOT additive. **Treat the parent cluster as ~480/mo, not 1,440.**
- **Secondary keywords:**
  - `hyd-mech horizontal band saw` — 20/mo, HIGH competition, CPC $2.22
  - `hyd mech horizontal band saw` — 20/mo, HIGH, CPC $2.22
  - `HYDMECH service phone number`, `HYDMECH bandsaw Manual`, `Hydmech saw parts`, `Hyd-Mech Parts distributors` — SERP-derived (related_searches), no volume data

## Search intent
**Mixed: navigational/transactional/commercial.** For the parent cluster `hyd-mech band saw` intent is transactional 0.951.

**Implication:** Page must serve three intents simultaneously — (1) people finding Hyd-Mech the manufacturer (navigational), (2) people looking to hire a repair shop (transactional/commercial), (3) people researching what's wrong with their saw (informational). Lead with strong "Authorized Hyd-Mech Dealer" trust signaling.

## Top SERP competitors (Houston, EN, depth 10)

| Rank | URL | Title | Notes |
|------|-----|-------|-------|
| 1–3 | hydmech.com/{support,contact,/} | OEM | Thin manufacturer pages |
| 4 | simase-llc.com/brands-we-serve/hydmech-band-saw-repair | "HYDMECH Band Saw Repair" | **Direct Houston competitor.** ~570 words. H2s: Common Pitfalls / Our Approach / Services (Mechanical, Calibration, Electrical, Hydraulic & Pneumatic, Coolant & Chip, Parts) / Process / Service Area. No FAQ. No schema. $416 assessment fee. |
| 5 | reddit forum | informational | n/a |

**SERP features:** AI Overview (async), video pack (4 YouTube videos), People Also Ask (8 questions), local pack (3 listings — S I Machine #1, Hydmech Canada #2, Hawk Saw Blades #3), images pack, related searches.

**Content gaps to exploit:**
- No model-coverage list (S20A, DM-10, V-25, H-22A, etc.) — owners search by model
- No FAQ section despite PAA demand
- No JSON-LD structured data on competitor pages
- No mention of authorized dealer status (S I Machine says "20+ years" but not OEM-authorized)
- No video embeds despite video pack ranking

**E-E-A-T edge:** Saw Service 3G is an authorized Hyd-Mech dealer. S I Machine is not. Make it prominent.

## SERP features

- **AI Overview** (async). Write a 50–60 word "what is Hyd-Mech band saw repair" intro paragraph for AI Overview citation.
- **People Also Ask** (filter the drift, use these for FAQ):
  - "Where are Hyd-Mech saws made?"
  - "Why is my Hyd-Mech band saw not cutting straight?"
  - "How often should I service my Hyd-Mech band saw?"
  - "Can I get same-day Hyd-Mech repair in Houston?"
- **Local pack:** yes (3 listings)
- **Video pack:** yes (4 YouTube videos) — opportunity to embed our own field videos
- **Image pack:** yes

## Page structure

- **Slug / route:** `app/services/hyd-mech-band-saw-repair/page.tsx`
- **`<title>` (≤60 chars):**
  1. `Hyd-Mech Band Saw Repair Houston | Saw Service 3G` (52) — **recommended**
  2. `Authorized Hyd-Mech Band Saw Repair & Service | 3G` (51)
  3. `Hyd-Mech Band Saw Repair | Authorized Dealer | 3G` (50)
- **`<meta description>` (140–160 chars):**
  1. `Authorized Hyd-Mech dealer providing on-site band saw repair across Houston and Texas. S-Series, DM, V-Series, H-Series. Call for same-day service.` (149) — **recommended**
  2. `Mobile Hyd-Mech band saw repair from a factory-authorized Texas dealer. Drive systems, hydraulics, blade tracking, controls. Get a quote today.` (146)
  3. `Saw Service 3G is an authorized Hyd-Mech dealer offering on-site band saw repair across Houston. Hydraulics, drive, electrical, controls.` (140)
- **`<h1>`:** `Hyd-Mech Band Saw Repair in Houston — Authorized Dealer Service`
- **Outline (H2s):**
  1. Authorized Hyd-Mech Dealer — What That Means for Your Saw (trust block)
  2. Hyd-Mech Repairs We Perform (component list)
  3. Hyd-Mech Models We Service (model coverage list)
  4. Our Process: From Call to Cutting Again (4-step)
  5. Service Area: Houston, Texas & Beyond
  6. Why Owners Choose Saw Service 3G (3 reasons)
  7. Frequently Asked Questions (5 Q&A)
  8. Get an Estimate — Call or Request a Quote
- **FAQ (5 Q&A):**
  1. "Are you an authorized Hyd-Mech dealer?" — yes, factory-authorized with direct OEM parts + technical bulletins
  2. "Which Hyd-Mech models do you repair?" — list S-20, S-20A, S-23A, DM-10, DM-12, V-18, V-25, M-16A, M-20A, H-14A, H-18A, H-22A, H-26/44
  3. "Why is my Hyd-Mech band saw not cutting straight?" — blade tracking + guide-arm wear + hydraulic down-feed
  4. "How fast can you respond in Houston?" — owner's actual response window (don't fabricate)
  5. "Where are Hyd-Mech saws made?" — Woodstock ON + Conway AR
- **Word count target:** **900–1,100 words.** Competitor (S I Machine) is ~570; beat with model list + FAQ + dealer credential.

## Structured data
- **`Service`** — `serviceType: "Band saw repair and maintenance"`, `provider: { @id: "<LocalBusiness @id>" }`, `areaServed: ["Houston", "Texas", …]`, `brand: { @type: "Brand", name: "Hyd-Mech" }`, `audience.audienceType: "Industrial fabricators, machine shops, steel service centers"`
- **`FAQPage`** — one Question/Answer pair per FAQ item
- **`BreadcrumbList`** — Home → Services → Hyd-Mech Band Saw Repair
- **Skip:** `Product` (this is a service, not a SKU)

## Internal links
- "Get a quote" → `/#quote` (primary CTA)
- "Brands we service" → `/brands/hyd-mech` (Brief 2)
- "Hyd-Mech S-20A Parts & Service Reference" → `/resources/hyd-mech-s-20a-parts-list` (Brief 3) — anchored on "S-20A" in Models We Service
- "About Saw Service 3G" → `/#about`
- "Service area" → `/#coverage`
- "Other services" → `/#services`
- Phone link `tel:+12817045589`

## Open Graph / Twitter
- **og:title:** `Hyd-Mech Band Saw Repair Houston | Authorized Dealer` (52)
- **og:description:** `On-site Hyd-Mech band saw repair from a factory-authorized Texas dealer. Drive systems, hydraulics, blade tracking, controls.` (132)
- **og:image:** needs new image — 1200×630 of a Hyd-Mech saw being serviced on a shop floor. Real photo, not stock (honesty rule §4)
- **og:type:** `website`
- **twitter:card:** `summary_large_image`

## Notes for Frontend
- First new page beyond `app/page.tsx`. Create `app/services/hyd-mech-band-saw-repair/page.tsx` directly.
- Optional shared `app/services/layout.tsx` once Brief 2 + 3 land.
- Extend global Nav to include new routes once they exist.
- Reuse `QuoteForm` at bottom OR anchored CTA to `/#quote`.
- Add route to `app/sitemap.ts`.
- Confirm `metadataBase` resolves canonical URLs (apex vs www) per CLAUDE.md §10.
- **Honesty constraint:** "Authorized Hyd-Mech Dealer" claim is the central E-E-A-T. Owner intake confirms it; verify wording before publish.

## Cited MCP calls (audit trail)
- `dataforseo_labs_google_keyword_overview` × `[hyd-mech band saw, hyd-mech band saw repair, hyd mech bandsaw, band saw hyd mech]` — 2026-05-12
- `dataforseo_labs_search_intent` × all 4 primaries — 2026-05-12
- `serp_organic_live_advanced` × `hyd-mech band saw repair`, Houston, depth 10, PAA depth 2 — 2026-05-12
- `on_page_content_parsing` × `simase-llc.com/.../hydmech-band-saw-repair` — 2026-05-12
- `on_page_content_parsing` × `fabtechsolutions.com/hydmech-saw-parts-repair/` — 2026-05-12
- `dataforseo_labs_google_keyword_ideas` × `[hyd-mech band saw repair, hydmech repair]` — 2026-05-12
