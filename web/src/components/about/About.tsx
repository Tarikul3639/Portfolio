"use client";

import { AboutHeader } from "./AboutHeader";
import { AboutImageCard } from "./AboutImageCard";
import { AboutTechGrid } from "./AboutTechGrid";
import { AboutEducation } from "./AboutEducation";

import { SectionId } from "@/types/section";

export const About = () => {
    return (
        <section
            id={SectionId.About}
            className="max-w-7xl w-full bg-background overflow-x-hidden px-4 md:px-6 py-16"
        >
            {/* Header */}
            <AboutHeader />

            {/* Image + Education */}
            <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-stretch">
                <div className="w-full">
                    <AboutImageCard />
                </div>

                <div className="w-full">
                    <AboutEducation />
                </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-10 sm:mt-14">
                <AboutTechGrid />
            </div>
        </section>
    );
};

export default About;