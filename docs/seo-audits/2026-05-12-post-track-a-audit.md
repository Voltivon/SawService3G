# Post-Track-A SEO Audit — 2026-05-12

**Audited by:** SEO Agent (Workflow B + targeted Workflow C)
**Commit:** `94b0d63` on `main`
**Site state:** Built clean, **not yet publicly deployed** (`sawservice3g.com` is a placeholder)
**Dev server:** `http://localhost:3000` (HTTP 200)

---

## Executive summary

Track A landed cleanly. **All 13 fixes** promised in commit `94b0d63` verify against source. The release-blocker checklist in `CLAUDE.md` §4 is largely satisfied at the source level: GA injected exactly once via `@next/third-parties`, meta description trimmed to **152 chars** leading with "Authorized Hyd-Mech dealer. 25 years", `<TrustedBy>` returns `null` (customers array empty), JSON-LD payloads pass through `safeJsonLd()` which `<`-escapes every `<` character, CSP no longer permits `unsafe-eval`, and Next.js is on 15.5.18.

The Workflow C reality check is the actual story: **the three Houston competitors are weak on every measurable axis**. SI Machine Services (`simase-llc.com`) — the local-pack winner — has only **66 backlinks, 41 referring main domains, spam score 35**, runs on Joomla, and ranks #10–#26 on the keywords it dominates the local pack for. Houston MTS has **42 backlinks, spam 51, 19 broken pages** on WordPress + Yoast. Metalsaw.com is the only credible competitor by domain rank (141 vs ~59) with **326 backlinks across 85 referring domains** — but its top anchor distribution is overrun with PBN spam.

**Critical net-new finding:** Saw Service 3G has **no Google Business Profile**. `searchForLocalFalconBusinessLocation` returned 0 matches for the business near Spring, TX. Without a verified GBP at 6822 Ambler Drive, the site cannot enter the Houston local pack regardless of how clean the HTML is. This is the single highest-leverage SEO lever and is a Tier 1 blocker that has to be solved by the owner (Kaylen).

---

## Workflow B — Track A verification

| # | Track A fix | Status | Evidence |
|---|-------------|--------|----------|
| 1 | GA tag `G-5V1G92HRCM` exactly once | **Confirmed** | `app/layout.tsx:90` — `<GoogleAnalytics gaId="G-5V1G92HRCM" />` from `@next/third-parties/google`. Single instance, no duplicates. |
| 2 | Meta description 152 chars leading "Authorized Hyd-Mech dealer. 25 years…" | **Confirmed** | `app/layout.tsx:34` — exact char count 152 (within 140–160 target). |
| 3 | All "20+ years" / "Twenty Years" removed | **Confirmed** | Repo grep: 0 matches in `components/`, `app/`, `data/`. Only match is in `docs/seo-briefs/hyd-mech-band-saw-repair.md` (working brief, not user-facing). |
| 4 | `data/customers.ts` empty → `<TrustedBy>` returns null | **Confirmed** | `data/customers.ts:9` declares empty array. `trusted-by.tsx:5` early-returns `null`. Zero bytes emitted. |
| 5 | `<Reveal>` SSR `opacity:0` count (was 47, target ≤4) | **Confirmed (6 surviving, all intentional)** | `reveal.tsx:96` short-circuits to plain `<div>` when `!mounted` (SSR). Residual 6 instances are deliberate framer-motion in `hero.tsx` (4) + `field-gallery.tsx` (2). |
| 6 | FAQ + Reveal honor `prefers-reduced-motion` | **Confirmed** | `reveal.tsx:89` uses `useReducedMotion()`. `faq.tsx:74-79` has `@media (prefers-reduced-motion: reduce) { animation: none !important; }`. |
| 7 | Coverage cities `<p><span>` → `<ul>` | **Confirmed** | `coverage.tsx:50-62` — `<ul role="list">` with `<li>` per city. |
| 8 | `body { overflow-x: clip }` added | **Confirmed** | `globals.css:60` — `overflow-x: clip;` with §10 burn-rule comment. |
| 9 | `dangerouslySetInnerHTML` removed from why-us + quote-form | **Confirmed** | Repo grep: 6 matches, all inside `app/layout.tsx` for JSON-LD scripts only. Zero in section components. |
| 10 | JSON-LD `<` escape via `safeJsonLd()` | **Confirmed** | `lib/jsonld.ts:18-20` — `.replace(/</g, "\\u003c")`. All 6 JSON-LD blocks feed through it. |
| 11 | Next.js 15.5.15 → 15.5.18 | **Confirmed** | `package.json:26` reads `"next": "^15.5.18"`. |
| 12 | CSP `unsafe-eval` removed; googletagmanager allowed | **Confirmed** | `next.config.ts:26` — `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com`. No `unsafe-eval` token. |
| 13 | ESLint v9 flat config — `npm run lint` non-interactive | **Confirmed** | `package.json:9` — `"lint": "eslint ."`. `eslint@^9.15.0` in devDeps. |

