"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Blade() {
  const group = useRef<THREE.Group>(null);
  const innerHub = useRef<THREE.Mesh>(null);

  const bladeGeo = useMemo(() => {
    const teeth = 56;
    const outerR = 1.1;
    const valleyR = 1.02;
    const shape = new THREE.Shape();

    for (let i = 0; i <= teeth * 2; i++) {
      const t = i / (teeth * 2);
      const angle = t * Math.PI * 2;
      const r = i % 2 === 0 ? outerR : valleyR;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();

    const hole = new THREE.Path();
    hole.absarc(0, 0, 0.16, 0, Math.PI * 2, true);
    shape.holes.push(hole);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.05,
      bevelEnabled: true,
      bevelSize: 0.008,
      bevelThickness: 0.008,
      bevelSegments: 2,
      curveSegments: 4,
    });
    geo.center();
    return geo;
  }, []);

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.z -= dt * 0.55;
    if (innerHub.current) innerHub.current.rotation.z += dt * 1.2;
  });

  return (
    <group rotation={[0.18, -0.22, 0]} position={[0.15, 0.05, 0]}>
      {/* Glow ring behind */}
      <mesh position={[0, 0, -0.18]}>
        <ringGeometry args={[1.18, 1.55, 64]} />
        <meshBasicMaterial color="#f97316" transparent opacity={0.06} />
      </mesh>

      <group ref={group}>
        <mesh geometry={bladeGeo} castShadow receiveShadow>
          <meshStandardMaterial
            color="#cbd5e1"
            metalness={0.92}
            roughness={0.32}
            envMapIntensity={0.8}
          />
        </mesh>
      </group>

      {/* Hot center */}
      <mesh ref={innerHub} position={[0, 0, 0.04]}>
        <cylinderGeometry args={[0.16, 0.16, 0.07, 32]} />
        <meshStandardMaterial
          color="#0c0a09"
          metalness={0.6}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[0, 0, 0.085]}>
        <circleGeometry args={[0.07, 32]} />
        <meshBasicMaterial color="#fb923c" />
      </mesh>
    </group>
  );
}
