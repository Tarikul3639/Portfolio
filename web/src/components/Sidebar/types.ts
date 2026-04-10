export interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
    menuItems: string[];
    activeLink: string;
    setActiveLink: (v: string) => void;
    toggleTheme: () => void;
    theme: "dark" | "light";
}