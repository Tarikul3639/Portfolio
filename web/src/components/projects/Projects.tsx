"use client";

import { SectionId } from "@/types/section";
import { PROJECTS } from "@/data/projects.data";
import { ProjectCard } from "./ProjectCard";
import { ProjectsHeader } from "./ProjectsHeader";

export default function ProjectsSection() {
    return (
        <div
            id={SectionId.Projects}
            className="max-w-7xl w-full bg-background px-4 md:px-6 py-16"
        >

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
    );
}