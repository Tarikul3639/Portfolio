import type { Project } from "@/data/projects.data";
import { ProjectImage } from "./ProjectImage";
import { ProjectContent } from "./ProjectContent";

type Props = { item: Project; index: number };

export const ProjectCard = ({ item, index }: Props) => {
    const isEven = index % 2 === 0;

    return (
        <div className="h-full flex items-center">
            <div
                className={`group/img bg-background flex flex-col lg:flex-row items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse cursor-grab"
                    }`}
            >
                <ProjectImage item={item} />
                <ProjectContent item={item} isEven={isEven} />
            </div>
        </div>
    );
};