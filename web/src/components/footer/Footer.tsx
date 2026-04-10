"use client";

import { useMotionValue } from "framer-motion";

import { FooterGlow } from "./FooterGlow";
import { FooterBrand } from "./FooterBrand";
import { FooterNav } from "./FooterNav";
import { FooterInfra } from "./FooterInfra";
import { FooterStatus } from "./FooterStatus";
import { FooterBottom } from "./FooterBottom";
import { SectionId } from "@/types/section";

export const Footer = () => {
    const mouseX = useMotionValue(0);

    const handleMouseMove = ({ clientX, currentTarget }: React.MouseEvent<HTMLElement>) => {
        const { left } = (currentTarget as HTMLElement).getBoundingClientRect();
        mouseX.set(clientX - left);
    };

    return (
        <footer
            id={SectionId.Footer}
            onMouseMove={handleMouseMove}
            className="relative w-full bg-background text-foreground pt-32 pb-12 px-6 overflow-hidden group/footer"
        >
            <FooterGlow mouseX={mouseX} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    <FooterBrand />

                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <FooterNav />
                        <FooterInfra />
                        <FooterStatus />
                    </div>
                </div>

                <FooterBottom />
            </div>
        </footer>
    );
};