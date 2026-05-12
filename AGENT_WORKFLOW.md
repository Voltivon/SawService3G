# Agent Workflow — building SEO Next.js sites with a Claude Code subagent pipeline

This is the build process. It defines six Claude Code subagents, the order they run in, what each one is responsible for, what tools they're allowed to touch, which plugins / skills / MCPs they invoke, and how they hand work off to each other.

This doc is **the spec for how the pipeline runs**. The actual subagents live in [`.claude/agents/`](.claude/agents/) — Claude Code loads them when you call the `Agent` tool with a matching `subagent_type`.

---

## 1. The pipeline

```
┌────────────┐
│   HUMAN    │  Kickoff prompt; final push approval
└──────┬─────┘
       │
       ▼
┌─────────────┐  Day-to-day orchestration; sets scope + budget;
│  AI CEO     │  decides when to escalate to Human
└──────┬──────┘
       │ delegates
       ▼
┌──────────────────┐  Plans the work; writes specs; dispatches the
│ SENIOR ENGINEER  │  domain agents below; gathers their outputs
└──────┬───────────┘
       │
       ├──────────────────┐
       ▼                  ▼
┌──────────┐      ┌─────────────┐      ┌─────────┐
│   SEO    │ ───► │  FRONTEND   │      │ BACKEND │  (Backend may
│          │briefs│             │      │         │   run in parallel
└──────────┘      └─────────────┘      └────┬────┘   with Frontend
                         │                  │         when work is
                         └────────┬─────────┘         independent)
                                  ▼
                         ┌──────────────────┐
                         │  CODE REVIEWER   │  Read-only audit;
                         │                  │  reports findings
                         └────────┬─────────┘
                                  │
                                  ▼
                         (back up to Senior Engineer
                          → AI CEO → HUMAN push gate)
```

**The two key reorganizations from a naive linear chain:**

1. **SEO runs before Frontend, not after.** The SEO agent produces a *page brief* (intent, h1, meta, keywords, JSON-LD type, internal links) that the Frontend agent implements against. Frontend never invents page structure — it only implements the brief.

2. **Frontend and Backend can run in parallel.** Senior Engineer decides per-task whether their work is independent. For most SEO marketing pages, Backend isn't needed at all; for pages with form widgets or dynamic content, Backend handles the API route in parallel with Frontend's UI work.

**Code Reviewer always runs before any push.** No exceptions.

---

## 2. The six agents

### 2.1 AI CEO Agent (`ceo.md`)

**Purpose:** Day-to-day orchestration on behalf of the Human. Sets scope, makes budget calls, decides when to escalate to the Human CEO. Never edits code.

**Inputs:** Human kickoff prompt; status reports bubbling up from Senior Engineer.
**Outputs:** Briefs for Senior Engineer; escalations to Human CEO.

**Required Skill invocations:**
- `superpowers:brainstorming` for any new feature, new page, or scope change
- `superpowers:writing-plans` only when the work is small enough to plan inline; otherwise delegate planning to Senior Engineer
- `superpowers:finishing-a-development-branch` when wrapping a unit of work for the push gate

**Tools (restricted):** `Agent`, `Read`, `Grep`, `Glob`, `AskUserQuestion`, `TodoWrite`. **No `Edit` / `Write` / `Bash`** — orchestrator only.

**Hand-off rules:**
- Hands work to Senior Engineer via the `Agent` tool with `subagent_type: senior-engineer`
- Escalates to Human CEO whenever a push, paid signup, schema change, or PHI/PII-touching change is in scope
- Reports back to Human CEO when Senior Engineer signals "ready for push gate"

**MCPs:** None directly — delegates research to specialist agents.

---

### 2.2 Senior Engineer Agent (`senior-engineer.md`)

**Purpose:** The orchestrator. Turns CEO briefs into concrete specs and plans, then dispatches the domain agents (SEO, Frontend, Backend, Code Reviewer) and gathers their outputs. Holds the technical context for the project.

