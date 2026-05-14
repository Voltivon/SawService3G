"use client";

/**
 * Pure CSS/SVG animated saw blade for the WebGL-unavailable case.
 *
 * Used when `detectWebGL()` returns false in hero-canvas.tsx (hardware
 * acceleration off, GPU blocklisted, WebGL disabled by policy) and when
 * the WebGLErrorBoundary catches a runtime R3F exception. Reduced-motion,
 * saveData, and narrow-viewport gates still use the simple static
 * PosterFallback — those are user preference signals, not failures, and
 * adding an animation would violate them.
 *
 * No JavaScript runtime, no GPU requirement — just an SVG path and a
 * CSS keyframe rotation, so this renders on literally any browser made
 * in the last decade.
 */

// Compute the toothed-blade path once at module load.
const TEETH = 56;
const OUTER_R = 92;
const VALLEY_R = 85;

function generateBladePath(): string {
  const cx = 100;
  const cy = 100;
  const points = TEETH * 2;
  let d = "";
  for (let i = 0; i <= points; i++) {
    const angle = (i / points) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? OUTER_R : VALLEY_R;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    d += (i === 0 ? "M" : "L") + x.toFixed(2) + "," + y.toFixed(2);
  }
  return d + "Z";
}

const BLADE_PATH = generateBladePath();

export function CssBladeFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Warm radial glow — matches the R3F scene's ambient light tone */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 600px at 70% 45%, rgba(249,115,22,0.28), transparent 60%), radial-gradient(700px 500px at 22% 78%, rgba(234,88,12,0.18), transparent 60%)",
        }}
      />

      {/* Rotating blade — fixed off-center to mirror the R3F camera framing */}
      <div className="css-blade absolute right-[8%] top-[18%] aspect-square w-[clamp(360px,52vmin,640px)]">
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full"
          style={{ filter: "drop-shadow(0 18px 40px rgba(0,0,0,0.5))" }}
        >
          <defs>
            <radialGradient id="cb-metal" cx="0.5" cy="0.5" r="0.55">
              <stop offset="0%" stopColor="#e7e5e4" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </radialGradient>
            <radialGradient id="cb-hub" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#ffedd5" />
              <stop offset="35%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#7c2d12" />
            </radialGradient>
          </defs>

          {/* Outer glow ring (does not spin — sits behind the blade) */}
          <circle
            cx="100"
            cy="100"
            r="96"
            fill="none"
            stroke="#f97316"
            strokeOpacity="0.18"
            strokeWidth="3"
          />

          {/* Toothed blade body — this layer is the one that rotates */}
          <g className="css-blade-rotor">
            <path
              d={BLADE_PATH}
              fill="url(#cb-metal)"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.5"
            />
            {/* Inner concentric detail rings, evoke the R3F bevel + hub */}
            <circle
              cx="100"
              cy="100"
              r="62"
              fill="none"
              stroke="rgba(0,0,0,0.18)"
              strokeWidth="0.6"
            />
            <circle
              cx="100"
              cy="100"
              r="46"
              fill="none"
              stroke="rgba(0,0,0,0.12)"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="26"
              fill="#1c1917"
            />
          </g>

          {/* Hot center hub — spins faster, opposite direction (matches R3F inner hub) */}
          <g className="css-blade-hub">
            <circle cx="100" cy="100" r="18" fill="url(#cb-hub)" />
            <circle cx="100" cy="100" r="6" fill="#fff7ed" opacity="0.85" />
          </g>
        </svg>
      </div>
    </div>
  );
}
