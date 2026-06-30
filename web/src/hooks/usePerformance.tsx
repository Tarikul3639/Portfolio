"use client";

import { useEffect, useState } from "react";

type PerformanceInfo = {
    cpuCores: number | null;
    deviceMemory: number | null;
    fps: number;
    prefersReducedMotion: boolean;
    isLowEnd: boolean;
};

/**
 * Hook to monitor device performance metrics and user preferences.
 *
 * Behavior:
 * - Checks CPU, RAM and reduced-motion on page load.
 * - Starts FPS monitoring.
 * - If FPS drops below the threshold once, marks the device as low-end.
 * - Stops monitoring after detecting a low-end state.
 * - A page refresh resets everything and performs the checks again.
 */
export function usePerformance(): PerformanceInfo {
    const [cpuCores, setCpuCores] = useState<number | null>(null);
    const [deviceMemory, setDeviceMemory] = useState<number | null>(null);
    const [fps, setFps] = useState(60);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [isLowEnd, setIsLowEnd] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Hardware information
        const cpu = navigator.hardwareConcurrency ?? null;

        const nav = navigator as Navigator & {
            deviceMemory?: number;
        };

        const memory = nav.deviceMemory ?? null;

        setCpuCores(cpu);
        setDeviceMemory(memory);

        // Reduced motion preference
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(media.matches);

        const handleMotionChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);

            if (e.matches) {
                setIsLowEnd(true);
            }
        };

        media.addEventListener("change", handleMotionChange);

        // Hardware check
        if (
            (cpu !== null && cpu <= 4) ||
            (memory !== null && memory <= 4) ||
            media.matches
        ) {
            setIsLowEnd(true);
        }

        // FPS Monitor
        let frameCount = 0;
        let lastTime = performance.now();
        let animationId = 0;
        let stopped = false;

        const loop = (time: number) => {
            if (stopped) return;

            frameCount++;

            if (time - lastTime >= 1000) {
                setFps(frameCount);

                if (frameCount < 30) {
                    setIsLowEnd(true);

                    // Stop monitoring after detecting low performance.
                    stopped = true;
                    cancelAnimationFrame(animationId);
                    return;
                }

                frameCount = 0;
                lastTime = time;
            }

            animationId = requestAnimationFrame(loop);
        };

        animationId = requestAnimationFrame(loop);

        return () => {
            stopped = true;
            cancelAnimationFrame(animationId);
            media.removeEventListener("change", handleMotionChange);
        };
    }, []);

    return {
        cpuCores,
        deviceMemory,
        fps,
        prefersReducedMotion,
        isLowEnd,
    };
}