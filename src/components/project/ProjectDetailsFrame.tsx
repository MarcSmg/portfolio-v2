"use client"

import type { ProjectContent } from "@/content/types"
import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

type ProjectDetailsProps = {
  project: ProjectContent;
  isVisible: boolean;
  onClose: () => void;
}

export const ProjectDetailsFrame = ({ project, isVisible, onClose }: ProjectDetailsProps) => {

  useEffect(() => {
    if (!isVisible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow; 
    };
  }, [isVisible]);

  return <div className={`relative flex flex-col`} >
    {isVisible && (
      <>
        <motion.div
          // Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-60 bg-black opacity-50"
          onClick={onClose}
        ></motion.div>

        <motion.div
          // Modal content
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className={`
            fixed inset-0 my-5 mx-5 flex flex-col z-70 px-5 py-10
            rounded-4xl
            shadow-black shadow-lg/50 bg-linear-to-r from-brand-muted from-[-150%] via-ui-surface-dark via-10% to-ui-surface
            //md:inset-20 md:px-20
          `}
        >

          <button
            // Close button
            className={`
              absolute top-5 right-5
              flex flex-col items-center justify-center z-50
              size-10 cursor-pointer 
              bg-ui-surface rounded-full
              hover:bg-brand-muted/50
              focus:outline-none focus-visible:ring focus-visible:ring-zinc-500
              transition-all duration-200
              `
            }
            aria-label="Close project details"
            onClick={onClose}
          >
            <span
              className={`
                block h-0.5 w-4 mb-1
              bg-white transition-transform duration-300
                rotate-45 translate-y-1
            `}
            />
            <span
              className={`
                block h-0.5 w-4 mb-1
              bg-white transition-transform duration-300
                -rotate-45 -translate-y-0.5
            `}
            />
          </button>

          <div className="flex flex-col text-justify overflow-auto no-scrollbar scroll-smooth">
            <h1 className="text-left mb-5">{project.name}</h1>
            <h3 className="text-left mb-10">{project.headline}</h3>
            <div className="relative //self-center shrink-0 justify-center w-full md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden aspect-video mb-10">
                <Image src={`/images/projects/${project.slug}/preview.png`} alt={project.name} fill className={`object-cover rounded-lg`} sizes="100vw" />
            </div>
            <p className="mb-5">{project.description}</p>
            <h3 className="text-brand font-bold mb-5">The Why</h3>
            <p className="mb-5">{project.problem}</p>
            <h3 className="text-brand font-bold mb-5">Our Solution</h3>
            <p className="mb-5">{project.solution}</p>
            <p className="mb-5">{project.endline}</p>

          </div>

        </motion.div>
      </>
      )
    }
  </div>
};
