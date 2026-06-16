"use client"

import { handleScrollIntoView } from "@/utils/handleScrollIntoView"
import { OriginButtonPrimary } from "../ui/OriginButtonPrimary"

interface NavLinkProps {
    children: React.ReactNode,
    url: string,
    styles?: string,
}
const NavLink = ({children, url, styles}: NavLinkProps) => {

  const insetStyle = "before:absolute before:inset-10 before:rounded-full before:bg-accent/80 before:opacity-0 before:transition-all hover:before:opacity-100 hover:before:inset-0 duration-100"

  return (
    <a onClick={(e) => handleScrollIntoView(e, url)} className={` relative py-1`} href={url}>
      <OriginButtonPrimary style={{background: "transparent"}} className={` h-full px-4`} >

        <span className="relative px-1 py-2 flex gap-2 items-center justify-center">
          {children}
        </span>
      </OriginButtonPrimary>
    </a>
  )
}

export default NavLink
