"use client"

import type { ProjectContent } from "../../content/types"
import AppButton from "../ui/AppButton"
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  project: ProjectContent,
  onOpenDetails: () => void,
  onCloseDetails: () => void,
  children?: React.ReactNode,
  isContainerVisible?: boolean,
}

const statuses = {
  "planned": "Planned",
  "in-progress": "In progress",
  "completed": "Completed"
};

const ProjectCard = ({ project, onOpenDetails, isContainerVisible }: ProjectProps) => {

  return (
    <>
      <div className={` 
          ${isContainerVisible ? 'animate-fade-in-up' : 'translate-y-20'}
          opacity-0
          w-full h-full
          bg-ui-surface border outline-5 border-brand-muted px-5 py-10 rounded-2xl
          shadow-brand-emphasis/
          hover:-translate-y-1/ hover:shadow-lg/90 transition-all duration-300
          `}
      >
        <div className="flex flex-col gap-2 h-full justify-between">
          <div className="flex flex-col gap-2">

            <div>
              <h2 className="font-semibold text-brand">{project.name} <span className="text-sm">({statuses[project.status]})</span></h2>
              <p>{project.headline}</p>
              <br />
              <p>{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-5 w-fit py-3">
              {project.tech.map((t) => <span className="bg-brand-muted px-2 py-1 rounded-full text-sm" key={t}>{t}</span>)}
            </div>

          </div>

          <div className="flex flex-col gap-2 justify-between md:flex-row md:items-center">
            <div className="flex gap-2 justify-between md:justify-start">

              <a href={project.links?.live} target="_blank">
                <AppButton variant="primary" styles=" flex gap-1 text-sm font-semibold px-5 py-3 transition">Live Demo<ArrowUpRight size={20} /> </AppButton>
              </a>

              <AppButton
                variant="secondary"
                styles=" flex gap-1 text-sm font-semibold px-5 py-3 transition"
                onClick={onOpenDetails}
              >
                Details
              </AppButton>
            </div>

            <a className="flex justify-en" href={project.links?.github} target="_blank">
              <AppButton variant="secondary" styles=" p-2 hover:brightness-120 transition"><FaGithub className="fill-white" size={25} /></AppButton>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProjectCard
