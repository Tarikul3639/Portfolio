"use client";

import { useEffect, useState } from "react";
import { Section } from "@/types/section";

export function useActiveSection(sections: Section[]) {
    const [active, setActive] = useState<Section>(sections[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio
                    );

                if (visible.length) {
                    setActive(visible[0].target.id as Section);
                }
            },
            {
                threshold: Array.from(
                    { length: 101 },
                    (_, i) => i / 100
                ),
            }
        );

        const elements = sections
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [sections]);

    return active;
}