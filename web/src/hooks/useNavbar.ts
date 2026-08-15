"use client";

import {
    useMotionValue,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import { useState } from "react";

export function useNavbar() {
    const { scrollY } = useScroll();

    const [scrolled, setScrolled] = useState(false);
    const navbarY = useMotionValue(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        const diff = latest - previous;

        setScrolled(latest > 40);

        // Top of page
        if (latest <= 0) {
            navbarY.set(0);
            return;
        }

        // Half of the scroll distance
        const movement = diff * 0.5;

        // Scroll down
        if (diff > 0 && latest > 120) {
            navbarY.set(
                Math.max(navbarY.get() - movement, -100)
            );
        }

        // Scroll up
        if (diff < 0) {
            navbarY.set(
                Math.min(navbarY.get() - movement, 0)
            );
        }
    });

    return {
        scrolled,
        navbarY,
    };
}