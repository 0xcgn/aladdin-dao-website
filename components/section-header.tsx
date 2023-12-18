import { cn } from "@/lib/utils";
import Balance from "react-wrap-balancer";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
  subheader: string;
  preHeader?: string;
}

export function SectionHeader({
  header,
  subheader,
  preHeader,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col w-full text-center pb-12", className)}>
      {preHeader && <span className="text-muted-foreground">{preHeader}</span>}
      <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
        {header}
      </h2>
      <span className="text-muted-foreground">{subheader}</span>
    </div>
  );
}
