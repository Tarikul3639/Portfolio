"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ProjectShapeProps {
  color?: string;
  position?: [number, number, number];
  speed?: number;
}

export function ProjectShape({
  color = "#00c896",
  position = [0, 0, 0],
  speed = 1,
}: ProjectShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Memoized geometry (performance boost)
  const geometry = useMemo(() => {
    return new THREE.OctahedronGeometry(0.4, 0);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const t = state.clock.elapsedTime * speed;

    // ✅ smooth delta-based rotation (better than fixed time)
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.7;

    // floating animation
    meshRef.current.position.y =
      position[1] + Math.sin(t * 0.5) * 0.15;
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}