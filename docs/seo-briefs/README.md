# SEO Briefs

Page-level briefs produced by the SEO Agent (Workflow A) per
[`AGENT_WORKFLOW.md`](../../AGENT_WORKFLOW.md) §4. Each brief is the
implementation source-of-truth for the Frontend Agent — page structure, meta,
JSON-LD schema, internal links, word count, and the MCP calls behind every
metric.

## Active briefs (queued for Track B implementation)

| Slug / route | Primary keyword | Cluster volume | Priority |
|---|---|---|---|
| [`/services/hyd-mech-band-saw-repair`](./hyd-mech-band-saw-repair.md) | `hyd-mech band saw` cluster | ~480/mo | Tier 1 — biggest of the three |
| [`/brands/hyd-mech`](./brands-hyd-mech.md) | `hyd-mech saw` cluster | ~320/mo | Tier 1 — brand-authority hub |
| [`/resources/hyd-mech-s-20a-parts-list`](./hyd-mech-s-20a-parts-list.md) | `hyd-mech s-20a parts list` | ~50/mo, **LOW comp** | Tier 2 — long-tail / AI Overview play |

**Volume note:** Each cluster is Google-clustered (same `core_keyword`). The
cluster total is *not* the sum of its variants — the prior dispatch
overstated by ~3× by adding variants. The numbers above are the corrected
cluster totals.

## How to use these briefs

1. Pick a brief based on Tier + dependencies (Brief 1 first; Briefs 2 and 3
   reference Brief 1's `LocalBusiness` `@id` and internal links).
2. Frontend Agent reads the brief end-to-end before writing code. Don't
   invent page structure — implement against the brief.
3. After implementation, SEO Agent runs Workflow B (post-launch verification):
   `on_page_lighthouse`, `on_page_instant_pages`, and Local Falcon re-scan.
4. Re-brief if the SERP shifts materially between brief authoring and
   implementation (>30 days, or after a Google core update).
