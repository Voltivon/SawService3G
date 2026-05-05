"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { Blade } from "@/components/three/blade";
import { Sparks } from "@/components/three/sparks";

export function HeroCanvas() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const mql = window.matchMedia("(min-width: 768px)");
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveData = !!conn?.saveData;
    setEnabled(mql.matches && !saveData);
    const onChange = () => setEnabled(mql.matches && !saveData);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [reduce]);

  if (!enabled) {
    return <PosterFallback />;
  }

  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop="always"
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      className="absolute inset-0"
    >
      <color attach="background" args={["#050403"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 4, 6]} intensity={1.6} color="#ffe6d2" />
      <directionalLight position={[-6, -2, -4]} intensity={0.6} color="#fb923c" />
      <pointLight position={[0, 0, 2]} intensity={0.5} color="#f97316" />
      <Blade />
      <Sparks count={120} />
    </Canvas>
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