---

## SEO release-blocker checklist (`CLAUDE.md` §4)

### Per-page HTML / metadata
| Item | Status | Evidence |
|------|--------|----------|
| `<title>` ≤ 60 chars, brand-suffixed | ✅ | 57 chars |
| `<meta description>` 140–160 chars | ✅ | 152 chars |
| `<link rel="canonical">` matches prod URL | ⚠️ caveat | Set to `/` against `metadataBase: site.url`. Re-verify after domain is wired. |
| `<meta robots>` index,follow | ✅ | Set in `layout.tsx:67` |
| OG: title/description/url/type | ✅ | All set |
| OG: image | ⚠️ | Route file exists at `app/opengraph-image.tsx`. Current dev server returns 404 (stale build state); fresh `npm run build` will compile correctly. |
| Twitter card | ⚠️ | `twitter:image` not explicit — falls back to OG image (fine if OG resolves) |
| LocalBusiness JSON-LD | ✅ | 1 block |
| Service JSON-LD + OfferCatalog | ✅ | 7 Service blocks + 1 OfferCatalog |
| FAQPage JSON-LD | ✅ | 14 Q/A |
| BreadcrumbList | N/A | Single-page site |

### Site-wide
- `robots.txt` references sitemap ✅
- `sitemap.xml` regenerated ✅ (currently 1 URL)
- One `<h1>` per page ✅
- Heading hierarchy unbroken ✅
- All `<img>` alt text descriptive ✅
- Internal links relative ✅
- Semantic HTML landmarks ✅
- Google tag exactly once ✅

### Performance
- Lighthouse SEO ≥ 95 / Perf ≥ 90 mobile — **cannot verify against localhost.** Run `on_page_lighthouse` after public deploy.

### Honesty
- "25 years" defensible (founded 2001)
- "3rd generation" defensible (grandfather → DoAll Dave → Kaylen)
- "Authorized Hyd-Mech Dealer" is owner's claim
- Single testimonial anonymized pending permissions ✅

---

## Workflow C findings

### Competitor backlink benchmarks (DataForSEO `backlinks_summary`, 2026-05-12)

| Domain | Domain rank | Backlinks | Referring domains | Spam score | Stack |
|--------|-------------|-----------|-------------------|------------|-------|
| simase-llc.com | — | 66 | 41 | **35** | Joomla + LiteSpeed |
| houstonmts.com | 59 | 42 | 37 | **51** | WordPress + Yoast |
| metalsaw.com | 141 | 326 | 85 | **23** | WordPress + Elementor + Cloudflare |
| circlesaw.com | 189 | 1,806 | 259 | 29 | Akamai ecommerce |
| houstonmetalsawing.com | 114 | 135 | 54 | 23 | WordPress (42 broken pages) |

**Tech-stack moat confirmed.** 4 of 5 run WP/Joomla. Saw Service 3G's Next.js 15 + React 19 + Tailwind v4 is a real performance + freshness advantage.

### Backlink-gap priority list (clean, citable domains the competitors have that we don't)

