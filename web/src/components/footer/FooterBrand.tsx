"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "./constants";
import { LinkPreview } from "@/components/ui/link-preview";

export const FooterBrand = () => {
    return (
        <div className="lg:col-span-5 space-y-10">

            {/* ── Logo ── */}
            <div className="relative inline-block">
                <Link href="/#home" className="inline-block cursor-pointer group">
                    <motion.h1
                        className="text-4xl font-black italic tracking-tighter uppercase text-foreground"
                        whileHover={{ skewX: -10 }}
                    >
                        TARIKUL
                        <span className="text-primary drop-shadow-[0_0_8px_#00eeff]">
                            .
                        </span>
                    </motion.h1>
                </Link>

                <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                />
            </div>

            {/* ── Tagline ── */}
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed font-medium italic border-l-2 border-primary/30 pl-4">
                {`"Engineering the void between imagination and digital reality. Operating on `}
                <span className="text-primary/90 font-bold uppercase tracking-widest text-[10px]">
                    v4.0
                </span>
                {`".`}
            </p>

            {/* ── Social Icons ── */}
            <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map(({ label, url, svg }) => (
                    <SocialButton key={label} href={url} label={label}>
                        {svg}
                    </SocialButton>
                ))}
            </div>
        </div>
    );
};

/* ── Reusable social button ── */
interface SocialButtonProps {
    href: string;
    label: string;
    children: React.ReactNode;
}

const SocialButton = ({ href, label, children }: SocialButtonProps) => (
    <LinkPreview url={href}>
        <motion.div
            aria-label={label}
            whileHover={{
                y: -5,
                boxShadow: "0 0 20px rgba(0,238,255,0.3)",
            }}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-card/60 border border-border/50 text-muted-foreground hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/10"
        >
            {children}
        </motion.div>
    </LinkPreview>
);