"use client";

import { useCallback, useState } from "react";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { SectionId } from "@/types/section";
import { apiClient } from "@/api/axios";

export default function Hero() {
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const handleDownloadCV = useCallback(() => {
        if (status === "loading") return;

        setStatus("loading");

        try {
            apiClient
                .get("/resume", { responseType: "blob" })
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "Resume.pdf");
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                })
                .then(() => setStatus("success"))
                .catch(() => setStatus("error"));
        } catch (error) {
            console.error("Error downloading resume:", error);
            setStatus("error");
        } finally {
            setTimeout(() => setStatus("idle"), 3000);
        }
    }, []);

    return (
        <section
            id={SectionId.Home}
            className="relative flex min-h-screen max-w-7xl w-full overflow-hidden bg-background px-4 md:px-6 py-16 pt-24 lg:pt-32"
        >
            <HeroBackground />

            <div className="max-lg:mt-18 container relative z-10 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl">
                <HeroContent status={status} onDownload={handleDownloadCV} />
                <HeroVisual />
            </div>
        </section>
    );
}
