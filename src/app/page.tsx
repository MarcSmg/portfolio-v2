import About from "../components/sections/About"
import Contact from "../components/sections/Contact"
import Hero from "../components/sections/Hero"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"

export default function Home() {

  return (

    <div className="flex flex-col items-center justify-center scroll-smooth scroll-mt-2 max-sm:px-[5%] px-[20%] md:px-20 m-0">
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
    </div>
  )
}