export const SectionId = {
    Home: "Home",
    About: "About",
    Projects: "Projects",
    Contact: "Contact",
    Skills: "Skills",
    Experience: "Experience",
    Education: "Education",
    Footer: "Footer",
} as const;

export type Section = typeof SectionId[keyof typeof SectionId];