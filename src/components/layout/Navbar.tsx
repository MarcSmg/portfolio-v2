"use client"

import NavLink from "./NavLink"
import { House, Presentation, BookOpenText, BrainCircuit, Mail } from "lucide-react"
import { Fragment, useEffect, useRef, useState } from "react";
import { handleScrollIntoView } from "@/utils/handleScrollIntoView";
import Image from "next/image";
import { SpaceBackground } from "@/components/ui/SpaceBackground";

const navLinks = [
  { href: "#hero",     icon: <House size={28} />,        label: "HOME"     },
  { href: "#projects", icon: <Presentation size={28} />, label: "PROJECTS" },
  { href: "#about",    icon: <BookOpenText size={28} />,  label: "ABOUT ME" },
  { href: "#skills",   icon: <BrainCircuit size={28} />, label: "SKILLS"   },
  { href: "#contact",  icon: <Mail size={28} />,          label: "CONTACT"  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isThrottled = useRef(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      if (isThrottled.current) return;
      isThrottled.current = true;
      setTimeout(() => {
        const currentScrollY = window.scrollY;
        if (Math.abs(currentScrollY - lastScrollY.current) < 50) {
          isThrottled.current = false;
          return;
        }
        setVisible(!(currentScrollY > lastScrollY.current && currentScrollY > 80));
        lastScrollY.current = currentScrollY;
        isThrottled.current = false;
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => handleScrollIntoView(e, href), 350);
  };

  return (
    <nav className={`flex w-full fixed top-0 z-50 justify-center ${visible ? "animate-fade-in-down" : "animate-fade-out-up"}`}>

      {/* Desktop Menu */}
      <div className="hidden top-0 mt-5 px-2 py-2 rounded-xl gap-5 justify-between shadow-black shadow-lg/50 bg-linear-to-r from-brand-muted from-[-100%] via-ui-surface to-brand-muted to-250% lg:flex">
        <NavLink url="#hero"><House size={20} />Home</NavLink>
        <NavLink url="#projects"><Presentation size={20} />Projects</NavLink>
        <NavLink url="#about"><BookOpenText size={20} />About Me</NavLink>
        <NavLink url="#skills"><BrainCircuit size={20} />Skills</NavLink>
        <NavLink url="#contact"><Mail size={20} />Contact</NavLink>
      </div>

      {/* Mobile full-screen overlay — rendered before top bar so top bar stays on top */}
      <div
        className="lg:hidden fixed inset-0 h-[88dvh] m-2 rounded-2xl overflow-hidden flex flex-col items-center justify-center"
        style={{
          clipPath: open
            ? "circle(200vmax at calc(100% - 2rem) 2rem)"
            : "circle(0px at calc(100% - 2rem) 2rem)",
          transition: "clip-path 1.1s cubic-bezier(0.6, 1, 0.3, 1)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <SpaceBackground particleColor="#478cfb" backgroundColor="#191919" />
        <div className="absolute inset-0 bg-black/30 z-0" />
        <ul className="relative z-10 flex flex-col w-full px-10">
          {navLinks.map(({ href, icon, label }, i) => (
            <Fragment key={href}>
            <li
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(1.5rem)",
                transition: `opacity 0.4s ease ${0.15 + i * 0.07}s, transform 0.4s ease ${0.15 + i * 0.07}s`,
              }}
              className="w-full text-center py-10"
            >
              <a
                className="flex gap-4 items-center text-2xl font-semibold hover:text-brand transition-colors duration-200"
                href=""
                onClick={(e) => handleLinkClick(e, href)}
              >
                {icon}
                {label}
              </a>
            </li>
              <hr className="border-t border-zinc-600" />
            </Fragment>
          ))}
        </ul>
      </div>

      {/* Mobile top bar — rendered after overlay so it stays above */}
      <div className="bg-ui-surface mx-auto flex w-full items-center justify-between px-5 py-5 lg:hidden">
        <Image src="/icons/watermark-full.svg" alt="Logo" width={128} height={64} className="w-32 h-auto" />
        <button
          className="p-3 cursor-pointer rounded-lg hover:bg-brand-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 transition-all duration-200"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-6 mb-1 bg-white transition-all duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 mb-1 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
