import { useEffect, useState } from "react";
import { Section } from "@/types/section";

export function useActiveSection(sections: Section[]) {
    const [active, setActive] = useState(sections[0]);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const viewportMiddle = window.innerHeight / 2;

                    for (let id of sections) {
                        const el = document.getElementById(id);
                        if (!el) continue;

                        const rect = el.getBoundingClientRect();

                        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
                            setActive(id);
                            break;
                        }
                    }

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    return active;
}