"use client";

import { Cpu } from "lucide-react";
import { INFRA_LINKS } from "./constants";

const itemCls =
    "block cursor-pointer text-muted-foreground hover:text-primary " +
    "transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group/link";

export const FooterInfra = () => (
    <div className="space-y-8">

        <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/70 flex items-center gap-2">
            <Cpu size={10} />
            Infrastructure
        </h5>

        <ul className="space-y-4 text-[12px] font-bold uppercase tracking-widest">
            {INFRA_LINKS.map(({ label, href }) => (
                <li key={label}>
                    <a href={href} className={itemCls}>
                        {label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);