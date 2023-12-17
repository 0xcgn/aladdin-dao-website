import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className }: React.HTMLAttributes<HTMLLinkElement>) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center space-x-2 text-sm grow-0 lg:mr-6",
        className
      )}
    >
      <Image
        className="h-6 w-6"
        src={"/images/aladdin-dao-logo.webp"}
        width={60}
        height={60}
        alt="Aladdin DAO Logo"
      />
      <span className="font-semibold">{siteConfig.name}</span>
    </Link>
  );
};
