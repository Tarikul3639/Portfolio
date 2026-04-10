import { motion } from "framer-motion";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { HERO_DESCRIPTION, WORDS, type SocialLink } from "./hero.data";
import { HeroActions } from "./HeroActions";

interface Props {
    status: "idle" | "loading" | "success" | "error";
    onDownload: () => void;
    socialLinks: SocialLink[];
}

export function HeroContent({ status, onDownload, socialLinks }: Props) {
    return (
        <div className="flex-1 text-center lg:text-left space-y-6">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-normal animate-bounce">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available For New Projects
            </div>

            {/* Intro + Name */}
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground font-sans">
                Hi, I'm{" "}
                <span className="inline-flex text-3xl md:text-3xl font-extrabold tracking-wide text-primary">
                    <TypeWriter words={WORDS} />
                </span>
            </h2>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
                Full-Stack Web App<br />
                <span className="bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">with TypeScript.</span>
            </h1>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed text-muted-foreground font-serif"
            >
                {HERO_DESCRIPTION}
            </motion.p>

            {/* Actions */}
            <HeroActions
                status={status}
                onDownload={onDownload}
                socialLinks={socialLinks}
            />

        </div>
    );
}