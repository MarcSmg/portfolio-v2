"use client"

import { useContent } from "../../context/ContentContext"
import ScrollFloat from "../ui/ScrollFloat";
import ScrollReveal from "../ui/ScrollReveal";

const About = () => {
  const { content } = useContent();
  const aboutContent = content.aboutContent;

  // const {ref: refTitle, isVisible: isVisibleTitle} = useInView();
  return (
    <section id="about" className={`flex flex-col items-center mb-20 w-full`}>
      <div className="relative flex h-[200vh]">
        <div className="sticky top-0 flex justify-center items-center h-screen w-full overflow-visible">
          <ScrollFloat containerClassName={`flex gap-2 text-[4rem] lg:text-[10rem]`}>
            About
            <span className="mb-10 text-brand inline-block w-fit">Me</span>
          </ScrollFloat>
        </div>
      </div>

      <div className="relative flex h-[200vh] mb-120">
        <div className="sticky top-0 flex justify-center items-center h-screen overflow-visible">

          <div className={`max-w-300 text-justify`}>
            <ScrollReveal
              textClassName="font-normal text-lg lg:text-3xl"
              enableBlur={true}
              baseRotation={15}
            >
              {aboutContent.education}
            </ScrollReveal>

            <ScrollReveal
              textClassName="font-normal text-lg lg:text-3xl"
              enableBlur={true}
              baseRotation={15}
            >
              {aboutContent.background}
            </ScrollReveal>

            <ScrollReveal
              textClassName="font-normal text-lg lg:text-3xl"
              enableBlur={true}
              baseRotation={15}
            >
              {aboutContent.interests}
            </ScrollReveal>

            <ScrollReveal
              textClassName="font-normal text-lg"
              enableBlur={true}
              baseRotation={15}
            >
              {aboutContent.objective}
            </ScrollReveal>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
