"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.z = t * 0.2;
      torusRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x = t * 0.4;
      boxRef.current.rotation.y = t * 0.2;
      boxRef.current.position.y = Math.sin(t * 0.7 + 1) * 0.25;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t * 0.6 + 2) * 0.35;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Torus */}
      <mesh ref={torusRef} position={[2.5, 0, -1]}>
        <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
        <meshStandardMaterial
          color="#00c896"
          emissive="#00c896"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Box */}
      <mesh ref={boxRef} position={[-2.2, 0.5, -0.5]}>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial
          color="#00c896"
          emissive="#00c896"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Sphere */}
      <mesh ref={sphereRef} position={[0, -1.5, 0.5]}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#00a67d"
          emissive="#00a67d"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}
