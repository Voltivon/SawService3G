# Project Directives — SEO Site (Next.js + Agent Pipeline)

This file applies to all work in this project. It is layered on top of the user's global directives at `~/.claude/CLAUDE.md` (security-first, human-verification, regulated-systems guardrails). Where this file is silent, those still apply. Where they conflict, the user's explicit instruction wins.
 Never Push without human verification 
> **First time in this repo?** Read [`AGENT_WORKFLOW.md`](AGENT_WORKFLOW.md) before doing anything. It defines the six subagents and the order they run in.

---

## 1. Plugin / skill mandate

Use Claude Code skills for the matching work — do not freelance. The agent pipeline in [`AGENT_WORKFLOW.md`](AGENT_WORKFLOW.md) assigns specific skills to each role; this section is the global mandate that backs that up.

**Required for every session:**
- `superpowers:using-superpowers` — auto-loads on session start; defines how to invoke skills
- `superpowers:brainstorming` before any new feature, page, copy change, or design change
- `superpowers:writing-plans` for any multi-step task (more than ~3 steps)
- `superpowers:test-driven-development` for any logic in `app/api/` or `lib/`
- `superpowers:systematic-debugging` for any bug or unexpected behavior — no fix-by-guess
- `superpowers:verification-before-completion` before claiming any task is done
- `superpowers:requesting-code-review` and `superpowers:receiving-code-review` before any push

**Required for visual / UI work** (any change to `app/**/page.tsx`, `app/**/layout.tsx`, `components/`, design tokens, CSS, Tailwind config):
- `frontend-design:frontend-design` — distinctive, production-grade interfaces
- `ui-ux-pro-max:ui-ux-pro-max` — layout, typography, color systems
- `ui-styling` — shadcn/ui or Tailwind component work
- `design-system` — token architecture and component specs

**Required for security-sensitive work** (any change to `app/api/`, auth, form handlers, file uploads, query construction):
- `security-review` — pre-push security audit

**Trivial edits** (typo fix, single-character change, image swap) may skip plugin invocation but must still pass §4 (SEO checklist) and §7 (push gate).

---

## 2. Subagent workflow reference

For any non-trivial task, route through the agent pipeline defined in [`AGENT_WORKFLOW.md`](AGENT_WORKFLOW.md). **Don't freelance.**

The pipeline is: **Human → AI CEO → Senior Engineer → (SEO ∥ Frontend ∥ Backend) → Code Reviewer → Senior Engineer → AI CEO → Human (push gate).**

The subagent definitions live in [`.claude/agents/`](.claude/agents/). Invoke them via the `Agent` tool with the matching `subagent_type` (e.g., `subagent_type: ceo`, `subagent_type: seo`).

**When to bypass the pipeline:**
- Typo / single-character fixes — direct edit is fine, but still goes through Code Reviewer + push gate.
- Quick read-only investigations (answering questions, exploring code) — no pipeline needed.
- **Never bypass for:** content additions, page additions, API route changes, dependency upgrades, design token changes, security-related changes.

---

## 3. MCP usage

Available MCPs and when to invoke them:

| MCP | When to invoke | Owning agent |
|-----|----------------|--------------|
| `mcp__dataforseo__*` (keyword + SERP + intent + on-page) | Every per-page SEO brief (Workflow A) and every post-launch verification (Workflow B). Never produce a brief or audit without citing real numbers from these calls. | SEO Agent |
| `mcp__dataforseo__*` (backlinks + domain analytics + trends + content analysis + historical) | Periodic site-wide audit (Workflow C — monthly or on-demand). Not run per page. | SEO Agent |
| `mcp__local-falcon__*` (geo-grid scans + competitor + reviews) | Every per-page brief (geo-grid scan + competitor report) and every post-launch verification. Periodic audit also pulls trend + reviews reports. | SEO Agent |
| shadcn/ui MCP (via `ui-ux-pro-max` skill) | Sourcing component patterns and examples | Frontend Agent |
| Any future MCPs | Document them here as added | TBD |

**Discipline:** Numbers in any SEO artifact must trace to an MCP call from the same session. No estimating, no "approximately," no vibes-based SEO. The SEO Agent's decision tree (which work is native vs. MCP) lives in [`.claude/agents/seo.md`](.claude/agents/seo.md).

---

## 4. SEO is a release blocker

Every page shipped from this repo must satisfy the following before merge. This is not aspirational — a page that fails any item is not ready to push.

