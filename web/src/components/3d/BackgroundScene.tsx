"use client";

import dynamic from "next/dynamic";
import { Scene3D } from "./Scene3D";
import { ParticleField } from "./ParticleField";

const BackgroundScene = () => {
  return (
    <Scene3D className="absolute inset-0 z-0 pointer-events-none">
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 3]} intensity={0.5} color="#00c896" />
      <ParticleField />
    </Scene3D>
  );
};

export default dynamic(() => Promise.resolve(BackgroundScene), {
  ssr: false,
});