**Inputs:** CEO brief.
**Outputs:** Spec doc → implementation plan → dispatched agents' deliverables → consolidated report up to CEO.

**Required Skill invocations:**
- `superpowers:writing-plans` — every non-trivial unit of work gets a written plan
- `superpowers:executing-plans` — for plans with review checkpoints
- `superpowers:subagent-driven-development` — when dispatching independent tasks to multiple agents
- `superpowers:dispatching-parallel-agents` — when 2+ tasks have no shared state
- `superpowers:using-git-worktrees` — when work needs isolation from main

**Tools (restricted):** `Agent`, `Read`, `Grep`, `Glob`, `TodoWrite`, `EnterPlanMode`, `ExitPlanMode`. **No `Edit` / `Write` / `Bash`** — plans and dispatches; doesn't write code itself.

**Hand-off rules:**
- Always dispatches **SEO first** for any new page or content unit
- Dispatches Frontend with the SEO brief attached
- Dispatches Backend in parallel with Frontend if their work is independent
- Always dispatches Code Reviewer before reporting "ready" up to CEO
- Reports up to CEO with a one-paragraph summary + the diff stat + Code Reviewer's verdict

**MCPs:** None directly.

---

### 2.3 SEO Agent (`seo.md`)

**Purpose:** Owns search-engine performance. Researches keywords, analyzes SERPs and competitors, produces page briefs, validates that everything shipped meets the SEO release-blocker checklist in [`CLAUDE.md`](CLAUDE.md) §4.

**Inputs:** A page request from Senior Engineer (e.g., "landing page for emergency plumbers in Riverside, CA").
**Outputs:** A **page brief** in markdown with:
- Target primary keyword + 3–5 secondary keywords (with search volume / difficulty from dataforseo)
- Search intent classification (informational / transactional / navigational / commercial)
- Top 5 competing SERP results + what they cover
- Required page structure: `<h1>`, recommended `<h2>` outline, FAQ section if intent calls for it
- Meta title (≤60 chars) + meta description (140–160 chars)
- Suggested JSON-LD schema type (`LocalBusiness` / `Service` / `BlogPosting` / `Article` / `FAQPage` / etc.)
- Internal links the page should include (anchor text + target URL)
- Word count target based on competing SERP averages

**Required Skill invocations:**
- `superpowers:brainstorming` before drafting any new content brief

**Tools (restricted):** `Read`, `Grep`, `Glob`, `WebFetch`, `WebSearch`, `mcp__dataforseo__*`. **No `Edit` / `Write` / `Bash`** — produces briefs only, never modifies code.

**MCPs — Workflow A (per-page brief, mandatory):**
- `mcp__dataforseo__dataforseo_labs_google_keyword_overview` — primary keyword volume, KD, CPC
- `mcp__dataforseo__dataforseo_labs_google_keyword_ideas` *(or `_related_keywords` / `_keyword_suggestions`)* — secondary keyword candidates
- `mcp__dataforseo__dataforseo_labs_search_intent` — intent classification
- `mcp__dataforseo__serp_organic_live_advanced` — live SERP for the target keyword (organic + SERP features)
- `mcp__dataforseo__dataforseo_labs_google_serp_competitors` — domains repeatedly ranking for the cluster
- `mcp__dataforseo__on_page_content_parsing` — read top-5 competing pages
- `mcp__local-falcon__runLocalFalconScan` + `getLocalFalconReport` — geo-grid local pack scan (every brief)
- `mcp__local-falcon__getLocalFalconCompetitorReport` — geo-grid competitor analysis (every brief)

**MCPs — Workflow B (post-launch validation, mandatory):**
- `mcp__dataforseo__on_page_lighthouse` — SEO ≥ 95, Performance ≥ 90 mobile
- `mcp__dataforseo__on_page_instant_pages` — verify rendered HTML. Confirm exactly one Google tag (`G-5V1G92HRCM`) is present and loads from `googletagmanager.com/gtag/js`. Zero tags or duplicates = blocker.
- `mcp__local-falcon__runLocalFalconScan` + `getLocalFalconReport` — post-launch grid baseline

