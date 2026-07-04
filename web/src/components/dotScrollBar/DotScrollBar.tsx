"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { useActiveSection } from "@/hooks/useActiveSection";
import { Section } from "@/types/section";

export default function DotScrollBar({
  sections,
}: {
  sections: Section[];
}) {
  const active = useActiveSection(sections);

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    mass: 0.2,
  });

  const scrollTo = (id: Section) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="fixed top-1/2 right-9 -translate-y-1/2 z-9999 flex flex-col items-center">
      {/* Progress Line */}
      <div className="absolute h-full w-0.5 overflow-hidden rounded-full bg-border/40">
        <motion.div
          className="absolute left-0 top-0 w-full origin-top bg-primary shadow-[0_0_15px_#00eeff]"
          style={{
            scaleY: progress,
            height: "100%",
          }}
        />
      </div>

      <div className="relative flex flex-col gap-8">
        {sections.map((id, index) => {
          const isActive = id.toLowerCase() === active.toLowerCase();

          return (
            <div
              key={id}
              onClick={() => scrollTo(id)}
              className="group relative flex cursor-pointer items-center justify-center"
            >
              {/* Tooltip */}
              <div className="absolute right-full mr-6 hidden translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:flex">
                <div className="flex items-center gap-3">
                  <span className="rounded border border-border bg-muted/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
                    {id}
                  </span>
                  <div className="h-px w-4 bg-primary/40" />
                </div>
              </div>

              {/* Dot */}
              <motion.div
                animate={{
                  scale: isActive ? 1.5 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 28,
                }}
                className={`relative z-10 h-2 w-2 rounded-full ${
                  isActive ? "bg-primary" : "bg-muted-foreground/90"
                }`}
              >
                {isActive && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      animate={{
                        scale: [1, 2.6],
                        opacity: [0.6, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    <div className="absolute inset-0 rounded-full bg-primary blur-[6px] opacity-80" />
                  </>
                )}
              </motion.div>

              {/* Index */}
              <span
                className={`absolute -right-6 text-[8px] font-bold ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}