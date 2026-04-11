"use client";

import { motion } from "framer-motion";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Phone } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function HeroSocialLinks() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "portfolio-meeting" });
            cal("ui", {
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <div className="flex justify-center text-center">
            <HoverBorderGradient
                data-cal-namespace="portfolio-meeting"
                data-cal-link="tarikul3639/portfolio-meeting"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":true}'
                containerClassName="group rounded cursor-pointer active:scale-95 transition-transform"
                className="dark:bg-black bg-white text-xs dark:text-white text-black flex items-center gap-2 px-4 py-2"
            >
                <motion.span className="flex items-center justify-center bg-primary/10 rounded-full p-1 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="size-3.5 text-primary" />
                </motion.span>

                <span className="font-medium tracking-wide">
                    Book a Call
                </span>
            </HoverBorderGradient>
        </div>
    );
}