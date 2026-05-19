# SEO Brief: HEM Saw Repair (Service Page)

## Target keyword
- **Primary:** `hem saw repair`
  - Volume: empty / below floor for the exact long-tail (`keyword_overview` 2026-05-12 returned no `search_volume` field for this exact phrase — implicit <10/mo)
  - Search intent for exact phrase: commercial 0.357, transactional 0.295, informational 0.179 (`search_intent` 2026-05-12) — split intent confirms service-page treatment
- **Volume justification (parent cluster — strongest of all 5 briefs):**
  - `hem saw` — **1,300/mo**, HIGH competition (0.97), KD 4, CPC $1.30, intent transactional (`keyword_overview` 2026-05-12) — **highest-volume brand cluster in this batch**
  - `hem bandsaw` — **170/mo**, HIGH (1.0), KD 12, CPC $0.59, intent transactional 0.927 (same call) — clustered as `core_keyword: he&m bandsaw`
  - `hem saw parts` — **110/mo**, LOW (0.05), intent transactional 0.738 (same call) — clustered as `core_keyword: he&m saw parts`
  - Note: Google clusters HEM and HE&M together (`he&m bandsaw`, `he&m saw parts`). Cluster total is not strictly additive; treat as ~1,300–1,500/mo combined search demand.
- **Secondary keywords (cited):**
  - `hem bandsaw` — 170/mo, KD 12 (`keyword_overview`)
  - `hem saw parts` — 110/mo, LOW (same)
  - `hem saw maintenance` — 10/mo, LOW (0.14), navigational+transactional (same call)
  - SERP-related (no volume): "hem saw repair near houston, tx", "hem saw repair near katy, tx", "HE&M Saw troubleshooting", "HE&M saw parts diagram" (`serp_organic_live_advanced` 2026-05-12)

## Search intent
**Mixed: commercial / transactional / informational** for the exact `hem saw repair`. Parent `hem saw` is transactional, `hem bandsaw` transactional 0.927.

**Implication:** Strong service-page treatment with a deeper troubleshooting block than the other 5 briefs — the parent cluster carries strong informational sub-intent ("HE&M Saw troubleshooting" appears in related searches). Add a "Common HE&M Issues" H2 that captures informational traffic and converts to service requests.

## Top SERP competitors (Houston, EN, depth 10)
Source: `serp_organic_live_advanced` keyword=`hem saw repair`, location=Houston TX, 2026-05-12.

| Rank | URL | Title | Notes |
|------|-----|-------|-------|
| 1 | hemsaw.com/sales/services | "Service" | **OEM (HE&M Saw, Pryor OK).** Phone-only — 918-824-6181. National dispatch, not Houston-local. |
| 2 | hemsaw.com/contact/service-and-parts-contact | "HE&M Saw \| Service Contact" | OEM. M-F 7:30am–4:30pm Pryor OK. |
| 3 | metalsaw.com/ | "Metalsaw.com" | **Direct Houston competitor (Metal Sawing Technology).** Houston-based. Generic multi-brand. |
| 4 | hemsaw.com/sales/reconditioning-saws | "Reconditioning Saws" | OEM upsell page. |
| 5 | mapquest.com/.../metal-sawing-technology | directory | confirms Metal Sawing Technology services HEM in Houston |
| 6 | hemsaw.com/support | "HE&M Saw \| Support" | OEM. |
| 7 | hemsaw.com/support/documentation | "Technical Support Documentation" | OEM. |
| 8 | youtube.com — HE&M Saw NG120XL & NG160 trigger switch | OEM YouTube tutorial |
| 9 | hemsaw.com/sales/service-team | OEM |
| 10 | mac-tech.com/.../hem-saws-sales-parts-and-expert-service | "HE&M Saws: Sales, Parts, and Expert Service" | National competitor (Wisconsin) |

**Knowledge graph:** Saw House, Inc. (Houston, 4.5★, 227 reviews) — but this is an arborist supply store, not industrial. Likely an irrelevance Google is serving because of "saw repair" lexical match.

**Content gaps to exploit:**
- **OEM dominates SERP** (6 of top 10 from hemsaw.com) — opportunity is the local-pack gap: no Houston shop specifically branding HE&M service
- Metalsaw.com is the only Houston-relevant organic competitor and it's generic (mentions HEM among many brands, no dedicated HE&M page)
- No FAQ schema, no JSON-LD on any competitor
- No model-coverage list (HE&M lines: H, V, Saber, NG, DC — owners search by model number, e.g., H130A, V100LA-3, NG120XL)
- Local pack absent for this exact query (replaced by a Knowledge Graph for an unrelated business) — local pack capture is wide open

**E-E-A-T edge:** Saw Service 3G is not an authorized HE&M Saw dealer. Use experience-only language. Differentiate by being Houston-local where HE&M's own dispatch is in Pryor, OK (~530 miles away).

## SERP features
- **Knowledge graph** (Saw House — irrelevant arborist business) — not exploitable but tells us the SERP is loose; local-business-schema for our page may displace it
- **No AI Overview** for this exact query (vs. the other 4 briefs which have AI Overview) — but the parent cluster `hem saw` likely triggers it. Still write the lead paragraph with AI Overview eligibility in mind.
- **No People Also Ask, no video pack, no local pack** for the exact query — minimal SERP features means organic ranking + GBP listing both have outsized impact
- **Related searches:** geo modifiers ("near houston, tx", "near katy, tx") confirm the local opportunity

