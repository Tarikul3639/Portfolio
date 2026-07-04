"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export function useNavbar() {
    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        setScrolled(latest > 40);

        if (latest < 80) {
            setHidden(false);
            return;
        }

        if (latest > previous && latest > 120) {
            setHidden(true);
        }

        if (latest < previous) {
            setHidden(false);
        }
    });

    return {
        hidden,
        scrolled,
    };
}