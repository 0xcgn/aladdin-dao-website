import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  isFullWidth?: boolean;
}

export const Section = ({ children, className, isFullWidth }: SectionProps) => {
  return (
    <div className={cn("pt-16 pb-12", className)}>
      <div className={cn("", isFullWidth ? "" : "container")}>{children}</div>
    </div>
  );
};
