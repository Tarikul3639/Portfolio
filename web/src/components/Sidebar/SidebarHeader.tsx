import { X } from "lucide-react";

interface Props {
    onClose: () => void;
}

export function SidebarHeader({ onClose }: Props) {
    return (
        <div className="p-8 flex items-center justify-between border-b border-sidebar-border">
            <div className="flex flex-col">
                <span className="text-[10px] font-mono text-sidebar-primary tracking-widest uppercase">
                    System Menu
                </span>
                <span className="text-xs text-sidebar-accent font-bold">
                    v4.0.4 - Active
                </span>
            </div>
            <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-sidebar-accent-foreground flex items-center justify-center text-sidebar-accent hover:text-sidebar-primary hover:rotate-90 transition-all duration-300 border border-sidebar-accent/30 hover:border-sidebar-primary/50"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}