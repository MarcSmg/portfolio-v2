import { cn } from "@/lib/utils";

interface NoiseTextureProps {
  className?: string;
  opacity?: number;
  baseFrequency?: number;
}

export function NoiseTexture({
  className,
  opacity = 0.15,
  baseFrequency = 0.6,
}: NoiseTextureProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 rounded-[inherit]", className)}
      style={{ opacity }}
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves="6"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)" />
      </svg>
    </div>
  );
}
