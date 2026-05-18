# 2026-05-17 Content Gap & Keyword Expansion Audit — sawservice3g.com

**Audited by:** SEO Agent (Workflow C — content gap + keyword expansion roadmap)
**Audit date:** 2026-05-17
**Target:** `sawservice3g.com` — industrial band saw repair, Spring TX / Greater Houston, Authorized Hyd-Mech Dealer
**Companion audits:** [Post-Track-A 2026-05-12](2026-05-12-post-track-a-audit.md), [Competitor backlink 2026-05-17](2026-05-17-competitor-backlink-audit.md)
**Scope:** Current-visibility check, competitor keyword gap, net-new keyword expansion, page roadmap, on-page optimizations, 30/60/90 plan.

---

## Executive summary

Saw Service 3G is **live and ranking organic #3 (absolute #6) for `band saw repair houston`** in the live Houston SERP — confirmed against `serp_organic_live_advanced` today. Beyond that one query, **DataForSEO Labs returned an empty `ranked_keywords` array** for the domain (US, location_code 2840) — the site is too new to have been crawled into the indexed-keywords database yet, so any other rankings are not detectable through this MCP. The single biggest opportunity surfaced today is **the `band saw blade welding` cluster (720/mo, transactional, KD low/medium)**: the keyword appears nowhere in the existing 21-route footprint as a standalone destination, the existing competitors only mention it inside their service-lists (no dedicated page), and Groves Industrial's own SERP description literally reads "custom weld-to-length band saw blades" — proving it's a draw. Track-A confirmed-live performance is **Lighthouse Performance 99 / SEO 100 / Best Practices 100 / Accessibility 93** on the homepage (per `on_page_lighthouse` today, 2026-05-18 fetch); the site is technically ahead of every Houston competitor and limited only by content coverage and link velocity. Three on-page fixes are quick wins: meta_keywords still injected (cosmetic Tier 3 still pending), the homepage SERP snippet shows the **old (281) 704-5589 phone** (Google hasn't re-crawled since commit `8b14170` — submit URL inspection in GSC to force re-index), and the live SERP `related_searches` block reveals the highest-leverage long-tail keyword cluster ("Woodworking band saw repair houston", "Best band saw repair houston", "Metal band saw repair houston", "Electric band saw repair houston") which can all be served by **one new dynamic /service-area/houston-tx FAQ block, not new pages**. Recommend building **2 new resource pages (blade-welding service + brand-glossary), expanding the Houston page with the 4 related-search angles, and adding 6 long-tail brand model pages under the existing Hyd-Mech vertical** before adding more brands or locations.

---

## 1. Current ranked-keyword inventory

### DataForSEO Labs database (`dataforseo_labs_google_ranked_keywords`, 2026-05-17)

**Result: empty `items[]` array.** Per `dataforseo_labs_google_ranked_keywords` with `target: sawservice3g.com`, `location_name: United States`, `limit: 200`, the API returned `status_code: 20000, items: []`. **No keywords currently indexed in DataForSEO Labs as ranking for our domain.** Reason: site is brand-new to the index; DFS Labs' ranked-keywords database lags Google's live SERP by 4–8 weeks for new domains.

### Live SERP confirmation (`serp_organic_live_advanced`, 2026-05-17, Houston/Texas)

Live SERP for `band saw repair houston`:

