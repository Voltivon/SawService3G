# SEO Brief: Tsune Band Saw Repair (Service Page)

## Target keyword
- **Primary:** `tsune band saw repair`
  - Volume: empty / below floor for the exact long-tail (`keyword_overview` 2026-05-12)
  - Search intent for exact phrase: transactional 0.573 (`search_intent` 2026-05-12)
  - Note: `tsune band saw`, `tsune bandsaw`, `tsune saw repair` all returned empty `keyword_info` in `keyword_overview` — the smallest brand cluster in this batch.
- **Volume justification (parent cluster):**
  - `tsune saw` — **110/mo**, LOW competition (0.22), CPC $1.52, intent informational (`keyword_overview` 2026-05-12) — primary parent
  - `tsune america` — **170/mo**, LOW (0.10), CPC $0.87, intent informational + navigational (same call) — secondary parent (US arm: Tsune America Inc., Wood Dale IL)
  - `tsune circular saw` — 10/mo, transactional (same call) — Tsune's specialty is high-precision **carbide circular saws** (not band saws); this brief should expand scope from "band saw repair" → "saw repair" to capture intent
- **Editorial note on positioning:** Tsune Seiki (Japan) is primarily known for carbide circular cold saws — high-precision metal cutting machinery — not traditional band saws. The route name `tsune-band-saw-repair` is honest but limits volume capture. **Recommendation:** Frame the page as "Tsune Saw Repair" in title/H1/copy while keeping the URL slug as `tsune-band-saw-repair` for the brand-name search match. Cover both Tsune carbide circular saws (FA-, FMB-, MCS-series) and Tsune band saws.
- **Secondary keywords (cited):**
  - `tsune saw` — 110/mo, informational (`keyword_overview`)
  - `tsune america` — 170/mo, informational/navigational (same call)
  - `tsune circular saw` — 10/mo, transactional (same call)
  - SERP-related (no volume confirmed): "tsune band saw repair near houston, tx", "Tsune band saw repair near me", "Tsune band saw repair parts", "Old tsune band saw repair" (`serp_organic_live_advanced` 2026-05-12)

