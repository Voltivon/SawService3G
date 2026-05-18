import { AlertTriangle } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import {
  failureModesByBrand,
  type FailureMode,
  type ModelGroup,
  type Severity,
} from "@/data/failure-modes";

// ---------------------------------------------------------------------------
// FailureModesByModel
//
// Renders the structured per-brand failure-mode catalog on each of the 6
// brand service pages. Content lives in data/failure-modes.ts — this file
// is a pure presentation component (server component; no client interactivity
// beyond <Reveal>, which is a client wrapper internally).
//
// Honesty rules enforced upstream (in data/failure-modes.ts):
//   - Hyd-Mech is the ONLY brand where factory-authorized voice appears.
//   - Other 5 brands: independent-shop voice (no "factory-authorized" wording).
//   - No OEM part numbers.
//   - No specific service-interval claims.
//   - Hedged language only — "typical," "common," "we often see."
//
// This component renders the data as-is — DO NOT paraphrase or embellish.
// ---------------------------------------------------------------------------

type BrandSlug =
  | "hyd-mech"
  | "marvel"
  | "hem"
  | "amada"
  | "behringer"
  | "tsune";

type Props = {
  brandSlug: BrandSlug;
  /** H2 heading text — e.g. "Common Hyd-Mech failure modes we see in the field" */
  heading: string;
  /** Optional sub-lede paragraph under the H2 */
  lede?: string;
};

function SeverityBadge({ severity }: { severity: Severity }) {
  if (severity === "major") {
    return (
      <span
        className="inline-flex shrink-0 items-center gap-1 rounded-full bg-ember-500/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ember-500 ring-1 ring-ember-500/30"
        aria-label="Severity: major"
      >
        <AlertTriangle className="h-3 w-3" aria-hidden />
        Major
      </span>
    );
  }
  // minor
  return (
    <span
      className="inline-flex shrink-0 items-center rounded-full bg-ink-700/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-300 ring-1 ring-white/10"
      aria-label="Severity: minor"
    >
      Minor
    </span>
  );
}

function FailureModeBlock({ mode }: { mode: FailureMode }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-ink-900/50 p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="font-display text-base font-semibold text-white">
          {mode.symptom}
        </p>
        {mode.severity && <SeverityBadge severity={mode.severity} />}
      </div>
      <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-ink-400">
        Common causes
      </p>
      <ul
        role="list"
        className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-300"
      >
        {mode.commonCauses.map((cause, i) => (
          <li key={i}>{cause}</li>
        ))}
      </ul>
    </div>
  );
}

function ModelGroupBlock({ group }: { group: ModelGroup }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-ink-900/30 p-6 md:p-7">
      <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-spark-400">
        {group.modelLabel}
      </h3>
      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
        {group.modes.map((mode, i) => (
          <FailureModeBlock key={i} mode={mode} />
        ))}
      </div>
    </div>
  );
}

export function FailureModesByModel({ brandSlug, heading, lede }: Props) {
  const groups = failureModesByBrand[brandSlug];
  if (!groups || groups.length === 0) return null;

  return (
    <section
      aria-labelledby="failure-modes-heading"
      className="relative border-t border-white/[0.06] py-20 md:py-24"
    >
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Failure modes</p>
          <h2
            id="failure-modes-heading"
            className="h-display mt-4 text-2xl text-white sm:text-3xl md:text-4xl"
            style={{ overflowWrap: "break-word" }}
          >
            {heading}
          </h2>
          {lede && (
            <p className="mt-4 text-base text-ink-300">{lede}</p>
          )}
        </Reveal>
        <div className="mt-10 space-y-4">
          {groups.map((group, i) => (
            <Reveal key={group.modelLabel} delay={i * 0.06}>
              <ModelGroupBlock group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
