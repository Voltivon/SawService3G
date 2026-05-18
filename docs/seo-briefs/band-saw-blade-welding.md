# SEO Brief: Band Saw Blade Welding (Service Page)

## Target keyword

- **Primary:** `band saw blade welding`
  - **Volume: 720/mo** (`keyword_overview` 2026-05-17, US)
  - **CPC:** $0.88 — `high_top_of_page_bid` $3.00 (commercial signal is real but moderate)
  - **Competition:** 0.82 (HIGH paid competition — but this measures **Google Ads** competition, not organic difficulty)
  - **KD:** not returned by `bulk_keyword_difficulty` (empty row — long-tail not in DFS KD index)
  - **Search-volume trend:** quarterly **+22**, yearly **-18** (recovering from a dip; healthy)
  - **Intent:** transactional 0.646 (`search_intent` 2026-05-17)

- **Cluster confirmation (same `keyword_info` block returned — these share a cluster):**
  - `band saw blade welder` — 720/mo, transactional 0.594 + commercial 0.326 secondary
  - `bandsaw blade welding` — 720/mo, `core_keyword: bandsaw blades welding`, transactional 0.484 + informational 0.277 secondary
  - `bandsaw blade welder` — 720/mo, transactional
  - **All four keywords return identical monthly_searches arrays** — Google clusters these as one query. Treat cluster volume as **~720/mo** (not additive). The space/no-space variant (`band saw` vs. `bandsaw`) is a synonym cluster — single canonical destination handles both.

- **Long-tail anchors with confirmed transactional intent (highest CTR potential):**
  - `weld band saw blade` — transactional **0.977** (highest pure-transactional signal in the cluster)
  - `band saw blade weld repair` — transactional **0.747**

- **Adjacent supporting terms (H2-level, NOT page targets — these support transactional depth):**
  - `stainless steel bandsaw blade` — 320/mo, transactional, qtr trend +23
  - `carbide band saw blade` — 320/mo, transactional, qtr trend +50 (rising fast — feature on page)
  - `band saw blade repair` — 50/mo, **LOW competition (0.09)**, informational primary / transactional secondary
  - `bandsaw blade welding near me` — 20/mo (low standalone, but high local intent — CPC $3.46 confirms commercial value)

- **SERP-derived secondary terms** (from `related_searches` on both SERPs, 2026-05-17):
  - `bandsaw blade welding near houston, tx` (geo-modifier — anchor in copy + LocalBusiness areaServed)
  - `bandsaw blade welding near katy, tx` (geo-modifier — internal link to `/service-area/katy`)
  - `Metal bandsaw blade welding near me`
  - `Best bandsaw blade welding near me`
  - `Bandsaw blade welding jig`, `Bandsaw blade welder Harbor freight`, `DIY bandsaw blade welder` — these are **DIY-intent and must NOT be targeted** (would dilute commercial focus and waste content depth on a non-buyer audience)

## Search intent

**Transactional 0.646** for `band saw blade welding` (`search_intent` 2026-05-17). Cluster average across 5 phrases: 0.69 transactional. Commercial-investigation (0.326) appears as secondary on `band saw blade welder`.

**Implication:** Strong "I need this done now" buyer intent dominates. Page must lead with a **transactional CTA above the fold** (phone + quote form), not with educational content. Educational H2s (the welding process, materials we weld) come **after** the buy-now block. Hedge: meaningful informational secondary on `bandsaw blade welding` (0.277) means we still need a short "what is band saw blade welding" explainer for the 25% of searchers in evaluate-mode — but it goes mid-page, not at the top.

## Top SERP competitors (Houston TX, EN, depth 10, 2026-05-17)

Source: `serp_organic_live_advanced` keyword=`band saw blade welding`, location=Houston TX. **The exact-match SERP is dominated by forums, YouTube, and OEM equipment vendors — NO local service shop owns this page**. The "near me" variant (`bandsaw blade welding near me`) shows the actual Houston competitive set.

