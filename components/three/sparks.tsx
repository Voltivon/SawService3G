"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = { count?: number };

export function Sparks({ count = 100 }: Props) {
  const points = useRef<THREE.Points>(null);

  const { positions, velocities, lives } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const lives = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      reset(i, positions, velocities, lives, true);
    }
    return { positions, velocities, lives };
  }, [count]);

  useFrame((_, dtRaw) => {
    const dt = Math.min(dtRaw, 0.05);
    const obj = points.current;
    if (!obj) return;
    const attr = obj.geometry.getAttribute("position") as THREE.BufferAttribute;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      lives[i] -= dt;
      if (lives[i] <= 0) {
        reset(i, positions, velocities, lives, false);
      } else {
        positions[i3] += velocities[i3] * dt;
        positions[i3 + 1] += velocities[i3 + 1] * dt - 0.6 * dt;
        positions[i3 + 2] += velocities[i3 + 2] * dt;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        sizeAttenuation
        color="#fb923c"
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function reset(
  i: number,
  pos: Float32Array,
  vel: Float32Array,
  lives: Float32Array,
  initial: boolean,
) {
  const i3 = i * 3;
  // Emit roughly from the blade rim, biased to the right side (where teeth bite)
  const angle = Math.PI * (Math.random() * 0.6 - 0.3);
  const r = 1.1 + Math.random() * 0.05;
  pos[i3] = Math.cos(angle) * r + 0.15;
  pos[i3 + 1] = Math.sin(angle) * r + 0.05;
  pos[i3 + 2] = (Math.random() - 0.5) * 0.12;

  const speed = 0.6 + Math.random() * 1.4;
  vel[i3] = (Math.cos(angle) + (Math.random() - 0.5) * 0.6) * speed * 0.6;
  vel[i3 + 1] = (Math.sin(angle) + 0.6 + Math.random() * 0.4) * speed * 0.6;
  vel[i3 + 2] = (Math.random() - 0.5) * 0.4;

  lives[i] = (initial ? Math.random() : 0) + 0.6 + Math.random() * 1.0;
}