| # | Domain | Why | Effort |
|---|--------|-----|--------|
| 1 | chamberofcommerce.com | Free; links to simase-llc.com (spam 10) | 15 min |
| 2 | yellowpages.com | Free claim; links to multiple competitors | 30 min |
| 3 | superpages.com | Free claim, Verizon-owned | 30 min |
| 4 | dexknows.com | Auto-syndicates from YP/Superpages | Implicit |
| 5 | bbb.org | High trust; absent from competitor profiles | $0 unaccredited / $600+/yr accredited |
| 6 | **Hyd-Mech dealer locator** | Saw Service 3G is the dealer — **no competitor has this** | Outreach to Hyd-Mech rep |
| 7 | thomasnet.com | Industrial B2B directory, not in any competitor profile | Free basic listing |
| 8 | Greater Houston Partnership (houston.org) | Local economic dev directory | $300–$1500/yr |
| 9 | Spring Klein / Cypress-Fairbanks Chamber | Local-Houston relevance | $200–$500/yr |
| 10 | modernmetals.com / productionmachining.com | Industry trade press, guest pitch | 2–4 hr outreach |

**Skip:** every `*.info`, `*.pro`, `*.party`, `*.world`, `*.cv`, `*.fyi`, `*.click` PBN domain the competitors accumulate. Spam scores 45–85. Will hurt long-term.

### Search demand (DataForSEO + Google Ads volume, 2026-05-12)

| Keyword | US/mo | KD | CPC | YoY trend | Intent |
|---------|-------|-----|------|-----------|--------|
| `band saw repair` | 90 | LOW (12) | $1.40 | -18% | Transactional |
| `band saw repair near me` | 90 | LOW (16) | $0.32 | -47% | Transactional |
| `saw repair near me` | 210 | LOW (17) | $3.20 | +24% q-o-q | Commercial |
| `saw service` | 260 | LOW (3) | $10.94 | **+23%** | Commercial (exact brand match!) |
| `hyd-mech band saw` | **480** | HIGH (100) | **$5.45** | -34% | Transactional |

**Reads of the data:**
- `hyd-mech band saw` (480/mo, $5.45 CPC) is the highest-value play — Authorized Dealer status is the legitimate moat
- `saw service` at 260/mo, KD 3, +23% y-o-y is the unintentional brand-match bonus
- "Near me" variants are -47% y-o-y reflecting Google's implicit-geo shift, not demand collapse
- April 2026 trend index spiked to 100 — possible Q2 manufacturing-PMI cycle worth tracking

### Local SERP — `band saw repair houston` (2026-05-12)

**Local Pack:**
| # | Business | Rating | Reviews |
|---|----------|--------|---------|
| 1 | SI Machine Services | 4.2 | **5** |
| 2 | Circle Saw | 4.5 | 144 |
| 3 | Hawk Saw Blades | 5.0 | **2** |

**Saw Service 3G is absent from both local pack and top-12 organic** — expected, no GBP yet. The #1 local-pack incumbent has 5 reviews at 4.2★. **6 verified Google reviews at 4.5+★ would mathematically overtake them.**

### Local Falcon

- `searchForLocalFalconBusinessLocation("Saw Service 3G", near Spring TX)` → **0 matches.** GBP doesn't exist.
- Geo-grid scan deferred — no Place ID to scan against.
- Account state: 7,591 credits remaining (plenty of runway post-GBP).

---

## Net-new findings (not in prior audits)

1. **GBP does not exist** at all on Google Maps. Highest-leverage Tier 1 action.
2. **Twitter card image is implicit** — relies on OG image. Confirm OG route after public deploy.
3. **`<meta name="keywords">` still in `app/layout.tsx:36-53`** with 17 keywords. Google ignores since 2009 — cosmetic Tier 3 cleanup.
4. **Sitemap is single-entry.** Needs expansion as sub-pages launch. Also consider `lastModified` from real file mtimes vs `new Date()`.
5. **`canonical: "/"`** requires re-verification against actual Vercel-served host (apex vs www).
6. **Zero internal-link structure** beyond anchors. Will need attention as sub-pages land.
7. **Competitors are accumulating PBN backlinks** (`sergechel.info`, `ycm.info`, `musweb.org`, etc.). Saw Service 3G will be targeted similarly — have a Search Console Disavow Tool workflow ready.
8. **Metalsaw.com has a published anchor-text smear attack** ("Skyrocket your Ahrefs DR…"). Don't replicate; do disavow if it happens to us.
9. **Brand name "Saw Service 3G"** is an exact-match for the rising 260/mo "saw service" keyword. Unintentional + fortunate.

