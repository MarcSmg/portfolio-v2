"use client"

import { useState } from "react";
import type { ProjectContent } from "../../content/types";
import { useContent } from "../../context/ContentContext"
import ProjectCard from "../project/ProjectCard";
import { ProjectDetailsFrame } from "../project/ProjectDetailsFrame";
import MagicBento from "../ui/MagicBento";
import ScrollFloat from "../ui/ScrollFloat";
import { useInView } from "@/hooks/useInVIew";

const Projects = () => {
  const { content } = useContent();
  const projectsContent = content.projectsContent;

  const [activeProject, setActiveProject] = useState<string>("");

    const { ref, isVisible } = useInView();

  return (
    <section id="projects" className=" flex flex-col mb-40 scroll-m-10 md:mb-100">
      <div className="relative flex h-[200vh] mb-120">
        <div className="sticky top-0 flex justify-center items-center h-screen w-full overflow-visible">
          <ScrollFloat containerClassName="flex flex-col gap-2 text-[4rem] lg:text-[10rem] self-center md:flex-row">Recent<span className="mb-10 text-brand inline-block w-fit">Projects</span></ScrollFloat>
        </div>
      </div>

      <div ref={ref} className="relative flex">
        <MagicBento
          className="overflow-y-auto no-scrollbar lg:grid-cols-2 gap-5 place-items-center p-2"
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          spotlightRadius={400}
          particleCount={12}
          glowColor="71, 140, 251"
        >
          {projectsContent.map((p: ProjectContent) => {
            return (
              <ProjectCard
                key={p.slug}
                project={p}
                onOpenDetails={() => setActiveProject(p.slug)}
                onCloseDetails={() => setActiveProject("")}
                isContainerVisible={isVisible}
              ></ProjectCard>
            )
          }
          )}
        </MagicBento>
        {projectsContent.map((p: ProjectContent) => (
          <ProjectDetailsFrame
            key={p.slug}
            project={p}
            isVisible={activeProject === p.slug}
            onClose={() => setActiveProject("")}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
