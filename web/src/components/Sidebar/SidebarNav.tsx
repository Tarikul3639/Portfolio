import { motion } from "framer-motion";

interface Props {
    menuItems: string[];
    activeLink: string;
    setActiveLink: (v: string) => void;
    onClose: () => void;
}

export function SidebarNav({ menuItems, activeLink, setActiveLink, onClose }: Props) {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="flex-1 px-8 py-12 overflow-y-auto">
            <ul className="space-y-2">
                {menuItems.map((item, i) => {
                    const isActive = activeLink === item.toLowerCase();
                    return (
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.2 }}
                        >
                            <div
                                onClick={() => {
                                    setActiveLink(item.toLowerCase());
                                    onClose();
                                    scrollTo(item.toLowerCase());
                                }}
                                className="relative group flex items-center py-5 px-6 rounded-2xl transition-all duration-500 hover:bg-sidebar-primary/5 border border-transparent hover:border-sidebar-primary/20 overflow-hidden cursor-pointer"
                            >
                                {/* Index */}
                                <span className="text-sm font-mono text-sidebar-primary/40 group-hover:text-sidebar-primary transition-colors mr-6">
                                    {`// 0${i + 1}`}
                                </span>

                                {/* Label */}
                                <span className={`text-3xl font-black uppercase tracking-tighter transition-all duration-300 flex-1 ${
                                    isActive
                                        ? "text-sidebar-foreground"
                                        : "text-sidebar-accent group-hover:text-sidebar-foreground"
                                }`}>
                                    {item}
                                </span>

                                {/* Active dot */}
                                {isActive && (
                                    <motion.div
                                        className="ml-auto w-2 h-2 bg-sidebar-primary rounded-full shadow-[0_0_10px_var(--sidebar-ring)]"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                                        transition={{ duration: 1.2, repeat: Infinity }}
                                    />
                                )}

                                {/* Hover underline */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-sidebar-primary shadow-[0_0_10px_var(--sidebar-ring)]"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                />

                                {/* Arrow */}
                                <div className="ml-auto opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 shrink-0">
                                    <div className="w-8 h-px bg-sidebar-primary" />
                                </div>
                            </div>
                        </motion.li>
                    );
                })}
            </ul>
        </nav>
    );
}