**MCPs — Workflow C (periodic site audit, on-demand):**
- `dataforseo_labs_google_domain_rank_overview`, `_historical_rank_overview`, `_ranked_keywords`
- `backlinks_summary`, `backlinks_referring_domains`, `backlinks_anchors`, `backlinks_timeseries_new_lost_summary`, `backlinks_competitors`, `backlinks_domain_intersection`, `backlinks_bulk_spam_score`
- `domain_analytics_technologies_domain_technologies`, `domain_analytics_whois_overview`
- `kw_data_google_trends_explore`, `kw_data_dfs_trends_explore`
- `getLocalFalconTrendReport`, `getLocalFalconReviewsAnalysisReport`

**MCP discipline:** Every metric in every artifact (brief, audit, hand-off) must trace to an MCP call from this session. No estimating. No "approximately." See decision tree in [`.claude/agents/seo.md`](.claude/agents/seo.md).

**Hand-off rules:**
- Returns the brief to Senior Engineer as a markdown artifact (saved to `docs/seo-briefs/<slug>.md` so it lives with the project)
- Re-engaged after launch to run `on_page_lighthouse` and confirm Lighthouse SEO ≥ 95

---

### 2.4 Frontend Agent (`frontend.md`)

**Purpose:** Implements pages and components from SEO briefs. Owns the design system, typography, layout, and accessibility. Mobile-first.

**Inputs:** SEO brief from the SEO agent + the project's design tokens.
**Outputs:** Working pages and components in the Next.js app; updated design tokens when needed; Storybook stories or example pages for each component.

**Required Skill invocations:**
- `frontend-design:frontend-design` for any new component or page (avoids generic AI aesthetics)
- `ui-ux-pro-max:ui-ux-pro-max` for layout / color / typography decisions
- `ui-styling` for shadcn/ui or Tailwind component work
- `design-system` when introducing new design tokens
- `superpowers:test-driven-development` for any logic that's not pure layout (form validation, parsers, hooks)
- `superpowers:verification-before-completion` before reporting work as done

**Tools (full):** `Read`, `Edit`, `Write`, `Glob`, `Grep`, `Bash`, `TodoWrite` — full implementation.

**Hand-off rules:**
- Receives SEO brief as input; **never invents page structure** — works only from the brief
- For visual decisions, dispatches via UI/UX Pro Max patterns; doesn't freelance
- When a page involves form data, coordinates with Backend agent on the API contract before implementing the form
- Reports completion to Senior Engineer with: list of files changed, screenshots (or notes) of mobile + desktop renders, Lighthouse score, accessibility audit summary

**MCPs:** shadcn/ui MCP is invoked through the `ui-ux-pro-max` skill — no direct MCP calls needed.

---

### 2.5 Backend Agent (`backend.md`)

**Purpose:** Owns server-side code. For an SEO marketing site, this is light — Next.js Route Handlers for forms (Resend / generic email), webhooks, and any small API needs. **No database by default.** If a project needs persistence later, that's a scope expansion that must be approved by AI CEO + Human CEO.

