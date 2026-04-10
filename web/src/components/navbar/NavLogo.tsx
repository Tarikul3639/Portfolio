"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

interface Props {
    title: string;
}

export function NavLogo({ title }: Props) {
    return (
        <Link
            href="#home"
            className="cursor-pointer group flex items-center gap-3"
        >
            <div className="relative w-9 h-9">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="absolute inset-0 border border-primary/30 rounded-lg"
                />
                <Terminal className="absolute inset-0 m-auto w-4 h-4 text-primary" />
            </div>

            <h1 className="text-2xl font-black tracking-wide uppercase text-foreground">
                {title}
                <span className="text-primary group-hover:drop-shadow-[0_0_6px_#00eeff]">
                    .
                </span>
            </h1>
        </Link>
    );
}