### Per-page HTML / metadata requirements
- Unique `<title>` ≤ 60 characters, brand-suffixed
- `<meta name="description">` 140–160 characters, written for the page (no copy-paste across pages)
- `<link rel="canonical" href="…">` with the production URL (matching the actual redirect target — apex vs. www)
- `<meta name="robots" content="index,follow">` (or explicit override with reason)
- Open Graph: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`
- Twitter card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- JSON-LD structured data:
  - `Organization` on every page
  - `LocalBusiness` on the contact page
  - `Service` (and `OfferCatalog` for plans) on the services page
  - `BlogPosting` on blog posts
  - `Article` on case studies
  - `FAQPage` when the page has an FAQ section
  - `BreadcrumbList` on any page deeper than one level

### Site-wide requirements
- `robots.txt` at site root, references the sitemap
- `sitemap.xml` regenerated whenever pages are added/renamed (use Next.js's `app/sitemap.ts` route)
- One `<h1>` per page; heading hierarchy is unbroken (no `h2`→`h4` jumps)
- Every `<img>` has descriptive `alt`; decorative images use `alt=""`
- All internal links use relative paths; no broken links
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
- **Google tag (gtag.js) loaded on every page exactly once.** Measurement ID `G-XDWNTPSF57`. Inject as early in `<head>` as the framework allows (immediately after `<head>` opens per Google's spec). In Next.js App Router this means injecting it in `app/layout.tsx` — preferred implementation is `@next/third-parties/google`'s `<GoogleAnalytics gaId="G-XDWNTPSF57" />` placed inside the root `<body>`, or `next/script` with `strategy="afterInteractive"` rendering the snippet below. **Never duplicate the tag** (don't add it to individual pages if it's in the root layout). Reference snippet:
  ```html
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XDWNTPSF57"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-XDWNTPSF57');
  </script>
  ```

### Performance
- No render-blocking script in `<head>` without `defer`/`async` justification
- Images served at display size; use `next/image` with explicit dimensions
- `loading="lazy"` for below-fold images (default in `next/image`)
- Lighthouse SEO ≥ 95, Performance ≥ 90 on mobile (verified via dataforseo `on_page_lighthouse`)

### Honesty (FTC / brand integrity)
- No fabricated metrics, no unverifiable claims, no fake testimonials
- Numbers shown on the site must be defensible if a prospect asks "where did this come from?"

---

## 5. Security-first development

Carryover from the user's global `~/.claude/CLAUDE.md` §2. Treat every coding task as a Senior Security Engineer would. Run the OWASP Top 10 mental pentest before and during implementation.

### Before writing code
- Identify task-specific security risks (OWASP Top 10 scan)
- Note in the implementation plan what attack surface is being added

### During implementation
- Sanitize, type-check, and length-limit all user inputs (use Zod on every Route Handler)
- Parameterized queries only — never string-concatenated SQL (relevant once any DB lands)
- Log errors server-side; return generic messages to the client (no stack traces, no internal error details)
- All POST routes require CSRF tokens (Next.js Route Handlers — use the built-in `next-safe-action` pattern or equivalent)
- All sensitive routes require authentication
- Validate paths and sanitize filenames for any file operation
- Wrap type conversions (`parseInt`, `parseFloat`, `JSON.parse`, etc.) in try/catch with graceful error responses
- Never instantiate sensitive clients (Resend, DB) at module top-level — defer to inside the handler so secret-loading errors surface properly

### After code
- Include **Pentest Notes** in PR descriptions / chat summaries explaining the security measures taken and any residual risk

### Recurring known-issue checklist
- Missing authentication or authorization
- Missing CSRF protection
- `NODE_ENV=development` / verbose errors exposed in production
- No custom error handlers (stack trace leakage)
- Unchecked numeric conversions on user input
- No rate limiting on form endpoints
- Missing security headers: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` (set in `next.config.js` headers)

---

## 6. Human Verification Requirement

Carryover from the user's global `~/.claude/CLAUDE.md` §1. **Relevant if this site ever collects regulated data** (RCM, PHI, PII, payment information).

If the project starts handling regulated data, the following become mandatory:

- No claim, code assignment, denial resolution, charge capture, or equivalent action auto-submits without a human verification step
- Every AI-assisted action must be logged: what was suggested, what was accepted/overridden, who reviewed, when
- State machines must route through an explicit `ai_suggested` → `human_verified` transition — never skip to `submitted`
- Auto-analysis features present findings for human confirmation; they do not auto-resolve
- The UI must show what the AI changed and why, so the verifier can assess correctness
- Every AI decision needs an override path with a mandatory reason field
- Audit trails must be immutable and complete
- Batch operations produce reviewable reports, not silent auto-fixes

If the current project is purely a marketing site (no regulated data flowing through forms), this section is dormant — but flag immediately if scope expands to include regulated data so the architecture can be designed accordingly.

---

## 7. Push gate — two-tier approval

