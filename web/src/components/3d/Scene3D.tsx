"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

interface Scene3DProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
}

export function Scene3D({
  children,
  className = "absolute inset-0",
  fallback,
}: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={fallback ?? null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