## Search intent
**Transactional 0.573** for `tsune band saw repair`. Parent `tsune saw` is informational and `tsune america` is informational-navigational (people looking for Tsune's US arm).

**Implication:** Service-page treatment, but lead with the brand-education context — many searchers don't realize Tsune's specialty is carbide circular saws. Acknowledge that upfront, then offer service on both saw types. Address the navigational `tsune america` intent by transparently citing Tsune America Inc. (Wood Dale IL) in the FAQ.

## Top SERP competitors (Houston, EN, depth 10)
Source: `serp_organic_live_advanced` keyword=`tsune band saw repair`, location=Houston TX, 2026-05-12.

| Rank | URL | Title | Notes |
|------|-----|-------|-------|
| 3 (organic #1) | sawguides.com/nishijimax-and-tsune-saw-parts | "Quality Components for Tsune and Nishijimax Circular Saws" | SHARC Industries — confirms Tsune = circular saw, not band saw |
| 4 | houstonmts.com/.../bandsaw-repair | "Bandsaw Repair" | **Direct Houston competitor (Houston Machine Tool Services).** Generic bandsaw repair list. |
| 5 | productivity.com/builders/tsune | "Tsune" | Productivity Inc (national distributor) — describes Tsune saws as producing "very accurate parts faster than traditional band sawing" |
| 6 | woodgears.ca/bandsaw/tuneup.html | woodworking content — irrelevant |
| 7 | tsuneamerica.com/ | **OEM US (Tsune America Inc., Wood Dale IL)** |
| 8 | sawspec.com/tsune | "Tsune" | Saw & Specialty Corporation |
| 12 | youtube.com — Delta 14" bandsaw restoration | irrelevant (Delta brand) |
| 13 | tsune.co.jp/english | **OEM Japan (Tsune Seiki Co., LTD)** |

**Content gaps to exploit:**
- **Weakest SERP of any of the 5 brands** — competitor density is low, off-topic results pad the top 10 (woodworking content, Delta restoration). Ranking opportunity is highest here despite lowest volume.
- No Houston shop has a Tsune-specific page (Houston Machine Tool Services lists Tsune in a brand cloud but no model coverage)
- No FAQ or schema on any competitor
- No model-coverage list (Tsune lines: FA-series circular cold saws FA-250/FA-300A/FA-500A, FMB band saws, MCS series, NHC fully-automatic)
- Tsune's relative obscurity in the US market = anyone searching the brand is already pre-qualified (in-market for Tsune machinery specifically)

**E-E-A-T edge:** Saw Service 3G is not an authorized Tsune dealer. Tsune America Inc. (Wood Dale IL) is geographically distant from Houston. Lead with carbide-saw-specific technical expertise as the differentiator.

## SERP features
- **Video pack** (4 videos, position 1) — generic bandsaw tune-up content (Jonathan Katz-Moses, Wood and Stoane, etc.) — not Tsune-specific. Video relevance to query is loose.
- **People Also Ask** (4 Q): "Why is my band saw not working?", "What is the life expectancy of a bandsaw blade?", "How to service a band saw?", "Is it worth sharpening bandsaw blades?" — all generic, not Tsune-specific (further evidence the SERP is poorly served)
- **Local pack** (3): SI Machine Services, Metal Sawing Technology, Circle Saw — same Houston cast
- **No AI Overview** for this exact query — but parent `tsune america` likely triggers one
- **Images carousel** — mostly DIY/woodworking content, not Tsune-specific
- **Related searches:** heavy on geo modifiers + "Old tsune band saw repair" (legacy machinery sub-intent — owners with older Tsune equipment)

## Page structure
- **Slug / route:** `app/services/tsune-band-saw-repair/page.tsx`
- **`<title>` (≤60 chars):**
  1. `Tsune Saw Repair Houston | Carbide Circular & Band` (50) — **recommended** (broadens scope honestly)
  2. `Tsune Band Saw & Circular Saw Repair · Houston` (47)
  3. `Tsune Saw Repair in Houston, TX | Saw Service 3G` (49)
- **`<meta description>` (140–160 chars):**
  1. `Houston Tsune saw repair: FA-250/300A/500A carbide circular saws, FMB band saws and MCS automatics. Decades of high-precision saw experience. Call us.` (152) — **recommended**
  2. `On-site Tsune saw repair across Houston and Texas. Tsune carbide circular cold saws, FMB band saws and NHC automatics. Get a quote today.` (137)
  3. `Mobile Tsune saw service in Houston: FA-series cold saws, FMB band saws. Decades servicing high-precision Tsune machinery. Call now.` (134)
- **`<h1>`:** `Tsune Saw Repair in Houston — Carbide Circular Saws and Band Saws`
- **Outline (H2s):**
  1. Tsune Saw Repair — On-Site Across Houston (lead block; explain Tsune's specialty in carbide circular saws upfront)
  2. Tsune Repairs We Perform
  3. Tsune Models We Service (FA-series carbide circular cold saws — FA-250, FA-300A, FA-500A; FMB band saws; MCS series; NHC automatics)
  4. Common Tsune Issues We Fix (carbide blade alignment, hydraulic vise, servo positioning faults, coolant)
  5. Older Tsune Machines: Legacy Service (captures "Old tsune band saw repair" related-search intent)
  6. Our Process: From Call to Cutting Again
  7. Service Area: Houston, Texas & Surrounding
  8. Why Owners Choose Saw Service 3G for Tsune
  9. Frequently Asked Questions
  10. Get an Estimate
- **FAQ (4–5 Q&A):**
  1. "Are you an authorized Tsune dealer?" — **Honest:** No. Tsune America Inc. (Wood Dale IL) is the US OEM arm. We are an independent shop experienced with Tsune machinery.
  2. "What does Tsune make?" — Tsune Seiki Co., LTD (Japan) specializes in high-precision metal-cutting machinery — primarily carbide circular cold saws (FA-series), band saws (FMB), and fully automatic systems (NHC, MCS)
  3. "Which Tsune models do you repair?" — FA-250, FA-300A, FA-500A circular cold saws; FMB band saws; MCS / NHC automatics
  4. "Can you service older Tsune machines?" — Yes, decades of experience including legacy Tsune machinery
  5. "How fast can you respond in Houston?" — owner-confirmed window
- **Word count target:** **800–1,000 words.** Smallest brand cluster of the 5 — calibrate effort accordingly; quality + technical specificity beat raw depth.

## Structured data
- **`Service`** — `serviceType: "Tsune saw repair and maintenance"`, `provider: { @id: "<LocalBusiness @id>" }`, `areaServed: ["Houston", "Texas", "Gulf Coast"]`, `brand: { @type: "Brand", name: "Tsune" }`, `audience.audienceType: "Industrial fabricators, machine shops, steel service centers, precision metal cutting"`
- **`FAQPage`** — 4–5 Q&A
- **`BreadcrumbList`** — Home → Services → Tsune Saw Repair
- **Skip:** `Product`

## Internal links
- "Contact us" → `/#contact`
- "Hyd-Mech band saw repair" → `/services/hyd-mech-band-saw-repair`
- "Behringer band saw repair" → `/services/behringer-band-saw-repair` (sibling — both German/Japanese high-precision platforms)
- "About Saw Service 3G" → `/#about`
- "Service area" → `/#coverage`
- Phone link `tel:+12817045589`

## Open Graph / Twitter
- **og:title:** `Tsune Saw Repair Houston | Carbide & Band Saws` (47)
- **og:description:** `On-site Tsune saw service across Houston: FA-250/300A/500A carbide circular saws, FMB band saws, MCS automatics. Decades experienced.` (132)
- **og:image:** needs new image — Tsune saw under service. If no Tsune photo exists, reuse field hero with note that Tsune-specific photography is pending (honesty rule §4).
- **og:type:** `website`
- **twitter:card:** `summary_large_image`

## Notes for Frontend
- Create `app/services/tsune-band-saw-repair/page.tsx` (URL kept band-saw-named for brand-search match; on-page copy broadens to "saw" for honesty).
- Add to `app/sitemap.ts` + Nav.
- **Honesty constraint:** No authorized-dealer claim. Approved: "experienced with Tsune machinery," "decades of high-precision saw service," "trained on FA-series and FMB platforms." Forbidden: "authorized," "factory-authorized," "OEM-certified," "Tsune-trained" (implies certification we don't have).
- **Scope-honesty constraint:** Page must NOT claim band-saw-only specialty for Tsune. Tsune's flagship is carbide circular saws. Lead paragraph must reflect that. The URL slug is a search-keyword match; the on-page truth-telling is the carbide-circular reality.
- This is the smallest brand cluster (~110–170/mo) and the weakest SERP — last to implement in launch priority order, but easiest to rank on.

## Cited MCP calls (audit trail)
- `dataforseo_labs_google_keyword_overview` × `[tsune band saw repair, tsune band saw, tsune saw repair, tsune bandsaw, tsune saw, tsune america, tsune circular saw]` — 2026-05-12
- `dataforseo_labs_search_intent` × `[tsune band saw repair, tsune band saw]` — 2026-05-12
- `serp_organic_live_advanced` × `tsune band saw repair`, Houston TX, EN, depth 10 — 2026-05-12