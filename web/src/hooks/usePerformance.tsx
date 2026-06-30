"use client";

import { useEffect, useMemo, useState } from "react";

type PerformanceInfo = {
    cpuCores: number | null;
    deviceMemory: number | null;
    fps: number;
    prefersReducedMotion: boolean;
    isLowEnd: boolean;
};

/**
 * Hook to monitor device performance metrics and user preferences.
 * Calculates FPS and evaluates if the device qualifies as "low-end".
 */
export function usePerformance(): PerformanceInfo {
    const [cpuCores, setCpuCores] = useState<number | null>(null);
    const [deviceMemory, setDeviceMemory] = useState<number | null>(null);
    const [fps, setFps] = useState<number>(60);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Set hardware specs
        setCpuCores(navigator.hardwareConcurrency ?? null);

        const nav = navigator as Navigator & { deviceMemory?: number };
        setDeviceMemory(nav.deviceMemory ?? null);

        // Handle accessibility preference
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(media.matches);

        const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        media.addEventListener("change", handleMotionChange);

        // FPS calculation loop
        let frameCount = 0;
        let lastTime = performance.now();
        let animationId: number;

        const loop = (time: number) => {
            frameCount++;

            if (time >= lastTime + 1000) {
                setFps(frameCount);
                frameCount = 0;
                lastTime = time;
            }

            animationId = requestAnimationFrame(loop);
        };

        animationId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(animationId);
            media.removeEventListener("change", handleMotionChange);
        };
    }, []);

    // Determine low-end status based on hardware and current runtime performance
    const isLowEnd = useMemo(() => {
        const lowCpu = cpuCores !== null && cpuCores <= 4;
        const lowMemory = deviceMemory !== null && deviceMemory <= 4;
        const lowFps = fps < 30;

        return lowCpu || lowMemory || lowFps || prefersReducedMotion;
    }, [cpuCores, deviceMemory, fps, prefersReducedMotion]);

    return {
        cpuCores,
        deviceMemory,
        fps,
        prefersReducedMotion,
        isLowEnd,
    };
}