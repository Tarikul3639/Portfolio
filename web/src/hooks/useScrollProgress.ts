import { useEffect, useState } from "react";

export function useScrollProgress() {
    const [progress, setProgress] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docHeight =
                        document.documentElement.scrollHeight - window.innerHeight;

                    setScrolled(scrollTop > 50);
                    setProgress(docHeight > 0 ? scrollTop / docHeight : 0);

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { progress, scrolled };
}