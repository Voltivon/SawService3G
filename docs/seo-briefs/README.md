# SEO Briefs

Page-level briefs produced by the SEO Agent (Workflow A) per
[`AGENT_WORKFLOW.md`](../../AGENT_WORKFLOW.md) §4. Each brief is the
implementation source-of-truth for the Frontend Agent — page structure, meta,
JSON-LD schema, internal links, word count, and the MCP calls behind every
metric.

## Status

| Slug / route | Primary keyword | Cluster vol | Status |
|---|---|---|---|
| [`/services/hyd-mech-band-saw-repair`](./hyd-mech-band-saw-repair.md) | `hyd-mech band saw` | ~480/mo | **Built** (commit ahead) |
| [`/brands/hyd-mech`](./brands-hyd-mech.md) | `hyd-mech saw` | ~320/mo | **Built** (commit ahead) |
| [`/resources/hyd-mech-s-20a-parts-list`](./hyd-mech-s-20a-parts-list.md) | `hyd-mech s-20a parts list` | ~50/mo · LOW | **Built** (commit ahead) |
| [`/services/marvel-band-saw-repair`](./marvel-band-saw-repair.md) | `marvel band saw` | ~390/mo | Queued |
| [`/services/hem-saw-repair`](./hem-saw-repair.md) | `hem saw` | ~1300/mo | Queued |
| [`/services/amada-band-saw-repair`](./amada-band-saw-repair.md) | `amada saw` / `amada band saw` | ~320/mo + 210/mo | Queued |
| [`/services/behringer-band-saw-repair`](./behringer-band-saw-repair.md) | `behringer saw` | ~480/mo | Queued |
| [`/services/tsune-band-saw-repair`](./tsune-band-saw-repair.md) | `tsune saw` | ~110/mo | Queued |
| [`/service-area/houston-tx`](./service-area-houston.md) | `band saw repair` (parent) | 90/mo cluster | Queued |
| [`/service-area/spring-tx`](./service-area-spring.md) | `band saw repair` (parent) | 90/mo cluster · **home city** | Queued |
| [`/service-area/katy-tx`](./service-area-katy.md) | `band saw repair` (parent) | 90/mo cluster | Queued |
| [`/service-area/cypress-tx`](./service-area-cypress.md) | `band saw repair` (parent) · navigational due to JLH HQ | 90/mo cluster | Queued |
| [`/service-area/the-woodlands-tx`](./service-area-the-woodlands.md) | `band saw repair` (parent) · shortest drive | 90/mo cluster | Queued |
| [`/service-area/conroe-tx`](./service-area-conroe.md) | `band saw repair` (parent) · widest opportunity | 90/mo cluster | Queued |

## Volume note

Each cluster is Google-clustered (same `core_keyword`). The cluster total is *not* the sum of its variants — DataForSEO returns identical histograms for clustered variants. City-specific queries (`band saw repair houston`, `band saw repair spring tx`, etc.) are all below DataForSEO's measurement floor (<10/mo); each location brief attaches to the parent cluster `band saw repair` (90/mo). The combined upside across the 14 pages is in the right shape for capturing the entire long-tail of brand × service × city intent — most pages individually rank for 5–30 monthly searches, cumulatively dominant.

## How to use these briefs

1. Pick a brief based on impact + dependencies (brand pages reference `/services/hyd-mech-band-saw-repair`'s `LocalBusiness @id` and internal links).
2. Frontend Agent reads the brief end-to-end before writing code. Don't invent page structure — implement against the brief.
3. After implementation, SEO Agent runs Workflow B (post-launch verification): `on_page_lighthouse`, `on_page_instant_pages`, and Local Falcon re-scan against the deployed URL.
4. Re-brief if the SERP shifts materially between brief authoring and implementation (>30 days, or after a Google core update).

## Authorized-dealer honesty rule

Per the owner intake, **only Hyd-Mech is a formal authorized-dealer relationship.** The 5 other brand pages (Marvel, HEM, Amada, Behringer, Tsune) must use "experienced with" / "decades on" / "every model" language. **Never** "authorized" / "factory-backed" / "OEM-certified" for those brands unless owner confirms in writing.
