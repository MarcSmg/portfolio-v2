"use client"

import { useState } from "react";
import type { ProjectContent } from "../../content/types";
import { useContent } from "../../context/ContentContext";
import ProjectCard from "../project/ProjectCard";
import { ProjectDetailsFrame } from "../project/ProjectDetailsFrame";
import { motion, AnimatePresence } from "motion/react";
import SectionTitle from "../ui/SectionTitle";
import { useInView } from "@/hooks/useInVIew";

const Projects = () => {
  const { content } = useContent();
  const projectsContent = content.projectsContent;

  const [activeProject, setActiveProject] = useState<string>("");

  const { ref, isVisible } = useInView(0);

  return (
    <section id="projects" className=" flex flex-col mb-40 scroll-m-10 md:mb-100">
      <SectionTitle plain="Recent" highlight="Projects" className="mb-120" />
      <AnimatePresence>
        <motion.div ref={ref} className="relative flex">
          {/* <MagicBento
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
        > */}
          <div className="grid w-full gap-4 lg:grid-cols-2 2xl:grid-cols-3">

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
            {/* </MagicBento> */}
            {projectsContent.map((p: ProjectContent) => (
              <ProjectDetailsFrame
                key={p.slug}
                project={p}
                isVisible={activeProject === p.slug}
                onClose={() => setActiveProject("")}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Projects
