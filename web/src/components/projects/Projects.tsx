"use client";

import { SectionId } from "@/types/section";
import { PROJECTS } from "@/data/projects.data";
import { ProjectCard } from "./ProjectCard";
import { ProjectsHeader } from "./ProjectsHeader";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const BackgroundScene = dynamic(() => import("@/components/3d/BackgroundScene"), {
  ssr: false,
});

export default function ProjectsSection() {
  return (
    <div
      id={SectionId.Projects}
      className="relative max-w-7xl w-full bg-background px-4 md:px-6 py-16"
    >
      {/* Subtle 3D Background */}
      <Suspense fallback={null}>
        <BackgroundScene />
      </Suspense>

      <div className="relative z-10">
        <ProjectsHeader />

        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className="sticky top-0 h-screen"
            style={{ zIndex: PROJECTS.length }}
          >
            <ProjectCard item={project} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
