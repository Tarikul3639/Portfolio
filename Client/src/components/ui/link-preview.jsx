"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { encode } from "qss";
import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"; // Changed to framer-motion for stability
import { cn } from "../lib/utils.jsx";

const LinkPreview = ({
    children,
    url,
    className,
    width = 250,
    height = 125,
    isStatic = false,
    imageSrc = ""
}) => {
    const [isOpen, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // API URL Logic
    const src = isStatic ? imageSrc : `https://api.microlink.io/?${encode({
        url,
        screenshot: true,
        meta: false,
        embed: "screenshot.url",
        colorScheme: "dark",
        "viewport.width": width * 2,
        "viewport.height": height * 2,
    })}`;

    const x = useMotionValue(0);
    const translateX = useSpring(x, { stiffness: 100, damping: 15 });

    // --- OPTIMIZED MOUSE MOVE (Jitter Fix) ---
    const handleMouseMove = useCallback((event) => {
        // স্ক্রলিং করার সময় মাউস মুভমেন্ট ক্যালকুলেশন বন্ধ রাখবে
        if (window.scrollY > 0 && Math.abs(event.movementY) > 5) return;

        const targetRect = event.currentTarget.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
        x.set(offsetFromCenter);
    }, [x]);

    return (
        <>
            {isMounted && (
                <div className="hidden">
                    <img loading="lazy" src={src} width={width} height={height} alt="" />
                </div>
            )}
            
            <HoverCardPrimitive.Root
                openDelay={100} // সামান্য ডিলে দেওয়া হয়েছে যাতে ক্লিক করার সময় হুট করে পপআপ না আসে
                closeDelay={50}
                onOpenChange={setOpen}
            >
                <HoverCardPrimitive.Trigger
                    onMouseMove={handleMouseMove}
                    className={cn("text-black dark:text-white cursor-pointer", className)}
                    asChild // Trigger কে বাটনের ভেতর এম্বেড করার জন্য
                >
                    {children}
                </HoverCardPrimitive.Trigger>

                <HoverCardPrimitive.Content
                    className="z-[1001] pointer-events-none" // পপআপ যেন স্ক্রলকে বাধা না দেয়
                    side="top"
                    align="center"
                    sideOffset={15}
                >
                    <AnimatePresence mode="wait">
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                style={{ x: translateX }}
                                className="shadow-2xl rounded-xl overflow-hidden border border-white/10 bg-[#050505]"
                            >
                                <div className="block p-1 bg-black/50 backdrop-blur-lg">
                                    <img
                                        src={src}
                                        width={width}
                                        height={height}
                                        className="rounded-lg object-cover"
                                        alt="preview"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </HoverCardPrimitive.Content>
            </HoverCardPrimitive.Root>
        </>
    );
};

export default React.memo(LinkPreview);