"use client"

import { useInView } from "@/hooks/useInVIew";
import { useContent } from "../../context/ContentContext"
import SkillCard from "../skill/SkillCard";
import SectionTitle from "../ui/SectionTitle";
import { RadialLayout } from "../skill/RadialLayout";

const Skills = () => {
  const { content } = useContent();
  const skillsContent = content.skillsContent;

  const skillsGridStyle = "grid w-full py-10 w-full py-10 gap-10 lg:grid-cols-2 2xl:grid-cols-3 pb-40";

  const { ref: refLanguagesContainer, isVisible: isLanguagesContainerVisible } = useInView();
  const { ref: refFrontendContainer, isVisible: isFrontendContainerVisible } = useInView();
  const { ref: refBackendContainer, isVisible: isBackendContainerVisible } = useInView();
  const { ref: refToolsContainer, isVisible: isToolsContainerVisible } = useInView();

  return (
    <section id="skills" className=" flex flex-col w-full mb-100 ">

      {/* <RadialLayout skills={skillsContent.languages} /> */}

      <SectionTitle plain="Tools &" highlight="Skills" className="mb-100" />
      <div className="flex flex-col p-3">
        <div >
          <h2>Languages</h2>
          <div ref={refLanguagesContainer} className={skillsGridStyle}>
            {skillsContent.languages.map((l, index) => <SkillCard isContainerVisible={isLanguagesContainerVisible} key={l.name} index={index} skill={l} />)}
          </div>
        </div>

        <div >
          <h2>Frontend Technologies</h2>
          <div ref={refFrontendContainer} className={skillsGridStyle}>
            {skillsContent.frontend.map((t, index) => <SkillCard isContainerVisible={isFrontendContainerVisible} key={t.name} index={index} skill={t} />)}
          </div>
        </div>

        <div >
          <h2>Backend Technologies</h2>
          <div ref={refBackendContainer} className={skillsGridStyle}>
            {skillsContent.backend.map((t, index) => <SkillCard isContainerVisible={isBackendContainerVisible} key={t.name} index={index} skill={t} />)}
          </div>
        </div>

        <div >
          <h2>Tools</h2>
          <div ref={refToolsContainer} className={skillsGridStyle}>
            {skillsContent.tools.map((t, index) => <SkillCard isContainerVisible={isToolsContainerVisible} key={t.name} index={index} skill={t} />)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
