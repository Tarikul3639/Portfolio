"use client";

import { AboutHeader } from "./AboutHeader";
import { AboutImageCard } from "./AboutImageCard";
import { AboutTechGrid } from "./AboutTechGrid";
import { AboutEducation } from "./AboutEducation";
import { SectionId } from "@/types/section";

export const About = () => (
    <section
        id={SectionId.About}
        className="relative flex min-h-screen max-w-7xl w-full overflow-hidden bg-background px-4 md:px-6 py-16"
    >
        <div className="flex flex-col w-full relative z-10 mx-auto">
            <AboutHeader />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                <AboutImageCard />
                <AboutTechGrid />
                <AboutEducation />
            </div>
        </div>
    </section>
);

export default About;