`git push` against this repo is a **privileged action**. Pushing to `main` typically auto-deploys to production via Vercel, so a push **is** a production deploy.

### Tier 1 — AI CEO authorization (every push)
The AI CEO must verify and confirm in chat before requesting Human approval:
1. All §4 SEO checks pass for any pages touched
2. The change has been tested locally (`npm run build` succeeds, `npm run lint` clean, `npm test` passes for any logic touched)
3. `git status` is clean and `git diff origin/main...HEAD` has been reviewed by the agent and reported in chat
4. Code Reviewer agent has signed off (no unresolved blocking findings)
5. Pentest Notes are attached for any security-sensitive change

### Tier 2 — Human CEO authorization (every push)
Even after AI CEO has confirmed all of the above, the actual `git push` requires **explicit, in-chat authorization from the Human CEO for that specific push**.

- "You can push" earlier in the session does **not** authorize a later push — authorization is per-push.
- Local commits and branch work do **not** require Human CEO approval. Only push.
- If the Human CEO is unreachable and a push feels urgent, the answer is "wait." There is no emergency-bypass.

### Things that absolutely require Human CEO regardless of AI CEO sign-off
- First push to a new remote
- Any push that touches authentication, payment processing, or regulated data
- Any push after a failed deploy on the previous push
- Any rollback or `git push --force`

---

## 8. Stack quick-reference

- **Framework:** Next.js (App Router) + TypeScript
- **Pages:** `app/` directory, file-based routing. Marketing pages: `app/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx`. Dynamic SEO pages: `app/locations/[slug]/page.tsx`, `app/blog/[slug]/page.tsx`, `app/case-studies/[slug]/page.tsx`.
- **Content:** MDX files under `content/{blog,case-studies,locations}/`. Schemas defined with Zod in `lib/content-schemas.ts`. Loaded at build time via `contentlayer` or a custom loader (Frontend agent picks).
- **Styling:** Tokenized CSS approach (port the Websmith pattern: design tokens in `:root`, semantic class names, mobile-first media queries). Frontend agent decides on Tailwind vs. CSS Modules per project but the token approach stays.
- **Forms:** Next.js Route Handlers under `app/api/`. Form delivery via Resend (`RESEND_API_KEY` env var). Always with Zod validation, honeypot field, and rate limiting.
- **SEO infrastructure:**
  - `app/sitemap.ts` — generates `/sitemap.xml` from MDX content + static routes
  - `app/robots.ts` — generates `/robots.txt`
  - `app/layout.tsx` — global `<Metadata>` defaults **and** the Google tag (`G-XDWNTPSF57`) injected exactly once. Use `@next/third-parties/google` `<GoogleAnalytics gaId="G-XDWNTPSF57" />` or `next/script` with `strategy="afterInteractive"`. Never re-inject in child layouts or pages.
  - Per-page `export const metadata` for title/description/OG/Twitter/canonical
  - `<JsonLd>` component (in `components/seo/`) for structured data
- **Hosting:** Vercel. Auto-deploy from `main`. Push gate per §7.

---

## 9. Adding a new page

This is the most-run workflow on any SEO site project. It has its own dedicated subroutine in [`AGENT_WORKFLOW.md`](AGENT_WORKFLOW.md) §4. Tl;dr:

> Human asks AI CEO to "add a new page targeting `<keyword>` for `<location/segment>`" → AI CEO brainstorms scope → Senior Engineer dispatches SEO (research + brief) → Frontend (implement from brief) → Code Reviewer (audit) → push gate.

The full table with owners, outputs, and time budgets is in `AGENT_WORKFLOW.md` §4.

---

## 10. Things that have already burned us

This section grows over the project's life. Add an entry every time a bug, deploy issue, or design regression burns time, so the next session doesn't repeat it.

### Carry-overs from prior projects (Websmith)
- **Don't return diagnostic error details to API clients.** Generic messages to the client; full details to server logs only.
- **Don't instantiate the Resend client at module top-level.** Defer to inside the Route Handler so missing-env-var errors surface immediately and predictably.
- **Don't rename the home route file.** The bare URL depends on the framework's home convention (`app/page.tsx`, not renamed).
- **Don't push without verifying the Vercel↔GitHub integration.** A push that succeeds in git but doesn't deploy looks like a working deploy until you check the live site. Always confirm `last-modified` on the production response after a push.
- **Don't use 56px+ minimums in `clamp()` for headings on mobile.** Long single words can overflow narrow viewports. Use `overflow-wrap: break-word` and lower clamp minimums to ≤40px.
- **`overflow-x: clip` on `<body>` is the safety net of choice** — `clip` preserves sticky positioning on children, `hidden` does not.

### Project-specific (fill in as you go)
- _(empty — add entries here as the project teaches you things)_