## Page structure
- **Slug / route:** `app/services/hem-saw-repair/page.tsx`
- **`<title>` (≤60 chars):**
  1. `HEM Saw Repair Houston | HE&M Bandsaw Service · 3G` (50) — **recommended** (includes HE&M variant Google clusters)
  2. `HE&M Saw Repair in Houston, TX | Saw Service 3G` (47)
  3. `HEM Bandsaw Repair & Service Houston | Saw Service 3G` (53)
- **`<meta description>` (140–160 chars):**
  1. `Houston HEM (HE&M) saw repair: H-Series, V-Series, Saber, NG and DC. On-site service across Texas with decades on HE&M Saw platforms. Call today.` (148) — **recommended**
  2. `Local HE&M Saw repair in Houston — when Pryor is 500 miles away. H, V, NG, Saber, DC lines. Mobile service across the Gulf Coast. Call us.` (140)
  3. `Decades servicing HEM band saws across Houston: blade tracking, hydraulics, drive belts, controls. H-Series through NG-Series. Get a quote.` (143)
- **`<h1>`:** `HEM Saw Repair in Houston — Local Service for HE&M Band Saws`
- **Outline (H2s):**
  1. HEM Band Saw Repair — On-Site, Across Houston (lead block, AI Overview target; spell out HEM ↔ HE&M)
  2. HE&M Repairs We Perform
  3. HE&M Models We Service (H-Series H90A/H105A/H130A; V-Series V100LA-3/V125LM/V140LA; Saber 360/600; NG120XL/NG160; DC)
  4. Common HE&M Issues We Fix (blade tracking on V-Series, hydraulic drift on H-Series, NG control faults, drive belt wear) — captures informational sub-intent
  5. Our Process: From Call to Cutting Again
  6. Why Local Beats Pryor: Service Area & Response
  7. Why Owners Choose Saw Service 3G for HEM
  8. Frequently Asked Questions
  9. Get an Estimate
- **FAQ (5 Q&A):**
  1. "Are you an authorized HE&M Saw dealer?" — **Honest:** No. We are an independent shop with decades servicing HE&M band saws. HE&M's own service department dispatches from Pryor, OK.
  2. "Which HEM models do you repair?" — H, V, Saber, NG, DC lines (list specific model numbers)
  3. "Where are HEM saws made?" — Pryor, Oklahoma — HE&M Saw, Inc. founded 1989
  4. "My HE&M NG isn't cutting straight — what's wrong?" — blade tracking + guide bearing wear + tension
  5. "How fast can you respond in Houston?" — owner-confirmed window
- **Word count target:** **1,000–1,200 words.** Highest-volume cluster of the 5 — invest more depth here.

## Structured data
- **`Service`** — `serviceType: "HEM band saw repair and maintenance"`, `provider: { @id: "<LocalBusiness @id>" }`, `areaServed: ["Houston", "Texas", "Gulf Coast"]`, `brand: { @type: "Brand", name: "HE&M Saw" }` (use the ampersand canonical spelling for the schema; H1 can be "HEM"), `audience.audienceType: "Industrial fabricators, machine shops, steel service centers"`
- **`FAQPage`** — 5 Q&A
- **`BreadcrumbList`** — Home → Services → HEM Saw Repair
- **Skip:** `Product`

## Internal links
- "Contact us" → `/#contact`
- "Hyd-Mech band saw repair" → `/services/hyd-mech-band-saw-repair`
- "Marvel band saw repair" → `/services/marvel-band-saw-repair`
- "About Saw Service 3G" → `/#about`
- "Service area" → `/#coverage`
- Phone link `tel:+12817045589`

## Open Graph / Twitter
- **og:title:** `HEM (HE&M) Saw Repair Houston | Local HE&M Service` (51)
- **og:description:** `Local HEM saw repair across Houston: H, V, Saber, NG and DC lines. Decades on HE&M platforms. Faster than Pryor, OK dispatch.` (124)
- **og:image:** needs new image — real shop photo of an HE&M saw under service. Brand-specific photo preferred; reuse field hero as fallback.
- **og:type:** `website`
- **twitter:card:** `summary_large_image`

## Notes for Frontend
- Create `app/services/hem-saw-repair/page.tsx`.
- **Spelling note:** Brand is "HE&M Saw" with an ampersand. Google clusters HEM ↔ HE&M (confirmed by `core_keyword: he&m bandsaw`). Use "HEM" in title for searchability, "HE&M" in body for accuracy. Match both in metadata, schema, and OG.
- Add to `app/sitemap.ts` + Nav.
- **Honesty constraint:** No authorized-dealer claim. Approved: "decades servicing," "experienced with every HE&M line," "trained on H, V, NG and Saber platforms." Forbidden: "authorized," "factory-certified," "OEM partner."
- This brief has the highest-volume parent cluster (1,300/mo `hem saw` + 170/mo `hem bandsaw` + 110/mo `hem saw parts`) — prioritize implementation timing.

## Cited MCP calls (audit trail)
- `dataforseo_labs_google_keyword_overview` × `[hem saw repair, hem saw service, hem saw parts, hem bandsaw, hem saw maintenance, hem saw, hem band saw repair]` — 2026-05-12
- `dataforseo_labs_search_intent` × `[hem saw repair, hem bandsaw, hem saw parts]` — 2026-05-12
- `serp_organic_live_advanced` × `hem saw repair`, Houston TX, EN, depth 10 — 2026-05-12