### Exact-match SERP (`band saw blade welding`)

| Rank | URL | Type | Notes |
|------|-----|------|-------|
| Video carousel (pos 1) | YouTube MSC, John Heisz, Derek Melton, Occasional Machinist | Video pack | 4 videos — Google believes intent is partly how-to. We don't need to fight the video pack. |
| 2 (organic #1) | reddit.com/r/Welding | Forum | "Anyone here welding bandsaw blades?" — old forum thread |
| 3 | facebook.com/groups/norwoodsawyers | Forum | Norwood Sawmills community |
| 4 | sawmillcreek.org | Forum | Woodworking forum |
| PAA block (pos 5) | — | PAA | 4 questions (see SERP features) |
| 6, 7, 8 | **Local pack:** Circle Saw, Metal Sawing Technology, Hawk Saw Blades | Local pack | **All three are Houston competitors. Local pack DOES fire on the head term — important. Critical: none of them have a dedicated `/blade-welding` page; they appear here via GBP signals only.** |
| 9 | facebook.com/grizzlyindustrial (video) | Social video | |
| 10 | practicalmachinist.com | Forum | |
| 11 | youtube.com (Malt & Make) | Video | |
| 12 | mig-welding.co.uk | Forum (UK) | |
| 13 | doallsaws.com/parts/blade-welder | OEM equipment vendor | Selling welder machines, not the service |
| 14 | Images pack | Mixed | Including `industrialsource.com/bandsaw-blades-custom` |
| 15 | Popular products | Shopping pack | 8 SKUs (Portland, Supercut, WEN) — physical blades, not services |
| 16 | related_searches | — | See above |

### Localized "near me" SERP (`bandsaw blade welding near me`, same location)

| Rank | URL | Type | Notes |
|------|-----|------|-------|
| 1, 2, 3 | **Local pack:** Circle Saw (4.5★/144), Northern Tool (4.3★/626), Metal Sawing Technology (4★/16) | Local pack | The local battle |
| 4 (organic #1) | **metalsaw.com** | Organic | **Direct Houston competitor.** SERP description: "quality, custom-welded band saw blades in addition to band saw maintenance and repair services for all major brands of band saws" — they own the **homepage**, not a dedicated blade-welding URL. |
| 5 | **grovesindustrial.com/services/band-saw-services** | Organic | **Direct Houston competitor.** SERP description: "With the only in-house sawing engineer in Houston, we can produce custom weld-to-length band saw blades and provide complimentary new saw installations." — they bury blade welding inside the broader band-saw services page. |
| 7 | fastenal.com/services-and-solutions/weld-to-length-bandsaw | National | Fastenal's weld-to-length program — "900 different styles in stock, welding daily" — national chain, no Houston specificity |
| 11 | bandsawbladesdirect.com | E-commerce | Sells custom Lenox blades |
| 13 | sawblade.com | E-commerce | Sells custom welded blades |

**Critical SERP read:** **No competitor — Houston or national — has a dedicated `/blade-welding` destination page.** Groves Industrial mentions it on `/services/band-saw-services` (a parent service hub); Metal Sawing Technology mentions it on their homepage. Fastenal has a service page but it's national/SKU-listing, not service-quoting. **The standalone destination is open.**

## SERP features

- **Video carousel (rank_absolute 1) on exact match** — informational sub-intent demands a brief educational H2 mid-page; no need to compete with video pack directly
- **No AI Overview** on either SERP — clean opportunity
- **PAA block (4 questions) on exact match:**
  1. Can a bandsaw blade be welded? *(answer in FAQ)*
  2. Why does a band saw blade need to be ground after welding? *(answer in FAQ — asynchronous AI Overview source)*
  3. How does a bandsaw blade welder work? *(answer in FAQ)*
  4. What is the 3-tooth rule for bandsaws? *(skip — adjacent intent, but if FAQ has room it's a quick add)*
- **PAA block (4 questions) on "near me" variant:**
  1. Can a bandsaw blade be welded? *(same)*
  2. What solder is best for bandsaw blades? *(skip — solder ≠ flash-butt weld; misleading question)*
  3. Do they make wood blades for bandsaws? *(skip — woodworking, not industrial)*
  4. How does a bandsaw blade welder work? *(same)*
- **Local pack: 3 results on BOTH SERPs.** This is local-pack-active for the head term — geo-grid Local Falcon scan required.
- **Image pack on exact match** — 9 images. Sourcing a real shop photo of Kaylen welding a blade would target this slot.
- **Shopping/Popular Products pack on exact match** — 8 SKUs. Confirms commercial intent split between **service** and **product**. We're a service, but adding a "what blades we work with" H2 (no SKUs, no prices, just material/material-class coverage) addresses the product-curious 25%.
- **No featured snippet** on either SERP — opportunity to capture by structuring an answer-style first paragraph for "Can a bandsaw blade be welded?"
- **No knowledge panel.**

## Content gaps to exploit

1. **Standalone destination URL** — competitors bury blade welding inside `/services/band-saw-services` (Groves) or the homepage (Metal Sawing). A dedicated `/services/band-saw-blade-welding` URL with the exact-match keyword in the slug + title + H1 is an instant on-page-relevance edge.
2. **Real-shop process photography slot** — the image pack has zero recognizable Houston competitors. A clean shop photo of Kaylen running a blade welder fills this.
3. **No FAQ schema on any of the 13 ranking results** for the exact match. `FAQPage` JSON-LD targeting the 3 valid PAA questions is unopposed.
4. **No competitor explains material coverage clearly** — bi-metal, carbon, carbide-tipped, stainless cutting blades. Add a "Blades We Weld" matrix.
5. **No competitor offers a clear in-shop / mobile distinction.** Saw Service 3G's mobile service angle ("we come to you") is the brand's wedge — say it once for blade welding too: blade welding is in-shop (industrial flash-butt welder lives in the shop), but pickup/drop-off in the truck radius is on the table.
6. **No competitor talks about annealing** — every welding forum thread mentions annealing as the critical step the DIYers get wrong (PAA #2 directly asks why blades need to be ground after welding). A two-sentence explainer that "every blade we weld is annealed and ground" is a trust signal the others miss.
7. **No "near Houston / near Katy" geo-specificity** in any competitor's blade-welding copy — direct gap from the related_searches block.

## Page structure

- **Slug / route:** `app/services/band-saw-blade-welding/page.tsx`

- **`<title>` (≤60 chars):**
  1. **`Band Saw Blade Welding in Houston | Saw Service 3G`** (51 chars) — **recommended**
  2. `Custom Band Saw Blade Welding — Houston | 3G` (44)
  3. `Bandsaw Blade Welding Houston · Weld-to-Length` (46)

- **`<meta name="description">` (140–160 chars):**
  1. **`In-shop band saw blade welding across Greater Houston. Weld-to-length, annealed and ground. Bi-metal, carbon, carbide-tipped. Call (281) 801-5612.`** (148 chars) — **recommended**
  2. `Houston band saw blade welding by Saw Service 3G. Weld-to-length blades for industrial saws — bi-metal, carbon, carbide. Quote at (281) 801-5612.` (145)
  3. `Custom-welded band saw blades from a Spring TX shop. Flash-butt welding, annealed and ground. All major blade brands. Call (281) 801-5612.` (140)

- **`<h1>`:** `Band Saw Blade Welding in Houston — Weld-to-Length, Annealed and Ground`

- **H2 outline (8 sections):**
  1. **Band Saw Blade Welding — Custom Lengths, Welded In-Shop** — lead block. Featured-snippet target: answer "Can a bandsaw blade be welded?" in the first paragraph. Above-the-fold CTA (phone + quote form).
     - *Targets:* `band saw blade welding`, `weld band saw blade`
  2. **What We Weld — Blade Materials & Sizes** — bi-metal, carbon, carbide-tipped; widths and gauges typically handled (without specifying machine model). Hedge on max width/gauge.
     - *Targets:* `stainless steel bandsaw blade`, `carbide band saw blade`
  3. **Our Welding Process — Cut, Weld, Anneal, Grind** — short visual process block. Anneal/grind explanation is the differentiator vs. the forum DIY threads ranking today.
     - *Targets:* `bandsaw blade welder` (process intent), PAA #2 and #3
  4. **Weld-to-Length: Replacing a Broken or Worn Blade** — direct response to the "broken blade" search journey; covers the `band saw blade weld repair` (0.747 transactional) intent.
     - *Targets:* `band saw blade weld repair`, `weld band saw blade`
  5. **Blade Brands We Work With** — Lenox, Starrett, Bahco, Simonds, Morse, etc. **Frame as "blades we service / weld for customers" — NEVER as authorized partner.** Logos are NOT permitted if any could imply partnership.
  6. **Drop-Off & Mobile Service Across Greater Houston** — Houston, Spring, Katy, Cypress, Conroe, The Woodlands. Anchor the geo-modifiers from related_searches. Internal links to `/service-area/*` pages.
     - *Targets:* `bandsaw blade welding near houston, tx`, `bandsaw blade welding near katy, tx`
  7. **Frequently Asked Questions** — see FAQ section below
  8. **Get a Custom Blade Welded** — final CTA block: phone, quote form, hours, mobile-service note

- **FAQ (5 Q&A — directly from PAA + related searches, all matched to real queries):**

  1. **Q: Can a band saw blade be welded?**
     A: Yes. A broken or worn band saw blade can be welded back together using flash-butt welding — the same method blade manufacturers use to make endless-loop blades from coil stock. After welding, the joint is annealed to relieve stress and then ground flush so it passes through the saw's guides without catching. *(Sources PAA #1 + 0.977 transactional `weld band saw blade`)*

  2. **Q: How does a band saw blade welder work?**
     A: A blade welder is a resistance-welding machine. The two ends of the blade are clamped square against each other and pressed together while an electrical current passes through the joint. The resistance generates enough heat to melt the metal, the ends fuse into a single continuous loop, and the joint is then annealed and ground before the blade goes back on the saw. *(Sources PAA #3)*

  3. **Q: Why does a band saw blade need to be ground after welding?**
     A: The weld leaves a small bead of upset material on both faces of the blade. If you don't grind that bead flush, the joint won't pass cleanly through the saw's blade guides — it'll either bind, deflect, or wear the guides prematurely. Grinding the joint flat is non-negotiable for an in-service blade. *(Sources PAA #2)*

  4. **Q: Do you weld carbide-tipped band saw blades?**
     A: Yes — we weld the carbon or bi-metal backing of carbide-tipped blades. The carbide teeth themselves are brazed to the backing by the blade manufacturer and aren't affected by joining the band into a loop. If the carbide teeth themselves are damaged, that's a re-tooth job rather than a weld — ask us and we'll tell you which one your blade needs. *(Sources `carbide band saw blade` 320/mo +50% qtr)*

  5. **Q: Can you weld a band saw blade for me near Houston or Katy?**
     A: Yes. The welder lives in our Spring TX shop just north of Houston. Drop off your blade or schedule a pickup as part of a service call across Greater Houston — Houston, Katy, Cypress, Conroe, Spring, The Woodlands. Call **(281) 801-5612** to set it up. *(Sources `bandsaw blade welding near houston, tx`, `bandsaw blade welding near katy, tx`)*

- **Word count target:** **1,400–1,700 words.** Justification: median competitor (Groves, Metalsaw, Fastenal) sits around 600–900 words on the parent service page, but they don't dedicate the whole page to blade welding. We need depth to claim the topic, but not bloat. 1,400–1,700 keeps it scannable.

## Structured data

Reference: existing `<JsonLd>` component in `components/seo/` and helpers in `lib/jsonld.ts` (per project conventions in CLAUDE.md §8).

- **`Service`** —
  ```
  serviceType: "Band Saw Blade Welding"
  provider: { "@id": "<root LocalBusiness @id from layout>" }
  areaServed: ["Houston, TX", "Spring, TX", "Katy, TX", "Cypress, TX", "Conroe, TX", "The Woodlands, TX", "Greater Houston Area"]
  description: <pull from H1 + lead paragraph>
  offers: { @type: "Offer", availability: "InStock", priceSpecification: { @type: "PriceSpecification", description: "Quoted per blade — call for pricing" } }
  // Do NOT include hasOfferCatalog with price points — pricing transparency without anchoring per honesty rules
  ```
- **`BreadcrumbList`** — Home → Services → Band Saw Blade Welding (3 items)
- **`FAQPage`** — 5 Q&A above
- **`Organization`** — already in root layout per CLAUDE.md §8; **DO NOT duplicate here**

## Internal links (8–10 per CLAUDE.md §4)

| Anchor text | Target |
|------|--------|
| "Hyd-Mech band saw repair" | `/services/hyd-mech-band-saw-repair` |
| "HEM saw repair" | `/services/hem-saw-repair` |
| "Behringer band saw repair" | `/services/behringer-band-saw-repair` |
| "band saw repair in Houston" (in §6) | `/service-area/houston-tx` |
| "Spring TX shop" (NAP anchor) | `/service-area/spring-tx` |
| "Katy" (in FAQ #5) | `/service-area/katy-tx` |
| "Cypress" | `/service-area/cypress-tx` |
| "The Woodlands" | `/service-area/the-woodlands-tx` |
| "Conroe" | `/service-area/conroe-tx` |
| "Request a quote" (CTA blocks ×2) | `/#quote` |
| "Contact us" (footer-area CTA) | `/#contact` |
| `tel:+12818015612` (phone link, appears ≥3 times) | call action |

## Open Graph / Twitter

- **og:title:** `Band Saw Blade Welding in Houston | Saw Service 3G` (51)
- **og:description:** `Weld-to-length band saw blades from a Spring TX shop. Bi-metal, carbon, carbide-tipped — welded, annealed, and ground. Mobile service across Greater Houston.` (160)
- **og:image:** **Reuse the existing global `/opengraph-image`** for launch; budget a real shop photo of a blade welder in operation as a Phase-2 enhancement (would also target the image-pack slot). Do NOT block launch on the photo.
- **og:url:** `https://sawservice3g.com/services/band-saw-blade-welding`
- **og:type:** `website`
- **twitter:card:** `summary_large_image`
- **twitter:title / description:** match og:* values

## Notes for Frontend

- **Reuse existing primitives only.** `<PageHero>`, `<Breadcrumbs>`, `<JsonLd>`, `<Reveal>`, FAQ accordion (mirror pattern from `components/sections/faq.tsx`). **Do not invent new components.**
- **Sitemap:** add `/services/band-saw-blade-welding` to `app/sitemap.ts` with priority **0.85** and `changeFrequency: "monthly"` (matches existing service-page entries).
- **Pricing transparency without anchoring:** reference the existing pricing FAQ pattern from the homepage — frame as "quoted per blade after assessment" + link to the homepage pricing FAQ. **Never quote a per-weld dollar figure.**
- **NO authorized-dealer claim for any blade brand.** Lenox / Starrett / Bahco / Simonds / Morse listed in H2 §5 are blades we **service and weld for customers** — never "authorized," "partner," "factory," or "OEM-certified." Do not display brand logos.
- **NO specific OEM part numbers** in body copy.
- **Hedge service intervals:** blade life copy must read like "typical blade life varies with material, feed rate, and coolant condition — ask us for an on-site assessment" — no specific cycle-count promises.
- **Crew language:** "we" (not "our shop," "our team of welders," or "our trucks"). 2-person crew per project memory.
- **Honesty disclaimer NOT required** on this page — this is a service we genuinely perform in-house. It is not a brand-name page (compare to `/services/marvel-band-saw-repair` which DOES need the not-authorized disclaimer).
- **Above-the-fold mobile:** PageHero (H1 + short lede + phone CTA + secondary quote-form CTA). Below that, the H2 §1 lead block with the featured-snippet-targeted paragraph.
- **FAQ:** first accordion item (`"Can a band saw blade be welded?"`) is **expanded by default**; rest collapsed. This satisfies both the snippet-targeting goal and accessibility (visible by default for the keystone question).
- **Performance budget:** Lighthouse Performance ≥ 90 mobile, SEO ≥ 95 desktop+mobile. No new heavy media; reuse existing optimized hero treatments.
- **Google tag (G-XDWNTPSF57):** loaded in root `app/layout.tsx`. **DO NOT re-inject on this page** (would double-count pageviews per CLAUDE.md §4).
- **`metadata` export:** standard pattern — title / description / canonical (`https://sawservice3g.com/services/band-saw-blade-welding`) / openGraph / twitter / robots: index,follow.
- **Local Falcon post-launch:** SEO Agent must run a geo-grid scan for `band saw blade welding` after deploy to capture the local-pack baseline. Reference report key TBD.

## Local Falcon (geo-grid scan)

**Pre-launch:** SKIPPED for the brief. Local pack DOES fire on the head term (confirmed in the SERP above), so a geo-grid baseline scan is warranted, but the **business has not yet been entered into Local Falcon for this project** per docs/seo-briefs/* — the scan is a Workflow B (post-launch) action, not a pre-launch dispatch.

**Post-launch action item (for the verification dispatch):**
- `searchForLocalFalconBusinessLocation` → `saveLocalFalconBusinessLocationToAccount` (Spring TX GBP, place ID TBD)
- `runLocalFalconScan` — grid 7×7, 5-mile radius centered on (30.0799, -95.4172), keyword `band saw blade welding`, platform google
- Capture AGR + SoLV + top 3 grid competitors (`getLocalFalconCompetitorReport`)
- Compare against post-launch scan to measure GBP lift from the new dedicated page

## Cited MCP calls (audit trail)

- `dataforseo_labs_google_keyword_overview` × `[band saw blade welding, band saw blade welder, bandsaw blade welding, bandsaw blade welder, weld band saw blade, stainless steel bandsaw blade, carbide band saw blade, band saw blade weld repair]` — 2026-05-17
- `dataforseo_labs_google_keyword_overview` × `[band saw blade welding near me, bandsaw blade welding near me, custom band saw blade, weld to length band saw blade, band saw blade repair, broken band saw blade]` — 2026-05-17 (some returned no data, e.g. `custom band saw blade`, `weld to length band saw blade`, `broken band saw blade` — below volume floor)
- `dataforseo_labs_search_intent` × `[band saw blade welding, band saw blade welder, bandsaw blade welding, weld band saw blade, band saw blade weld repair]` — 2026-05-17
- `dataforseo_labs_bulk_keyword_difficulty` × 7 keywords — 2026-05-17 (all returned empty `keyword_difficulty` — long-tail not indexed in KD; competition + organic SERP composition used as KD proxy)
- `serp_organic_live_advanced` × `band saw blade welding`, location Houston TX, EN, depth 10 — 2026-05-17
- `serp_organic_live_advanced` × `bandsaw blade welding near me`, location Houston TX, EN, depth 10 — 2026-05-17
- Local Falcon scan: **NOT run** for this brief (deferred to Workflow B post-launch verification per scope decision above)
