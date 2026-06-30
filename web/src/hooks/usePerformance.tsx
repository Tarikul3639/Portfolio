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
 * - Waits before measuring FPS to avoid false detection during initial loading.
 * - Measures average FPS for 3 seconds.
 * - Marks the device as low-end if average FPS is below the threshold.
 * - Stops monitoring after the first evaluation.
 * - Refreshing the page resets the process.
 */
export function usePerformance(): PerformanceInfo {
    const [cpuCores, setCpuCores] = useState<number | null>(null);
    const [deviceMemory, setDeviceMemory] = useState<number | null>(null);
    const [fps, setFps] = useState(60);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [isLowEnd, setIsLowEnd] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const cpu = navigator.hardwareConcurrency ?? null;

        const nav = navigator as Navigator & {
            deviceMemory?: number;
        };

        const memory = nav.deviceMemory ?? null;

        setCpuCores(cpu);
        setDeviceMemory(memory);

        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(media.matches);

        const handleMotionChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);

            if (e.matches) {
                setIsLowEnd(true);
            }
        };

        media.addEventListener("change", handleMotionChange);

        const lowHardware =
            (cpu !== null && cpu <= 2) &&
            (memory !== null && memory <= 2);

        if (lowHardware || media.matches) {
            setIsLowEnd(true);
        }

        let animationId = 0;
        let startDelay: number;
        let stopped = false;

        startDelay = window.setTimeout(() => {
            let frameCount = 0;
            let secondStart = performance.now();

            const samples: number[] = [];

            const loop = (time: number) => {
                if (stopped) return;

                frameCount++;

                if (time - secondStart >= 1000) {
                    samples.push(frameCount);

                    setFps(frameCount);

                    frameCount = 0;
                    secondStart = time;

                    // Measure for 3 seconds
                    if (samples.length === 3) {
                        const averageFps =
                            samples.reduce((a, b) => a + b, 0) / samples.length;

                        if (averageFps < 25) {
                            setIsLowEnd(true);
                        }

                        stopped = true;
                        cancelAnimationFrame(animationId);
                        return;
                    }
                }

                animationId = requestAnimationFrame(loop);
            };

            animationId = requestAnimationFrame(loop);
        }, 3000);

        return () => {
            stopped = true;
            clearTimeout(startDelay);
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