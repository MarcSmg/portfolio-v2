"use client"

import { useContent } from "../../context/ContentContext"
import { useInView } from "@/hooks/useInVIew";
import SectionTitle from "../ui/SectionTitle";
import { BlurTextEffect } from "../ui/BlurTextEffect";

const About = () => {
  const { content } = useContent();
  const aboutContent = content.aboutContent;

  const { ref, isVisible } = useInView(0);

  return (
    <section id="about" className={`flex flex-col items-center mb-20 w-full`}>
      <SectionTitle plain="About" highlight="Me"/>

      <div className="relative flex h-screen">
        <div className="sticky top-0 flex justify-center items-center h-dvh overflow-visible">

          <div ref={ref} className={`max-w-300 text-justify`}>
            {isVisible && (
              <>
                <p className="font-normal text-lg lg:text-3xl leading-relaxed mb-6">
                  <BlurTextEffect delay={0}>{aboutContent.education}</BlurTextEffect>
                </p>
                <p className="font-normal text-lg lg:text-3xl leading-relaxed mb-6">
                  <BlurTextEffect delay={0.15}>{aboutContent.background}</BlurTextEffect>
                </p>
                <p className="font-normal text-lg lg:text-3xl leading-relaxed mb-6">
                  <BlurTextEffect delay={0.3}>{aboutContent.interests}</BlurTextEffect>
                </p>
                <p className="font-normal text-lg leading-relaxed">
                  <BlurTextEffect delay={0.45}>{aboutContent.objective}</BlurTextEffect>
                </p>
              </>
            )}
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
