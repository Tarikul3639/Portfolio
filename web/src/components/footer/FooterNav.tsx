"use client";

import Link from "next/link";
import { Satellite } from "lucide-react";
import { NAV_LINKS } from "./constants";

const itemCls =
    "block cursor-pointer text-muted-foreground hover:text-primary " +
    "transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group/link";

export const FooterNav = () => (
    <div className="space-y-8">

        <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/70 flex items-center gap-2">
            <Satellite size={12} className="animate-pulse" />
            Navigation
        </h5>

        <ul className="space-y-4 text-[12px] font-bold uppercase tracking-widest">
            {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                    <Link href={href} className={itemCls}>
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);