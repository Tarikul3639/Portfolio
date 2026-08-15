"use client";

import { useState } from "react";
import { SectionId } from "@/types/section";
import { PROJECTS } from "@/data/projects.data";
import { ProjectCard } from "./ProjectCard";
import { ProjectsHeader } from "./ProjectsHeader";
import { usePerformance } from "@/hooks/usePerformance";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";

const BackgroundScene = dynamic(
  () => import("@/components/3d/BackgroundScene"),
  {
    ssr: false,
  },
);

export default function ProjectsSection() {
  const { isLowEnd } = usePerformance();
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <div
      id={SectionId.Projects}
      className="relative w-full max-w-7xl bg-background px-4 py-16 md:px-6"
    >
      {!isLowEnd && (
        <Suspense fallback={null}>
          <BackgroundScene />
        </Suspense>
      )}

      <div className="relative z-10">
        <ProjectsHeader />

        {visibleProjects.map((project, i) => (
          <div
            key={i}
            className="sticky top-0 h-screen animate-in fade-in duration-500"
            style={{
              zIndex: PROJECTS.length + i,
            }}
          >
            <ProjectCard item={project} index={i} />
          </div>
        ))}
      </div>

      <div className="relative z-100 flex justify-center px-4 pb-16">
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="group relative inline-block cursor-pointer overflow-hidden rounded-full bg-border p-px text-xs font-semibold leading-6 text-foreground no-underline shadow-2xl shadow-black/10 dark:shadow-black/40 sm:text-sm"
        >
          {/* Spinning gradient border, theme-aware */}
          <span
            className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#38bdf8_20%,transparent_40%,transparent_60%,#a78bfa_80%,transparent_100%)] opacity-100"
          />

          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,var(--primary)_0%,transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
          </span>

          <div className="relative z-10 flex items-center gap-2 rounded-full bg-background px-5 py-2 ring-1 ring-border transition-all duration-300 sm:gap-2 sm:px-5 sm:py-2.5">
            <span>{showAll ? "Show Less Projects" : "Show All Projects"}</span>
            <ArrowRight
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 size-4 sm:size-5"
            />
          </div>

          <span className="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-primary/0 via-primary/90 to-primary/0 opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
        </button>
      </div>
    </div>
  );
}