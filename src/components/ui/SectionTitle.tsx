import ScrollFloat from "@/components/ui/ScrollFloat";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  plain: string;
  highlight: string;
  className?: string;
}

const SectionTitle = ({ plain, highlight, className }: SectionTitleProps) => {
  return (
    <div className={cn("relative flex h-[200vh]", className)}>
      <div className="sticky top-0 flex justify-center items-center h-screen w-full overflow-visible">
        <ScrollFloat containerClassName="flex flex-col gap-2 text-[4rem] lg:text-[8rem] self-center md:flex-row">
          {plain}
          <span className="mb-10 text-brand inline-block w-fit">{highlight}</span>
        </ScrollFloat>
      </div>
    </div>
  );
};

export default SectionTitle;
