"use client";

import dynamic from "next/dynamic";
import { Scene3D } from "./Scene3D";
import { ParticleField } from "./ParticleField";
import { FloatingGeometry } from "./FloatingGeometry";

const HeroScene = () => {
  return (
    <Scene3D className="absolute inset-0 z-0">
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00c896" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#00a67d" />
      <ParticleField />
      <FloatingGeometry />
    </Scene3D>
  );
};

// Dynamic import to avoid SSR issues with Three.js
export default dynamic(() => Promise.resolve(HeroScene), {
  ssr: false,
});
