"use client"

import { useContent } from "@/context/ContentContext"

const Footer = () => {
  const {content} = useContent();
  const footerContent = content.footerContent;
  return (
    <footer className="w-full">
      <div className="flex flex-col gap-5 px-5 py-6 bg-ui-dark w-full h-full justify-center md:items-center">
        <p>{footerContent.copyright}</p>
        <p>{footerContent.note}</p>       
      </div>

    </footer>
  )
}

export default Footer
