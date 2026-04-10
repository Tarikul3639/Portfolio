import { motion } from "framer-motion";

export default function Watermark({ text = "TARIKUL" }) {
    return (
        <motion.div
            initial={{ opacity: 0.03 }}
            whileHover={{ opacity: 0.08, letterSpacing: "0.2em" }}
            className="absolute -bottom-5 -right-0 lg:-bottom-16 lg:-right-10 text-[4rem] md:text-[8rem] lg:text-[14rem] font-black text-neutral-200 dark:text-white select-none pointer-events-none uppercase italic tracking-tighter transition-all duration-1000"
        >
            {text}
        </motion.div>
    );
}