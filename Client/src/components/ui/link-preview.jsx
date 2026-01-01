"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { encode } from "qss";
import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "../lib/utils.jsx";

const LinkPreview = ({
    children,
    url,
    className,
    width = 280, // default width increased for better visibility
    height = 150,
    isStatic = false,
    imageSrc = ""
}) => {
    const [isOpen, setOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
    const rotate = useMotionValue(0); // Rotation value for tilt effect

    // Spring physics - smoother animation
    const translateX = useSpring(x, { stiffness: 150, damping: 20 });
    const rotateX = useSpring(rotate, { stiffness: 150, damping: 20 });

    const handleMouseMove = useCallback((event) => {
        const targetRect = event.currentTarget.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        
        // Horizontal Movement
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
        x.set(offsetFromCenter);

        // Rotation Effect (Tilt)
        const rotationValue = ((eventOffsetX - targetRect.width / 2) / targetRect.width) * 20;
        rotate.set(rotationValue);
    }, [x, rotate]);

    return (
        <>
            {isMounted && (
                <div className="hidden">
                    <img loading="lazy" src={src} width={width} height={height} alt="" />
                </div>
            )}
            
            <HoverCardPrimitive.Root
                openDelay={150}
                closeDelay={100}
                onOpenChange={setOpen}
            >
                <HoverCardPrimitive.Trigger
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                        x.set(0);
                        rotate.set(0);
                    }}
                    className={cn("text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-all cursor-pointer font-medium", className)}
                    asChild
                >
                    {children}
                </HoverCardPrimitive.Trigger>

                <HoverCardPrimitive.Content
                    className="z-[1001] pointer-events-none"
                    side="top"
                    align="center"
                    sideOffset={20}
                >
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.8, rotateX: 20 }}
                                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                                exit={{ opacity: 0, y: 20, scale: 0.8, rotateX: 20 }}
                                style={{ 
                                    x: translateX,
                                    rotateZ: rotateX, // Apply mouse-based rotation
                                    perspective: "1000px"
                                }}
                                className="relative group"
                            >
                                {/* OUTER GLOW EFFECT */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                                {/* MAIN CARD */}
                                <div 
                                    className="relative bg-white/10 dark:bg-neutral-950/80 backdrop-blur-2xl border border-white/20 dark:border-primary/20 p-1.5 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                    style={{ width, height }}
                                >
                                    {/* TERMINAL BAR DECORATION */}
                                    <div className="flex gap-1.5 mb-1.5 px-2 pt-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                    </div>

                                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-900">
                                        <img
                                            src={src}
                                            width={width}
                                            height={height}
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            alt="link preview"
                                        />
                                        
                                        {/* SCANLINE EFFECT - NEXION STYLE */}
                                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
                                    </div>
                                </div>

                                {/* BOTTOM POINTER ARROW */}
                                <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-neutral-950 border-r border-b border-primary/20 rotate-45 -z-10" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </HoverCardPrimitive.Content>
            </HoverCardPrimitive.Root>
        </>
    );
};

export default React.memo(LinkPreview);