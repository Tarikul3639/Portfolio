"use client";

import { useCallback, useState } from "react";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { SectionId } from "@/types/section";

export default function Hero() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleDownloadCV = useCallback(() => {
        if (status === "loading") return;

        setStatus("loading");

        const link = document.createElement("a");
        link.href = "/cv.pdf";
        link.download = "Tarikul_Islam_CV.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();

        window.setTimeout(() => setStatus('success'), 600);
    }, []);

    return (
        <section
            id={SectionId.Home}
            className="relative flex min-h-screen max-w-7xl w-full overflow-hidden bg-background px-4 md:px-6 py-16 pt-24 lg:pt-32"
        >
            <HeroBackground />

            <div className="max-lg:mt-18 container relative z-10 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl">
                <HeroContent
                    status={status}
                    onDownload={handleDownloadCV}
                />
                <HeroVisual />
            </div>
        </section>
    );
}