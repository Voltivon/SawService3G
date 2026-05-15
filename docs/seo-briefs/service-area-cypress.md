# SEO Brief: Service Area — Cypress, TX (Location Page)

## Target keyword
- **Primary:** `band saw repair cypress tx`
  - **Below DataForSEO floor** (empty, 2026-05-12).
  - **Parent cluster:** `band saw repair` = 90/mo.
  - **Intent (notable variation):** navigational 0.368, commercial 0.363, transactional 0.201 (`search_intent` 2026-05-12). **Cypress is the only city in this set where navigational beats commercial** — driven by JLH Saws being HQ'd in Cypress.

## Search intent
**Mixed navigational + commercial.** Some searchers may be looking for JLH directly. Page must clearly serve repair-intent users. Lead with "service" language.

## Top SERP competitors (Cypress, TX, 2026-05-12)

**Knowledge graph:** S I Machine Services dominates via knowledge panel.

**Organic:**
1. **machinetechs.com/bandsaw-repair** — Tomball, 24/7 positioning
2. **simase-llc.com**
3. **jlhsaws.com** — **JLH Saws, Cypress, TX HQ** — manufacturer (not repair) but Cypress address gives navigational dominance
4. metalsaw.com
5. machinetechs.com
6. houstonmts.com
7. badassbandsaws.com
8. mapquest.com (Machine Techs)
9. yelp.com (Top 10 Tool Repair Tomball)

**Content gaps:**
- JLH is manufacturer, not service — position us as service partner for JLH-equipped shops
- No competitor mentions Cypress industrial corridors (Northwest Industrial / Hwy 290 / FM 529 / Fairbanks-N. Houston)
- Knowledge-graph dominance by S I Machine → our GBP geo-grid matters extra here

## SERP features
- Knowledge graph (S I Machine)
- **No clean 3-pack** local pack
- No PAA in pull
- AI Overview not visible

## Page structure
- **Slug:** `app/service-area/cypress-tx/page.tsx`
- **Title (≤60):** `Band Saw Repair in Cypress, TX | Saw Service 3G` (48)
- **Meta description:** `Mobile industrial band saw repair in Cypress, TX — service for all major brands. Authorized Hyd-Mech dealer. 25 yrs. Call (281) 801-5612.` (137)
- **H1:** `Industrial Band Saw Repair — Cypress, Texas`
- **Outline (H2s):**
  1. Local Service from Spring, TX — Reaching Cypress
  2. Industrial Saws We Service in Cypress (explicitly include JLH alongside Hyd-Mech, DoAll, Marvel, Wells, HE&M, Kalamazoo)
  3. Drive Time & Same-Day Availability (Spring → Cypress: ~30-40 min via Hwy 249 / Beltway 8 / 290)
  4. Cypress's Industrial Context (Hwy 290 industrial corridor with steel service centers, NW Houston packaging and structural fab, machine shops along Fairbanks-N. Houston, plus the fact that band saw OEM JLH Saws is headquartered here — they sell saws, we service them)
  5. Why Saw Service 3G
  6. FAQ
  7. CTA
- **FAQ (3–4):**
  1. "How long does it take you to reach Cypress from Spring?" — About 30-40 min depending on the corridor.
  2. "Which Cypress facilities do you already service?" — Steel service centers, packaging-fab shops, machine shops along 290 / FM 529 / Fairbanks-N. Houston. References on request.
  3. "Do you service JLH-brand band saws?" — Yes. JLH is headquartered in Cypress; we service their saws on-site alongside Hyd-Mech, DoAll, Marvel, Wells, HE&M, Kalamazoo, and other major brands.
  4. "Do you do emergency calls in Cypress?" — Yes. Same-day when possible.
- **Word count:** 600–700 words (longer due to JLH paragraph)

## Structured data
- **`Service`** — `areaServed.City = "Cypress"`, brand list including Hyd-Mech + generic "all major brands"
- **`BreadcrumbList`**, **`FAQPage`**

## Internal links
Standard set + cross-link footer.

## Open Graph / Twitter
- og:title 48ch; og:description 152ch.

## Notes for Frontend
- **JLH mention is intentional** — verify owner actually services JLH-brand saws before publish (CLAUDE.md §4 honesty).
- Use `LocationPage` template.
- Add to sitemap.

## Cited MCP calls
- `keyword_overview` × `band saw repair cypress tx` — empty — 2026-05-12
- `keyword_overview` × parent — 2026-05-12
- `search_intent` × `band saw repair cypress tx` (navigational 0.368, commercial 0.363) — 2026-05-12
- `serp_organic_live_advanced` × `band saw repair cypress tx`, Cypress TX, depth 10 — 2026-05-12