**Inputs:** API contract from Senior Engineer (or Frontend, when negotiating a form's payload shape).
**Outputs:** Route Handlers under `app/api/`, validation schemas (Zod), error handling, security pentest notes.

**Required Skill invocations:**
- `superpowers:test-driven-development` — every Route Handler ships with a test
- `superpowers:systematic-debugging` for any bug or unexpected behavior — no fix-by-guess
- `superpowers:verification-before-completion` before reporting work as done
- `claude-api` only when adding LLM-powered features (rare for SEO sites)

**Tools (full):** `Read`, `Edit`, `Write`, `Glob`, `Grep`, `Bash`, `TodoWrite`.

**Hand-off rules:**
- Owns the API contract once a Frontend / Backend coordination is needed
- Always writes the validation layer (Zod schema) before the handler logic
- Always sanitizes + length-limits user input; defers OWASP discipline per [`CLAUDE.md`](CLAUDE.md) §5
- Reports completion to Senior Engineer with: list of files changed, test results, **Pentest Notes** (what attack surface was added, what was mitigated, what residual risk remains)

**MCPs:** None directly.

---

### 2.6 Code Reviewer Agent (`code-reviewer.md`)

**Purpose:** Final pre-push audit. Reads everything that changed; flags bugs, security issues, SEO §2 misses, accessibility issues, and inconsistencies with project conventions. **Never edits — reports findings only.**

**Inputs:** A diff range (e.g., `origin/main..HEAD`) plus context on what was supposed to change.
**Outputs:** A markdown review report with: blocking issues, suggested improvements, security pentest notes, SEO checklist verification.

**Required Skill invocations:**
- `superpowers:requesting-code-review` and `superpowers:receiving-code-review` patterns
- `superpowers:verification-before-completion` to confirm tests / build / lint pass
- `security-review` for any change that touches form handlers, API routes, auth, or data handling

**Tools (restricted):** `Read`, `Grep`, `Glob`, `WebFetch`, `Bash` (for read-only commands like `git diff`, `npm test`, `npm run lint`). **No `Edit` / `Write`** — auditor only.

**Hand-off rules:**
- Returns the review report to Senior Engineer
- Senior Engineer either dispatches Frontend / Backend back to fix blocking issues, or signals "ready for push gate" to AI CEO
- A push **cannot** happen until Code Reviewer has signed off on the latest commit

**MCPs:** None directly.

---

## 3. Initial-build workflow (new project from this template)

The first time you run the pipeline on a fresh project:

1. **Human kickoff** — describe the business, location, target keywords. Hand it to AI CEO.
2. **AI CEO** — invokes `superpowers:brainstorming` to clarify scope, content tier (number of pages), CMS choice (default MDX in repo), launch deadline. Produces a project brief.
3. **AI CEO → Senior Engineer** with the project brief.
4. **Senior Engineer** — invokes `superpowers:writing-plans` to produce a phased build plan. Phases typically:
   - Phase 0: scaffold Next.js App Router + TypeScript + base styling + content schemas
   - Phase 1: home page + global nav/footer + design tokens
   - Phase 2: services / about / contact pages
   - Phase 3: form handler + Resend wiring
   - Phase 4: SEO infrastructure (sitemap.xml route, robots.txt, JSON-LD components)
   - Phase 5: per-page SEO content (each page gets the SEO → Frontend cycle)
5. **Per phase, Senior Engineer dispatches:**
   - SEO agent for any page that needs a brief (skip for purely structural phases)
   - Frontend agent (with the SEO brief if applicable)
   - Backend agent in parallel when independent
   - Code Reviewer at end of phase
6. **Phase complete → Senior Engineer reports up → AI CEO**
7. **AI CEO → Human CEO push gate** at the end of each meaningful phase, never inside one
8. **Human CEO authorizes push** in chat, explicitly, per push

---

## 4. Repeatable subroutine — "Add a new SEO page"

This is the workflow you'll run dozens of times across a project's life. It must be cheap, fast, and consistent.

### 4.1 Trigger

Human types in chat (or via a slash command like `/add-page`):

> "Add a new landing page targeting `<keyword>` for `<location/segment>`. Goal: rank top 3 for the primary keyword within 6 months."

### 4.2 Steps

| # | Owner | Action | Output |
|---|-------|--------|--------|
| 1 | AI CEO | Invokes `superpowers:brainstorming`. Confirms keyword choice, primary user intent, page tier (location vs. service vs. blog post). | One-paragraph brief to Senior Engineer. |
| 2 | Senior Engineer | Invokes `superpowers:writing-plans`. Writes a short plan (single phase: SEO research → page implementation → review). Dispatches SEO agent. | Plan file at `docs/plans/add-page-<slug>.md`. |
| 3 | SEO Agent | Runs Workflow A: dataforseo MCP suite (keyword overview, ideas, intent, live SERP, SERP competitors) + competitor page parsing + Local Falcon geo-grid scan + competitor grid report. Drafts the page brief with every metric cited to its MCP call. | `docs/seo-briefs/<slug>.md`. |
| 4 | Senior Engineer | Reviews the brief. If anything's missing or off, dispatches SEO again with feedback. Else dispatches Frontend with the brief. | — |
| 5 | Frontend Agent | Creates the page file at `app/<route>/page.tsx` (or `app/<segment>/<slug>/page.tsx` for dynamic routes). Implements per the brief. Reuses existing components and design tokens. Adds the page to `sitemap.xml` route. Adds JSON-LD per the brief's schema type. | New page + sitemap entry. |
| 6 | Backend Agent | **Skipped** unless the page needs new dynamic data or a new form handler. | — |
| 7 | Code Reviewer | Audits the diff. Verifies SEO §2 checklist (title, description, canonical, OG, JSON-LD, h1 count, internal links, **Google tag `G-5V1G92HRCM` present exactly once in `app/layout.tsx`**). Runs Lighthouse via dataforseo `on_page_lighthouse`. | Review report; pass/fail + suggested fixes. |
| 8 | Senior Engineer → AI CEO | Reports phase complete. | Diff summary + Code Reviewer verdict. |
| 9 | AI CEO → Human CEO | Push gate. | Human authorizes; CEO runs `git push`. |

**Time budget for an "add a page" cycle: 30–60 minutes** if the existing component library covers the layout. Longer only if new components are needed (which kicks Frontend back into design-system mode).

---

## 5. Plugin / skill / MCP cheat sheet

| Agent | Skills (mandatory in **bold**) | MCPs |
|-------|-------------------------------|------|
| AI CEO | **`superpowers:brainstorming`**, `superpowers:writing-plans`, `superpowers:finishing-a-development-branch` | — |
| Senior Engineer | **`superpowers:writing-plans`**, **`superpowers:executing-plans`**, `superpowers:subagent-driven-development`, `superpowers:dispatching-parallel-agents`, `superpowers:using-git-worktrees` | — |
| SEO | **`superpowers:brainstorming`** | **`mcp__dataforseo__*`** (per-brief: keyword overview, ideas, intent, SERP, SERP competitors, on_page_content_parsing; post-launch: lighthouse, instant_pages; periodic audit: backlinks, domain rank overview, historical, technologies, trends), **`mcp__local-falcon__*`** (every brief: runLocalFalconScan + competitor report; post-launch: re-scan; periodic: trend + reviews analysis) |
| Frontend | **`frontend-design`**, **`ui-ux-pro-max`**, `ui-styling`, `design-system`, **`superpowers:test-driven-development`**, **`superpowers:verification-before-completion`** | shadcn/ui MCP via ui-ux-pro-max |
| Backend | **`superpowers:test-driven-development`**, **`superpowers:systematic-debugging`**, **`superpowers:verification-before-completion`**, `claude-api` (only for LLM features) | — |
| Code Reviewer | **`superpowers:requesting-code-review`**, **`superpowers:receiving-code-review`**, **`superpowers:verification-before-completion`**, **`security-review`** | — |

---

## 6. Hand-off protocol

Inter-agent messages should always include three things, regardless of direction:

1. **The artifact** (or path to it). Not a summary — the actual deliverable.
2. **What was decided and why.** A two-line decision log.
3. **What's blocked or open.** If anything needs the next agent's input.

**Example hand-off — SEO → Senior Engineer:**

> **Brief:** `docs/seo-briefs/emergency-plumber-riverside.md`
> **Decisions:** Primary keyword "emergency plumber riverside" (1.6k searches/mo, KD 38). Intent: transactional. JSON-LD type: `LocalBusiness` + `EmergencyService`. Word count target: 850 (median of top 5 SERP).
> **Blocked / open:** None.

This format keeps the chain auditable and lets the next agent jump in without backtracking.

---

## 7. When to invoke the Human

The Human CEO is invoked **only** for:

- **Production pushes.** Per `CLAUDE.md` §7 — every push is a CEO sign-off.
- **Paid service signups.** Sanity, Vercel paid tier, dataforseo subscription bumps, Resend domain upgrade.
- **Schema changes** that require manual data migration or vendor coordination.
- **Anything touching PHI / PII / payment data.** Per global CLAUDE.md §1 (Human Verification Requirement).
- **Brand / positioning decisions.** AI CEO defers; Human owns the brand voice.
- **Anything irreversible** that wasn't in the original CEO brief.

Anything else, the AI CEO decides.

---

## 8. Common pitfalls

- **Don't let SEO agent edit code.** Its tools are restricted for a reason. If SEO finds a bug while reviewing a page, it reports up to Senior Engineer; the relevant agent fixes it.
- **Don't let Frontend skip the SEO brief.** Even for a "simple" page. The brief is what makes the page rank — guessing at structure burns the page's ranking potential.
- **Don't run Backend on every change.** For a static-mostly SEO site, Backend is dormant most of the time. Don't invoke it just because it exists.
- **Don't push without Code Reviewer.** No exceptions. Even one-line copy fixes go through review.
- **Don't escalate to Human for things AI CEO can decide.** Each unnecessary Human ask trains the Human to ignore the next one. Reserve escalation for the §7 list.
- **Don't let CLAUDE.md drift.** When you discover a project-specific rule, add it to CLAUDE.md §10 ("Things that have already burned us") immediately, before the next session forgets.

---

## 9. Versioning

This workflow is the spec. When you find an improvement while running it on a real project, port the change back to this template repo before applying it elsewhere. The agent files in `.claude/agents/` and this `AGENT_WORKFLOW.md` should always agree.

Current workflow version: **v0.2** (2026-05-10) — added Local Falcon MCP, expanded DataForSEO catalog, added Workflow B / C, added §10 periodic audit subroutine.

---

## 10. Repeatable subroutine — "Run a periodic site-wide SEO audit"

This is run monthly (or on-demand from Human CEO) and produces a strategy document at `docs/seo-audits/<YYYY-MM-DD>-site-audit.md`. Distinct from the per-page brief subroutine in §4 — this is the slow, expensive audit.

### 10.1 Trigger

Human or AI CEO requests a site-wide SEO audit. Typical cadence: monthly, plus ad-hoc when a competitor moves or a ranking drops.

### 10.2 Steps

| # | Owner | Action | Output |
|---|-------|--------|--------|
| 1 | AI CEO | Confirms scope (full audit vs. focused — e.g., "backlinks only"). | One-paragraph brief to Senior Engineer. |
| 2 | Senior Engineer | Dispatches SEO Agent in Workflow C mode. | — |
| 3 | SEO Agent | Runs the Workflow C MCP suite: domain rank, ranked keywords, backlink profile, backlink gap, tech stack, trends, Local Falcon trend + reviews. Synthesizes findings. | `docs/seo-audits/<YYYY-MM-DD>-site-audit.md`. |
| 4 | Senior Engineer | Reviews. If audit recommends new pages or content changes, queues them as separate page-brief dispatches. | Plan amendments. |
| 5 | AI CEO | Reads audit summary. Decides which recommendations to action this cycle vs. defer. | Prioritized work list. |
| 6 | Human CEO | Optional review for budget-impacting recommendations (e.g., link building campaign). | Approval / deferral. |

### 10.3 What's in the audit report

- Domain authority signals snapshot (with deltas vs. last audit)
- Top 20 ranked keywords with rank position, search volume, KD, change-since-last-audit
- New / lost backlinks (count + top examples), spam score outliers
- Backlink gap: 10 highest-priority domains linking to competitors but not us
- Tech stack comparison (us vs. top 3 competitors)
- Trend insights (interest curves for our top categories)
- Local geo-grid trend per location (AGR over 12 months)
- Reviews summary per location (volume, rating, sentiment)
- Prioritized recommendations: top 5 actionable items, owner, estimated impact
