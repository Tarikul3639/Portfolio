import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypeWriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
    cursorClassName?: string;
}

export const TypeWriter = ({
    words,
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 1500,
    className = "",
    cursorClassName = "",
}: TypeWriterProps) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        if (isPaused) {
            const timeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(timeout);
        }

        if (!isDeleting && displayed === currentWord) {
            setIsPaused(true);
            return;
        }

        if (isDeleting && displayed === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setDisplayed((prev) =>
                isDeleting
                    ? prev.slice(0, -1)
                    : currentWord.slice(0, prev.length + 1)
            );
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={cn("inline-flex items-center", className)}>
            <AnimatePresence mode="wait">
                <motion.span key={wordIndex} className="inline-block min-w-0.5">
                    {displayed || "\u00A0"}
                </motion.span>
            </AnimatePresence>

            {/* Blinking cursor */}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className={cn("ml-0.5 inline-block w-0.5 h-[1em] bg-primary align-middle", cursorClassName)}
            />
        </span>
    );
};