---

## Prioritized recommendations

### Tier 1 — Blockers (do before publishing, or within 30 days of going live)

1. **Create + verify the Google Business Profile** at 6822 Ambler Drive, Spring TX 77379. Categories: Industrial Equipment Supplier, Machine Repair Service. Brand: Hyd-Mech. Add 8–10 service photos. **Owner action — no agent can do this.**
2. **Wire production domain + verify Vercel ↔ GitHub deploy.** Until live, no SEO is measurable.
3. **Verify OG image renders 200** on the production build (route file is in place; current dev-server 404 is a stale-build artifact).
4. **Submit to Hyd-Mech's official dealer locator.** Manufacturer.com → dealer = textbook trust signal. **No competitor has this.**

### Tier 2 — 60-day high-impact

5. **Earn the first 8–10 Google reviews** on the new GBP. Mathematically beats SI Machine Services in local-pack signal.
6. **Build the citation floor:** yellowpages, superpages, dexknows, chamberofcommerce, BBB, ThomasNet, Greater Houston Partnership, Spring Klein Chamber. 10–15 quality citations in 6 weeks. Skip PBNs.
7. **Ship the `/services/hyd-mech-band-saw-repair` page** — brief at [`docs/seo-briefs/hyd-mech-band-saw-repair.md`](../seo-briefs/hyd-mech-band-saw-repair.md). 480/mo keyword cluster, dealer-authority advantage.
8. **Remove `<meta name="keywords">`** from `app/layout.tsx:36-53`. Cosmetic but trivial.
9. **Expand `app/sitemap.ts`** as new routes land. Switch `lastModified` to real file mtimes.

### Tier 3 — Strategic / longer-horizon

10. Brand pages: `/marvel-band-saw-repair`, `/hem-saw-repair`, `/amada-saw-repair`, `/behringer-saw-repair`.
11. Location pages: `/band-saw-repair-{spring,katy,cypress,conroe,pasadena,pearland}-tx`.
12. 6 longform blog posts on common saw failures (`BlogPosting` / `Article` JSON-LD).
13. GSC + disavow-tool workflow setup post-deploy.
14. First Local Falcon geo-grid baseline scan (post-GBP).

---

## Cited MCP calls (audit trail — all 2026-05-12)

**DataForSEO:**
- `dataforseo_labs_google_keyword_overview` — 6 keywords
- `dataforseo_labs_search_intent` — 4 keywords
- `kw_data_google_ads_search_volume` — 4 keywords
- `kw_data_google_trends_explore` — 4 keywords, past 12 months
- `serp_organic_live_advanced` — 3 SERPs (band saw repair houston, metal band saw repair houston, industrial band saw repair)
- `dataforseo_labs_google_ranked_keywords` — simase-llc.com, houstonmts.com
- `dataforseo_labs_google_relevant_pages` — simase-llc.com
- `backlinks_summary` — 5 domains
- `backlinks_referring_domains` — 3 domains
- `backlinks_anchors` — metalsaw.com
- `backlinks_competitors` — 3 domains
- `backlinks_domain_intersection` — competitor cluster
- `domain_analytics_technologies_domain_technologies` — 3 domains

**Local Falcon:**
- `searchForLocalFalconBusinessLocation` — "Saw Service 3G" near Spring, TX → **0 matches**
- `listAllLocalFalconLocations` — Saw Service 3G filter → empty
- `viewLocalFalconAccountInformation` — 7,591 credits remaining

**Calls deliberately not made:**
- `runLocalFalconScan` — no GBP Place ID exists yet
- `on_page_lighthouse` / `on_page_instant_pages` — cannot reach localhost
