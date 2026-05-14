"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { Blade } from "@/components/three/blade";
import { Sparks } from "@/components/three/sparks";
import { WebGLErrorBoundary } from "@/components/three/webgl-error-boundary";
import { CssBladeFallback } from "@/components/three/css-blade-fallback";

/**
 * Probe whether the browser can actually create a WebGL context.
 * Catches: hardware-accel disabled, GPU blocklisted (common on older Intel
 * HD chips found on industrial shop computers), WebGL disabled by policy
 * or chrome://flags, Safari WebGL off in Develop menu.
 *
 * Tries webgl2 first (R3F's preference), then webgl, then the legacy
 * `experimental-webgl` token that some old Edge / Firefox builds still use.
 */
function detectWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const c = document.createElement("canvas");
    const gl =
      c.getContext("webgl2") ||
      c.getContext("webgl") ||
      (c.getContext("experimental-webgl") as WebGLRenderingContext | null);
    return gl != null;
  } catch {
    return false;
  }
}

type Mode = "loading" | "r3f" | "css-blade" | "poster";

export function HeroCanvas() {
  const reduce = useReducedMotion();
  // "loading" is the SSR + first-paint state — render a plain static poster
  // until the browser tells us what gates apply. This avoids hydration
  // flicker between SSR and client.
  const [mode, setMode] = useState<Mode>("loading");

  useEffect(() => {
    // User preference gates — static poster (respect reduced motion / data
    // saver / narrow viewport, NO animated fallback for these).
    if (reduce) {
      console.info("[HeroCanvas] reduced motion — static poster");
      setMode("poster");
      return;
    }
    const mql = window.matchMedia("(min-width: 768px)");
    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const saveData = !!conn?.saveData;

    const compute = (): Mode => {
      if (!mql.matches) {
        console.info("[HeroCanvas] viewport <768px — static poster");
        return "poster";
      }
      if (saveData) {
        console.info("[HeroCanvas] saveData on — static poster");
        return "poster";
      }
      if (!detectWebGL()) {
        // WebGL unavailable (GPU blocklisted, hardware-accel off, etc.).
        // This is a *failure*, not a preference, so we render the animated
        // CSS blade so it still looks intentional rather than broken.
        console.info("[HeroCanvas] WebGL unavailable — CSS blade fallback");
        return "css-blade";
      }
      return "r3f";
    };

    setMode(compute());
    const onChange = () => setMode(compute());
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [reduce]);

  if (mode === "loading" || mode === "poster") return <PosterFallback />;
  if (mode === "css-blade") return <CssBladeFallback />;

  return (
    // R3F throwing mid-runtime (shader compile fail, NaN math, driver crash)
    // also falls back to the CSS blade — same "WebGL effectively broken"
    // class of failure as detectWebGL() returning false.
    <WebGLErrorBoundary fallback={<CssBladeFallback />}>
      <Canvas
        dpr={[1, 1.5]}
        frameloop="always"
        // Dropped `powerPreference: "high-performance"` — on
        // integrated-GPU-only laptops it can force a request for a discrete
        // GPU that doesn't exist or is asleep, failing context creation.
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        className="absolute inset-0"
        onCreated={() => console.info("[HeroCanvas] WebGL context created")}
      >
        <color attach="background" args={["#050403"]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 4, 6]} intensity={1.6} color="#ffe6d2" />
        <directionalLight position={[-6, -2, -4]} intensity={0.6} color="#fb923c" />
        <pointLight position={[0, 0, 2]} intensity={0.5} color="#f97316" />
        <Blade />
        <Sparks count={120} />
      </Canvas>
    </WebGLErrorBoundary>
  );
}

function PosterFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(900px 500px at 70% 40%, rgba(249,115,22,0.28), transparent 60%), radial-gradient(700px 500px at 22% 75%, rgba(234,88,12,0.18), transparent 60%)",
      }}
    />
  );
}
