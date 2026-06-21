"use client";

import { useCallback, useState, Suspense } from "react";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { SectionId } from "@/types/section";
import { apiClient } from "@/api/axios";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute left-1/4 top-0 h-125 w-125 rounded-full bg-primary/20 blur-[120px] opacity-50" />
    </div>
  ),
});

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
  }, [status]);

  return (
    <section
      id={SectionId.Home}
      className="relative flex min-h-screen max-w-7xl w-full overflow-hidden bg-background px-4 md:px-6 py-16 pt-24 lg:pt-32"
    >
      {/* 3D Background Scene */}
      <Suspense
        fallback={
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute left-1/4 top-0 h-125 w-125 rounded-full bg-primary/20 blur-[120px] opacity-50" />
          </div>
        }
      >
        <HeroScene />
      </Suspense>

      <div className="max-lg:mt-18 container relative z-10 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl">
        <HeroContent status={status} onDownload={handleDownloadCV} />
        <HeroVisual />
      </div>
    </section>
  );
}