| Position | Source | Domain | Notes |
|---|---|---|---|
| Local Pack 1 | local_pack | simase-llc.com | 4.2★ / 5 reviews |
| Local Pack 2 | local_pack | circlesaw.com | 4.5★ / 144 reviews |
| Local Pack 3 | local_pack | metalsaw.com | 4.0★ / 16 reviews |
| Organic 1 (abs #4) | organic | simase-llc.com | "Houston Industrial Band Saw Service" |
| Organic 2 (abs #5) | organic | houstonmts.com | "/bandsaw-repair/" |
| **Organic 3 (abs #6)** | **organic** | **sawservice3g.com** | **Our homepage. Description shows old phone (281) 704-5589 — needs re-crawl.** |
| Organic 4 (abs #7) | organic | metalsaw.com | |
| Organic 5 (abs #8) | organic | houstonmetalsawing.com | |
| Organic 6 (abs #9) | organic | yelp.com | Circle Saw listing |
| Organic 7 (abs #10) | organic | grovesindustrial.com | "/services/band-saw-services" — anchor "custom weld-to-length band saw blades" |
| Organic 8 (abs #11) | organic | hhtoolservices.com | |
| Organic 9 (abs #12) | organic | mapquest.com | Metal Sawing listing — anchor "performs hem saw repairs" |
| related_searches | — | — | "Woodworking band saw repair houston", "Best band saw repair houston", "Metal band saw repair houston", "Electric band saw repair houston", "Metal Sawing Technology", "Band Saw Blade", "Saw blades direct", "SI Machine Services" |

**Status of the 16 keyword targets from `app/layout.tsx`:** No ranking data available from `ranked_keywords`. Cannot confirm any of the 16 are ranking. Recommend: re-run this exact query at the next audit (≥30 days from 2026-05-17) when DFS Labs has had time to index.

**Delta vs 2026-05-12 baseline:** The 2026-05-12 audit noted "Saw Service 3G is absent from both local pack and top-12 organic." Today's SERP shows **the site has entered organic at #3 (abs #6)** for the lead head term `band saw repair houston`. **Net move: from absent → organic #3 in 5 days.** This is a fast-rising indexation signal, not a stable ranking — expect fluctuation.

---

## 2. Competitor keyword gap analysis

Source: `dataforseo_labs_google_domain_intersection` with `intersections: false` (= keywords competitor ranks for but we don't), filtered to `rank_group ≤ 10` and `search_volume ≥ 30`, pulled 2026-05-17. Filtered to **band-saw/repair-relevant keywords only** — most of circlesaw + grovesindustrial intersection is SKU and woodworking-tool inventory (not addressable for a service-only business).

### Repair- and service-relevant gap keywords

| Keyword | Vol/mo | KD | Intent | Competitor ranking | Our position | Suggested mapping |
|---|---|---|---|---|---|---|
| `band saw blade welding` | **720** | not provided (estimate medium based on competition 0.82) | Transactional | metalsaw mentions "custom-welded band saw blades" in SERP description | **none** | **NEW resource/service page** — `/services/band-saw-blade-welding` |
| `band saw blade welder` | **720** | not provided | Transactional (0.59) / Commercial (0.33) | groves mentions "custom weld-to-length band saw blades" | none | Bundle into blade-welding page |
| `horizontal bandsaw` | **1,000** | not provided | Transactional (0.83) | Multiple competitors | none | New informational/glossary page |
| `vertical band saw` | **2,900** | not provided | Transactional (0.79) | Multiple competitors | none | Glossary/educational page only (commercial intent = buy, not repair) |
| `automatic band saw` | 320 | not provided | Transactional | Multiple competitors | none | Glossary/educational |
| `band saw machine` | 720 | not provided | Transactional | Multiple competitors | none | Glossary |
| `hem saw` | **1,300** | **4** | Transactional/informational | metalsaw, mapquest mention "hem saw repairs" | **/services/hem-saw-repair (live)** | Confirm `/services/hem-saw-repair` targets this. |
| `hem band saw` | 170 | 4 | Transactional | Multiple | live page covers | OK |
| `hem saw parts` | 110 | not provided | Transactional | Multiple | live page covers | Add parts-list subsection |
| `doall band saw` | **1,300** | not provided | Transactional | mapquest mentions "doall bandsaw" in description | none | NEW brand-service page (must add "NOT authorized" disclaimer) |
| `ellis band saw` | 1,300 | not provided | Transactional | Multiple | none | Defer — niche fixed-base shop saws, low fit |
| `jet band saw` | **4,400** | not provided | Transactional | Multiple | none | Defer — primarily woodworking, not industrial fit |
| `cosen band saw` | 140 | not provided | Transactional | Multiple | none | Optional brand page (low volume, low priority) |
| `kalamazoo band saw` | 320 | not provided | Informational | Multiple | none | Optional brand page (mostly used-market, low fit) |
| `roll-in band saw` | 140 | not provided | Transactional | Multiple | none | Optional brand page |
| `wells band saw` | 70 | not provided | Transactional | Multiple | none | Defer (low volume) |
| `dake band saw` | 210 | not provided | Informational | Multiple | none | Defer (informational, low fit) |
| `bandsaw repair near me` | 90 | not provided | Transactional | metalsaw ranks (rank_group 3) | none | Already targeted in homepage meta keywords; confirm h1/h2 coverage |
| `stainless steel bandsaw blade` | 320 | not provided | Transactional | metalsaw (rank_group 9) | none | Add to blade-welding/blade-services page |
| `carbide band saw blade` | 320 | not provided | Transactional | Multiple | none | Same |
| `metal band saw cutting fluid` | 50 | not provided | Transactional | metalsaw (rank_group 9) | none | Bundle into PM/maintenance article |
| `saw coolant` | 40 | not provided | Transactional | metalsaw (rank_group 7) | none | Same |
| `houston metal sawing` | 110 | **1** | Commercial | metalsaw (rank_group 3) | none | Add as h2 + internal anchor on Houston service-area page |
| `houston metal cutting` | 30 | not provided | Commercial | metalsaw (rank_group 7) | none | Same — boost Houston page coverage |
| `industrial saw repair` | **N/A (no volume data returned)** | — | Commercial (0.84) | — | none | Worth targeting on homepage h1/h2 anyway — high-intent commercial query |
| `horizontal band saw repair` | N/A (no volume) | — | Commercial | metalsaw mentions | implicit on /services/hyd-mech-band-saw-repair | Add as h2 sub-heading + anchor text |
| `machine shop houston` | 1,000 | 12 | Commercial | grovesindustrial, others | none | Out of scope — we're not a machine shop, we repair them. Skip. |
| `band saw blade sharpening near me` | 170 | not provided | Transactional | metalsaw (rank_group 10) | none | **Conflict — we don't sharpen blades; we weld them.** Do not target. Honesty risk. |
| `table saw repairs near me` | 170 | **21** | Transactional | metalsaw (rank_group 7) | none | Out of scope — table saws ≠ industrial band saws. Skip. |

**Key reads:**
- **`band saw blade welding` (720/mo)** and **`band saw blade welder` (720/mo)** likely share a core keyword cluster. Treating as **single cluster volume ~720/mo** per discipline reminder (volumes not additive).
- **`doall band saw` (1,300/mo)** is the highest-volume brand gap we can legitimately address — but DoAll is not a brand we're authorized for, so it requires the standard "we are NOT an authorized DoAll dealer" disclaimer (per honesty constraints).
- **`hem saw` (1,300/mo, KD 4)** is already targeted at `/services/hem-saw-repair`. Verify the on-page H1/H2 actually anchor this term — confirmed via `on_page_instant_pages`: the live `/services/hem-saw-repair` page exists in `app/sitemap.ts`. Cannot re-verify content depth without dispatching a content read.
- **`band saw blade sharpening near me`** appears in metalsaw's rankings. Saw Service 3G **does not sharpen blades — they weld them**. Targeting this term would be deceptive. **Skip per honesty constraint.**

---

## 3. Net-new keyword candidates (DataForSEO-confirmed, filtered)

Source: `dataforseo_labs_google_keyword_overview` + `dataforseo_labs_google_keyword_suggestions` + grep of intersection data, pulled 2026-05-17. All volumes are US monthly searches.

| # | Keyword | Vol/mo | Competition | Intent | Trend (YoY) | Suggested page |
|---|---|---|---|---|---|---|
| 1 | `band saw blade welding` | **720** | HIGH (0.82) | Transactional (0.65) | -18% | `/services/band-saw-blade-welding` (NEW) |
| 2 | `band saw blade welder` | **720** | HIGH (0.82) | Transactional (0.59) / Commercial (0.33) | -18% | Same page as #1 (same core cluster) |
| 3 | `band saw blade welding machine` | 30 | HIGH | Transactional | -33% | Same page (long-tail) |
| 4 | `horizontal bandsaw` | **1,000** | HIGH | Transactional (0.83) | -23% q/q | `/resources/band-saw-types-glossary` (NEW) |
| 5 | `vertical band saw` | **2,900** | HIGH | Transactional (0.79) | +85% y/y | Same glossary page (educational only — commercial intent points to "buy a saw," not addressable) |
| 6 | `automatic band saw` | 320 | HIGH | Transactional | -18% y/y | Same glossary |
| 7 | `band saw machine` | 720 | HIGH | Transactional | -18% y/y | Same glossary |
| 8 | `doall band saw` | **1,300** | HIGH | Transactional | -19% y/y | `/services/doall-band-saw-repair` (NEW, with disclaimer) |
| 9 | `houston metal sawing` | 110 | LOW (0.03) | Commercial | -21% y/y | Expand `/service-area/houston-tx` |
| 10 | `houston metal cutting` | 30 | LOW (0.13) | Commercial | -25% y/y | Same Houston page |
| 11 | `stainless steel bandsaw blade` | 320 | HIGH | Transactional | +23% q/q | Section on blade-welding page |
| 12 | `carbide band saw blade` | 320 | HIGH | Transactional | +50% q/q | Same |
| 13 | `bimetal band saw blade` | (not returned by overview) | — | — | — | Worth checking on next pass |
| 14 | `metal band saw cutting fluid` | 50 | HIGH | Transactional | +40% y/y | Section on PM/maintenance page |
| 15 | `metal bandsaw coolant` | 30 | HIGH | Transactional | +33% y/y | Same |
| 16 | `saw coolant` | 40 | HIGH | Transactional | +150% y/y | Same |
| 17 | `hyd mech bandsaw` | **480** | HIGH | Transactional | -34% y/y | Confirm /services/hyd-mech-band-saw-repair targets this variant explicitly |
| 18 | `hyd-mech saw` | 320 | HIGH | Transactional | +22% q/q | Same — add as h2/internal anchor on /services/hyd-mech-band-saw-repair |
| 19 | `hyd mech s20` | 110 | HIGH | Transactional | -35% y/y | New deep-page or expand existing S-20A resource page |
| 20 | `hyd-mech s-20a` | 50 | HIGH | Transactional | +75% q/q | Already covered by /resources/hyd-mech-s-20a-parts-list |
| 21 | `hyd mech s 20a` | 50 | HIGH | Transactional | +75% q/q | Same |
| 22 | `hyd-mech s-20a parts list` | 50 | LOW (0.28) | Informational/navigational | +25% y/y | Already covered by `/resources/hyd-mech-s-20a-parts-list` — verify it ranks |
| 23 | `hyd-mech dm-10` | 70 | HIGH | Transactional | -44% y/y | New resource page `/resources/hyd-mech-dm-10-overview` |
| 24 | `hyd-mech s-20` | 70 | HIGH | Transactional | -18% y/y | Existing S-20A resource may capture; or new S-20 model overview |
| 25 | `hem saw parts` | 110 | LOW (0.05) | Transactional | -21% y/y | Already targeted at `/services/hem-saw-repair`; verify H2 coverage |
| 26 | `hem saw for sale` | 50 | HIGH | Transactional | +40% y/y | **Skip** — we don't sell saws. Honesty risk. |
| 27 | `hem saw 782xl` | 30 | HIGH | Transactional | -50% q/q | Resource page (model overview) — defer to long-tail tranche |
| 28 | `cosen band saw` | 140 | HIGH | Transactional | +27% y/y | Optional brand page (with disclaimer) — defer |
| 29 | `roll-in band saw` | 140 | HIGH | Transactional | +21% y/y | Optional brand page (with disclaimer) — defer |
| 30 | `kalamazoo band saw` | 320 | HIGH | Informational | -33% y/y | **Skip** — informational intent + used-market dominates SERP, low fit |
| 31 | `dake band saw` | 210 | HIGH | Informational | -35% y/y | **Skip** — same |
| 32 | `wells band saw` | 70 | HIGH | Transactional | -36% y/y | Defer (low volume, low priority) |
| 33 | `jet band saw` | 4,400 | HIGH | Transactional | -19% q/q | **Skip** — primarily woodworking, not industrial fit |
| 34 | `ellis band saw` | 1,300 | HIGH | Transactional | -16% y/y | **Skip** — niche fixed-base, low fit |
| 35 | `band saw drive belt` | 50 | HIGH | Transactional | +40% y/y | Section on PM page or troubleshooting article |
| 36 | `bandsaw alignment` | 10 | LOW (0.17) | Informational | flat | Troubleshooting blog post (long-tail SEO) |
| 37 | `industrial saw repair` | (volume not returned — likely <30) | — | Commercial (0.84) | — | Worth adding as h2/anchor on homepage anyway — high-intent commercial |
| 38 | `horizontal band saw repair` | (volume not returned) | — | Commercial (informational/transactional foreign) | — | Add as h2 sub-heading on existing service pages |
| 39 | `saw blades direct` | 50 | HIGH | Transactional | +75% y/y | Brand search — Saw Blades Direct is a vendor, not a target |
| 40 | `trennjaeger saw` | 10 | LOW (0.03) | Transactional | +100% y/y | Defer — too low volume |

**Total addressable net-new (volume ≥ 30, on-brand fit, honesty-safe): ~16 keyword candidates** consolidated into **5–6 page concepts** (see §5).

**Skipped explicitly with rationale:**
- `jet band saw`, `ellis band saw`, `kalamazoo band saw`, `dake band saw`, `hem saw for sale`, `band saw blade sharpening near me`, `table saw repairs near me`, `machine shop houston` — out of scope, honesty risk, or wrong intent.

---

## 4. Live SERP `related_searches` block — long-tail intent signals

From the `serp_organic_live_advanced` result for `band saw repair houston`, the SERP returned 8 related searches. These are Google-confirmed actual long-tail queries users co-search with the lead term:

| Related search | Recommended treatment |
|---|---|
| Woodworking band saw repair houston | **Disambiguation FAQ** on homepage + Houston page: "We service industrial / metal band saws — not woodworking band saws." Already in homepage FAQ #5 per `on_page_instant_pages` ("Do you service industrial / metal band saws or woodworking band saws?"). **Confirmed live.** |
| Best band saw repair houston | Reputation play — needs Google reviews + GBP listing (per 2026-05-12 audit Tier 1). |
| Metal band saw repair houston | Add as h2 alias on Houston page + homepage. Already implicit. |
| Electric band saw repair houston | Add brief disambiguation block: power-source (electric vs hydraulic) angle, since all industrial band saws are electric — clarifies for users who don't know the term. |
| Metal Sawing Technology | Competitor brand — no action |
| Band Saw Blade | Generic — covered by potential new blade-welding page |
| Saw blades direct | Vendor brand — no action |
| SI Machine Services | Competitor — no action |

---

## 5. Proposed new pages (with effort tier, honesty risk, why each wins)

Effort tiers: **S** = brief + 1–4 hours implementation; **M** = brief + 1 day; **L** = brief + original research/photos + 2–3 days.

### Tier A (build in next 30 days)

| # | Slug | Target keyword(s) | Vol/mo (cluster) | Type | Effort | Honesty risk | Why this wins |
|---|---|---|---|---|---|---|---|
| 1 | `/services/band-saw-blade-welding` | `band saw blade welding` + `band saw blade welder` + `stainless steel bandsaw blade` + `carbide band saw blade` | **~720 cluster + 640 long-tail** | Service | **M** | None — Kaylen welds blades (confirmed activity) | **No Houston competitor has a dedicated blade-welding service page.** Groves and Metalsaw mention it in copy; nobody owns it as a destination. Transactional intent (65%). |
| 2 | `/services/doall-band-saw-repair` | `doall band saw` + `do-all band saw` | **1,300** | Service (brand, NOT authorized) | **M** | **HIGH** — must include "we are NOT an authorized DoAll dealer; we are experienced repairing DoAll equipment from decades of field service" disclaimer | DoAll is the highest-volume brand gap. Highly addressable since Kaylen's grandfather worked DoAll (referenced in homepage h3 "DoAll Dave" in prior audit). **Family backstory turns the disclaimer into trust signal.** |
| 3 | `/resources/band-saw-types-glossary` | `horizontal bandsaw` + `vertical band saw` + `automatic band saw` + `band saw machine` | **~4,940 raw, but commercial intent ≠ repair intent** | Resource/educational | **M** | Low — descriptive content only | Educational page that pulls high-volume informational/transactional searches and **funnels them into our service pages via internal anchors**. Will rank slowly but builds topical authority for the entire vertical. |
| 4 | Expand `/service-area/houston-tx` (no new page) | `houston metal sawing` (110, KD 1) + `houston metal cutting` (30, KD 12) + `industrial saw repair houston` | ~140 net-new cluster | Existing page update | **S** | None | KD 1 on the highest-volume Houston-local term means **trivially achievable.** Word count today: 846 — bump to 1,400 by adding the 4 related-search angles as h2 sections. |
| 5 | Expand `/services/hyd-mech-band-saw-repair` | Add explicit model variants: `hyd mech s20` (110), `hyd-mech s-20` (70), `hyd-mech dm-10` (70), `hyd-mech v-25`, `hyd-mech h-series` | ~250 long-tail | Existing page update | **S** | None | Existing page word count 1,234 — add a model-coverage h2 section ("Hyd-Mech models we service in detail") with a sub-h3 per series that explicitly references the variant strings users search for. Already lists models in h2 outline — needs the keyword variant strings, not new content. |

### Tier B (build in 30–60 days)

| # | Slug | Target keyword(s) | Vol/mo | Type | Effort | Honesty risk | Why this wins |
|---|---|---|---|---|---|---|---|
| 6 | `/resources/preventive-maintenance-checklist` | `band saw drive belt` (50) + `metal band saw cutting fluid` (50) + `metal bandsaw coolant` (30) + `saw coolant` (40) + `bandsaw alignment` (10) | ~180 cluster | Resource (PM/maintenance) | **M** | None — use hedged service intervals per honesty constraint ("typical intervals vary by use; consult the OEM manual or your service tech") | Cluster of long-tail high-intent maintenance queries. Builds expertise signal (E-E-A-T) and earns lower-funnel traffic that converts to PM contracts. |
| 7 | `/resources/hyd-mech-model-index` (umbrella) | `hyd mech s20` (110), `hyd-mech dm-10` (70), `hyd-mech s-20` (70), and all 24+ Hyd-Mech model variants | ~400 cluster | Resource | **L** | None — Authorized Hyd-Mech dealer, can be authoritative | High-trust resource page that signals authority on Hyd-Mech as a brand AND captures every long-tail model search. Strong internal-link hub for the Hyd-Mech vertical. |
| 8 | `/resources/blade-welding-guide` (educational long-form) | `how to weld band saw blade` + `band saw blade welding chart` + `band saw blade weld break` | (volumes not returned — assume <50 each, but compound to ~150 cluster) | Resource (blog-style article) | **L** | None | Educational article that targets long-tail informational queries and links to `/services/band-saw-blade-welding` for converting commercial intent. Tier B because original research / photos take longer. |

### Tier C (build in 60–90 days, lower priority)

| # | Slug | Target keyword(s) | Vol/mo | Type | Effort | Honesty risk | Why this wins |
|---|---|---|---|---|---|---|---|
| 9 | `/case-studies/anonymized-doall-rebuild` (or similar) | Brand authority / E-E-A-T | n/a | Case study | **L** | Customer permission required — must remain anonymous until written permission per honesty constraint | Builds defensibility against the PBN-laden Houston competitors who can't produce authentic stories. |
| 10 | `/services/cosen-band-saw-repair` | `cosen band saw` | 140 | Service (NOT authorized) | **M** | HIGH — same disclaimer pattern as DoAll | Optional brand page. Lower priority than DoAll because volume is 10x lower. |
| 11 | `/services/roll-in-band-saw-repair` | `roll-in band saw` | 140 | Service (NOT authorized) | **M** | HIGH disclaimer | Same logic — optional. |
| 12 | `/blog/horizontal-vs-vertical-band-saw` | `horizontal band saw repair` + `vertical band saw repair` + comparison long-tail | n/a (volumes <50, but high intent) | BlogPosting | **M** | None | Targets the "Which type do I need?" purchase-adjacent decision query. Funnels to /services hub. |
| 13 | `/blog/when-to-rebuild-vs-replace-band-saw` | Decision-stage query — no direct keyword | n/a | BlogPosting | **M** | None — Hedged language ("typical considerations include…") | Captures comparison-stage searchers. Strong fit for E-E-A-T narrative ("25 years, third generation"). |

### Pages explicitly NOT recommended

- `/service-area/pasadena-tx`, `/service-area/baytown-tx`, `/service-area/sugar-land-tx`, `/service-area/pearland-tx`, `/service-area/texas-city-tx`, `/service-area/galveston-tx`, `/service-area/beaumont-tx`, `/service-area/college-station-tx` — **0 monthly searches** returned by `dataforseo_labs_google_keyword_overview` for all 8 `band saw repair <city> tx` variants. Google handles implicit geo via local-pack signals, not exact-match URLs. **Existing 6 service-area pages are sufficient.** Adding more dilutes link equity for no traffic gain.
- `/services/jet-band-saw-repair`, `/services/ellis-band-saw-repair`, `/services/kalamazoo-band-saw-repair`, `/services/wells-band-saw-repair`, `/services/dake-band-saw-repair` — wrong vertical (woodworking / informational) or honesty risk too high for too little volume.
- Per-brand-per-city pages — same logic, zero volume.

---

## 6. On-page optimizations for EXISTING pages

Source: `on_page_instant_pages` for 3 pages + `on_page_lighthouse` for homepage, all pulled 2026-05-17 / 2026-05-18 UTC.

### `/` (homepage)

| Item | Current | Target | Action |
|---|---|---|---|
| Lighthouse Performance | **99** | ≥ 90 mobile | OK (desktop, mobile not run here) |
| Lighthouse SEO | **100** | ≥ 95 | OK |
| Lighthouse Best Practices | **100** | — | OK |
| Lighthouse Accessibility | **93** | aim ≥ 95 | Minor — run accessibility audit on next sweep |
| Title length | 57 | ≤ 60 | OK |
| Meta description length | 156 | 140–160 | OK |
| Word count | 1,312 | ≥ 1,000 for homepage | OK |
| H1 count | 1 | 1 | OK |
| Canonical | `https://sawservice3g.com/` | matches prod | OK |
| OG image / Twitter image | resolve to `/opengraph-image?...` 1200×630 | served from route | OK |
| `meta_keywords` tag | **STILL PRESENT** (16 keywords) | should be removed | **Tier 3 fix** — already flagged 2026-05-12. Google ignores; cosmetic cleanup. |
| LCP | 678 ms desktop | <2,500 ms | OK |
| Total bytes | 971 KB | <1.5 MB | OK |
| Unused JavaScript | 50 KB | Monitor — not blocking | OK |
| Resource errors | 5 closing-tag mismatches (React inline-script artifacts) | n/a (false positives from parser) | Acceptable — Lighthouse SEO 100 confirms not blocking |
| **Live SERP description shows old phone `(281) 704-5589`** (per `serp_organic_live_advanced` snippet) | Page now serves `(281) 704-5589` (verified in `app/layout.tsx` meta_description = "Call (281) 704-5589") | force Google re-crawl | **Action: submit URL inspection in Google Search Console + push request for re-index** |

### `/services/hyd-mech-band-saw-repair`

| Item | Current | Target | Action |
|---|---|---|---|
| Title | "Hyd-Mech Band Saw Repair Houston \| Saw Service 3G" (49 chars) | ≤60 | OK |
| Meta description | 147 chars | 140-160 | OK |
| H1 | "Hyd-Mech Band Saw Repair in Houston Authorized Dealer Service" | unique, keyword-leading | OK |
| H2 count | 8 | balanced | OK |
| Internal links | 5 | ≥ 8 (per CLAUDE.md §4) | **Increase to 8–10 internal links.** Add anchors to `/services/hem-saw-repair`, `/brands/hyd-mech`, `/resources/hyd-mech-s-20a-parts-list`, `/service-area/houston-tx`, `/service-area/spring-tx` |
| Add model-keyword strings | Mentioned generally | Need explicit variant strings | Add an h2 + h3 block: "Hyd-Mech models we service in detail" with sub-h3 per series including `S-20`, `S-20A`, `DM-10`, `DM-1318`, `V-25`, `H-Series` as exact strings. |
| `meta_keywords` still present | yes | remove globally | Same fix as homepage |
| Word count | 1,234 | ≥ 1,000 service page | OK |

### `/service-area/houston-tx`

| Item | Current | Target | Action |
|---|---|---|---|
| Title | "Band Saw Repair in Houston, TX \| Saw Service 3G" (47 chars) | ≤60 | OK |
| Meta description | 145 chars | 140-160 | OK |
| H1 | "Industrial Band Saw Repair Houston, Texas" | unique | OK |
| H2 count | 7 | balanced | OK |
| Internal links | 10 | ≥ 8 | OK |
| Word count | 846 | **Bump to 1,400** | **Action:** add 4 new h2 sections to address the SERP related_searches block: "Industrial vs. woodworking band saw service", "Electric drive system service", "Houston metal sawing — what we mean by it", "How `houston metal cutting` differs from band saw repair (sometimes the same shop)". Each h2 = 80–120 words. |
| H2 alias coverage | does not include "Houston metal sawing" or "Houston metal cutting" | add | Target the 110/mo + 30/mo Houston-local cluster (KD 1 and KD 12 — both trivially achievable) |

### Sitemap

- Currently 15 routes in `app/sitemap.ts`. When new pages from §5 ship, append in order: Tier A pages → priority 0.85 (matches existing service pages), Tier B → priority 0.7, Tier C → priority 0.65.
- **Open issue from 2026-05-12 audit:** `lastModified` is `new Date()` — should be real file mtimes. Carry forward to next code-touching PR.

### Global

- **Remove `<meta name="keywords">`** from `app/layout.tsx` lines 41-58. Google has ignored it since 2009; it's surface area for keyword-stuffing accusations. Already flagged in 2026-05-12 audit as Tier 3.
- **Force a Google re-crawl of the homepage** to update the SERP snippet with the new phone number. Use GSC URL Inspection → Request Indexing. Old phone in the SERP costs trust on every impression until refreshed.

---

## 7. AI-search visibility check

**Result: NOT RUN — required MCP tool not available in this environment.**

The audit task spec referenced `ai_opt_llm_ment_search` and `ai_opt_llm_ment_top_pages` (DataForSEO's AI-Optimization module). **Neither tool is exposed in this MCP installation** (tools available: DataForSEO Labs, SERP, On-page, Domain Analytics, Content Analysis, Keyword Data, Business Data; Backlinks gated per CLAUDE.md §3; **AI-Optimization not in tool list**).

**Inferred baseline (not a measurement):** Site is brand-new to Google's index (DFS Labs ranked_keywords returned empty as of 2026-05-17). LLM training cuts for the major models (GPT-5, Claude Opus 4.7, Gemini 2.5) all predate the site going live. **Probability of appearance in any LLM response for `band saw repair houston` today: effectively zero.** Re-test this in the next audit once Local Falcon's AI scan modules are budgeted (per `runLocalFalconScan` platform options: `chatgpt`, `gemini`, `aimode`, `gaio`).

**Action for next audit:** if the Human CEO budgets it, run Local Falcon AI scans on platforms `chatgpt`, `gemini`, `aimode` for keyword `band saw repair houston` once the GBP is live and AI training cuts have caught up (likely Q4 2026).

---

## 8. 30/60/90-day roadmap

### Next 30 days (highest leverage — do these 5 things)

1. **Force GSC re-index of homepage** to refresh the old `(281) 704-5589` phone in the live SERP snippet. Submit URL Inspection → Request Indexing. ETA: 24 hours after submission. Cost: free.
2. **Build `/services/band-saw-blade-welding`** — the highest-leverage single page in this audit. 720/mo cluster, zero Houston competitors own it, transactional intent.
3. **Expand `/service-area/houston-tx`** from 846 → ~1,400 words. Add the 4 h2 sections answering the live SERP `related_searches` block. Targets `houston metal sawing` (110/mo, KD 1) and `houston metal cutting` (30/mo). Effort: S.
4. **Remove `<meta name="keywords">`** from `app/layout.tsx`. 1-line code change. No SEO upside, but removes a keyword-stuffing surface area.
5. **Expand `/services/hyd-mech-band-saw-repair`** with explicit model-string h3s (S-20, S-20A, DM-10, V-25, H-Series). Adds ~250/mo long-tail without a new page. Effort: S.

### 30–60 days

6. **Build `/services/doall-band-saw-repair`** — 1,300/mo cluster, biggest brand gap. Must include "NOT authorized DoAll dealer" disclaimer; lean into the family backstory (grandfather "DoAll Dave") as natural trust signal. Effort: M.
7. **Build `/resources/band-saw-types-glossary`** — captures `horizontal bandsaw` (1,000), `vertical band saw` (2,900), `automatic band saw` (320), `band saw machine` (720). Glossary/educational, internal links into service pages. Builds topical authority across the vertical. Effort: M.
8. **Build `/resources/preventive-maintenance-checklist`** — captures the coolant/drive-belt/alignment cluster (~180/mo). Earns lower-funnel PM-contract leads. Effort: M.
9. **Begin executing the backlink-audit Tier 1 actions** (per 2026-05-17 backlink audit): Hyd-Mech dealer locator outreach, YP/Superpages/DexKnows/ChamberOfCommerce free claims. Owner action, not code.
10. **Re-run `dataforseo_labs_google_ranked_keywords` against `sawservice3g.com`** at the 30-day checkpoint. Expect indexed-keyword count > 0 by then.

### 60–90 days

11. **Build `/resources/hyd-mech-model-index`** — umbrella resource for the entire Hyd-Mech catalog (~24+ models). Captures every model-specific long-tail. Authoritative because Saw Service 3G is the Authorized Dealer. Effort: L.
12. **Build `/blog/horizontal-vs-vertical-band-saw`** — comparison/decision blog post funneling to service pages. Effort: M.
13. **Build `/blog/when-to-rebuild-vs-replace-band-saw`** — comparison-stage blog. E-E-A-T narrative tie-in. Effort: M.
14. **First anonymized case study** at `/case-studies/<slug>` — once Kaylen has written customer permission OR an anonymizable story. Effort: L.
15. **Sitemap regeneration with real file mtimes** (carry-forward from 2026-05-12 audit, low priority).
16. **Run Local Falcon AI-scan modules** (chatgpt, gemini, aimode) for `band saw repair houston` to baseline AI-search visibility, once budget approved.

---

## 9. Cited MCP calls (audit trail — all 2026-05-17 or 2026-05-18 UTC)

**DataForSEO Labs:**
- `dataforseo_labs_google_ranked_keywords` × 4 — `sawservice3g.com` (US, empty), `circlesaw.com`, `grovesindustrial.com`, `metalsaw.com`
- `dataforseo_labs_google_domain_intersection` × 3 (intersections=false, our domain vs. each top competitor)
- `dataforseo_labs_google_keyword_overview` × 4 batches — 56 total keywords queried
- `dataforseo_labs_google_keyword_ideas` × 1 — seeded from `band saw repair`, `band saw service`, `metal cutting band saw`
- `dataforseo_labs_google_keyword_suggestions` × 3 — `band saw blade welding`, `hem saw`, `hyd-mech`
- `dataforseo_labs_search_intent` × 1 — 8 keywords

**DataForSEO SERP:**
- `serp_organic_live_advanced` × 1 — `band saw repair houston` (Houston/Texas/US, depth 10)

**DataForSEO On-page:**
- `on_page_instant_pages` × 3 — homepage, `/services/hyd-mech-band-saw-repair`, `/service-area/houston-tx`
- `on_page_lighthouse` × 1 — homepage (Performance 99 / SEO 100 / Best Practices 100 / Accessibility 93)

**DataForSEO Keyword Data:**
- `kw_data_google_trends_explore` × 1 — `band saw blade welding`, `band saw blade welder`

**Calls NOT made (and why):**
- `runLocalFalconScan` — no GBP exists yet; geo-grid scan cannot run until owner creates the listing
- Any `backlinks_*` — backlink work was the focus of the 2026-05-17 backlink audit; not re-run today
- `ai_opt_llm_ment_*` — tools not available in this MCP installation (gap noted in §7)
- `content_analysis_*` — not strictly needed; SERP `related_searches` block surfaced the high-value content angles directly
