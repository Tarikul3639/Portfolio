"use client";

import { CloudDownload, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CalDotComButton } from "./CalDotComButton";

type DownloadStatus = "idle" | "loading" | "success" | "error";

interface Props {
    status: DownloadStatus;
    onDownload: () => void;
}

const PRIMARY_COLOR = "#00eeff";
const SECONDARY_COLOR = "#00c896";

// Pre-computed stable values — avoids SSR/client Math.random() mismatch
const SPARKLES = [
    { left: 12, top: 20, duration: 2.4, delay: 0.3, x: 45, y: -18 },
    { left: 35, top: 70, duration: 3.1, delay: 1.2, x: -60, y: 22 },
    { left: 58, top: 15, duration: 2.8, delay: 0.7, x: 30, y: 28 },
    { left: 75, top: 55, duration: 3.4, delay: 2.1, x: -35, y: -25 },
    { left: 20, top: 85, duration: 2.2, delay: 1.8, x: 70, y: 10 },
    { left: 90, top: 40, duration: 3.0, delay: 0.5, x: -50, y: -15 },
];

const getStatusColor = (status: DownloadStatus): string => {
    switch (status) {
        case "error": return "bg-red-500 shadow-[0_0_10px_#ef4444]";
        case "success": return "bg-green-500 shadow-[0_0_10px_#22c55e]";
        case "loading": return "bg-[#00c896] shadow-[0_0_10px_#00c896]";
        default: return "bg-primary/60 shadow-[0_0_10px_rgba(0,238,255,0.5)]";
    }
};

export function HeroActions({ status, onDownload }: Props) {
    const statusColor = getStatusColor(status);

    return (
        <div className="flex flex-col items-center justify-center gap-7 sm:gap-10 pt-5 xs:flex-row lg:justify-start">

            {/* ── Smart Download Button ── */}
            <div className="inline-block">
                <motion.button
                    disabled={status !== "idle"}
                    whileHover={status === "idle" ? { scale: 1.02 } : {}}
                    whileTap={status === "idle" ? { scale: 0.98 } : {}}
                    onClick={onDownload}
                    className={`relative group h-12 w-auto px-8 flex items-center justify-center overflow-hidden rounded-xl transition-all duration-500
                        ${status === "loading" ? "cursor-wait" : ""}
                        ${status === "idle" ? "cursor-crosshair" : "bg-transparent"}
                        ${status === "error" ? "cursor-not-allowed" : ""}
                    `}
                >
                    {/* Corner Accents */}
                    <div className={`absolute top-1.5 left-1.5 w-3 h-px transition-colors duration-500 ${statusColor}`} />
                    <div className={`absolute top-1.5 left-1.5 w-px h-3 transition-colors duration-500 ${statusColor}`} />
                    <div className={`absolute bottom-1.5 right-1.5 w-3 h-px transition-colors duration-500 ${statusColor}`} />
                    <div className={`absolute bottom-1.5 right-1.5 w-px h-3 transition-colors duration-500 ${statusColor}`} />

                    <AnimatePresence mode="wait">

                        {/* Loading */}
                        {status === "loading" && (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                                exit={{ opacity: 0 }}
                                className="relative z-10 flex flex-col items-center justify-center text-primary"
                            >
                                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] mb-1">
                                    <Loader2
                                        className="w-5 h-5 animate-spin"
                                        style={{ color: SECONDARY_COLOR }}
                                    />
                                    <span className="drop-shadow-[0_0_10px_rgba(0,238,255,0.8)]">
                                        Initiating...
                                    </span>
                                </div>
                                <span className="text-[8px] font-bold tracking-[0.5em] opacity-70 text-primary/80">
                                    ACCESSING DATABASE
                                </span>
                            </motion.div>
                        )}

                        {/* Success */}
                        {status === "success" && (
                            <motion.div
                                key="success"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="relative z-10 flex items-center gap-3 text-green-400 text-xs font-black uppercase tracking-[0.3em] drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                            >
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Success</span>
                            </motion.div>
                        )}

                        {/* Error */}
                        {status === "error" && (
                            <motion.div
                                key="error"
                                initial={{ x: 10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="relative z-10 flex items-center gap-3 text-red-400 text-xs font-black uppercase tracking-[0.3em] drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                            >
                                <AlertTriangle className="w-5 h-5" />
                                <span>Error</span>
                            </motion.div>
                        )}

                        {/* Idle */}
                        {status === "idle" && (
                            <>
                                {/* Background FX */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                                    <div className="absolute w-12 h-12 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                                    {SPARKLES.map((s, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{
                                                opacity: [0, 1, 0],
                                                scale: [0, 1.2, 0],
                                                x: s.x,
                                                y: s.y,
                                            }}
                                            transition={{
                                                duration: s.duration,
                                                repeat: Infinity,
                                                delay: s.delay,
                                            }}
                                            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white] z-0"
                                            style={{ left: `${s.left}%`, top: `${s.top}%` }}
                                        />
                                    ))}
                                </div>

                                {/* Foreground UI */}
                                <motion.div
                                    key="idle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="relative z-10 flex items-center justify-between w-full gap-4"
                                >
                                    <div className="flex flex-col items-start text-left">
                                        <span className="text-[9px] text-primary/80 font-bold uppercase tracking-[0.4em] leading-tight group-hover:text-primary transition-colors">
                                            Resume
                                        </span>
                                        <span className="text-sm text-gray-950 dark:text-gray-200 font-black uppercase tracking-[0.25em] drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                                            Download
                                        </span>
                                    </div>

                                    <div className="relative flex items-center justify-center">
                                        <motion.div
                                            className="relative z-20 flex items-center justify-center text-primary group-hover:text-primary transition-all duration-500"
                                            whileHover={{
                                                scale: [1, 1.15, 1],
                                                transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
                                            }}
                                        >
                                            <div className="transform transition-transform duration-500 group-hover:translate-y-1.5">
                                                <CloudDownload className="w-5 h-5 drop-shadow-[0_0_12px_rgba(0,238,255,0)] group-hover:drop-shadow-[0_0_12px_rgba(0,238,255,0.8)]" />
                                            </div>
                                        </motion.div>
                                        <div className="absolute w-8 h-8 rounded-full border border-primary/30 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 group-hover:animate-[ping_1.5s_infinite] transition-all duration-500" />
                                    </div>
                                </motion.div>
                            </>
                        )}

                    </AnimatePresence>

                    {/* Scanning Line */}
                    {status === "loading" && (
                        <motion.div
                            animate={{ top: ["-100%", "200%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 w-full h-0.5 z-20"
                            style={{
                                backgroundColor: SECONDARY_COLOR,
                                boxShadow: `0 0 20px ${PRIMARY_COLOR}`,
                            }}
                        />
                    )}
                </motion.button>
            </div>

            {/* ── Social Links ── */}
            <div className="flex items-center gap-6">
                <div className="hidden h-10 w-px bg-border sm:block" />
                <CalDotComButton />
            </div>

        </div>
    );
}