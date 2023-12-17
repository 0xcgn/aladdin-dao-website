import Link from "next/link";
import { IconProps } from "./icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

interface SocialButtonProps {
  href: string;
  label: string;
  Icon: (props: IconProps) => JSX.Element;
  className?: string;
  iconClassName?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  Icon,
  label,
  className,
  iconClassName,
}) => (
  <Link href={href} target="_blank" rel="noreferrer" className={className}>
    <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0")}>
      <Icon className={cn("h-4 w-4 fill-current", iconClassName)} />
      <span className="sr-only">{label}</span>
    </div>
  </Link>
);
