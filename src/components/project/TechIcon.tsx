import Image from "next/image";
import { iconMap } from "@/data/iconMap";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon = ({ name, className = "p-px h-10 w-auto" }: TechIconProps) => {
  const src = iconMap[name.toLowerCase().replaceAll(" ", "")];
  if (!src) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image className={className} src={src} alt={name} width={0} height={0} />
        </TooltipTrigger>
        <TooltipContent className="bg-brand-muted text-white border-0 text-lg" >{name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechIcon;
