import { iconMap } from "@/data/iconMap"
import Image from "next/image"

interface IconProps {
    name: string,
    size?: number,
    style?: string
}

const Icon = ({name, size = 10, style = "bg-white"}: IconProps) => {

  const dimension = `${size * 0.25}rem`;

  return (<div className="relative" style={{width: dimension, height: dimension}}>
    <Image
      className={"rounded-lg p-px " + style}
      src={iconMap[name.toLowerCase().replaceAll(' ', '')]}
      alt=""
      fill
      sizes={dimension}
    />
  </div>
  )
}

export default Icon
