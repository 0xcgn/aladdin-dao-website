"use client";

import { useProduct } from "@/hooks/useSiteConfig";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className }: React.HTMLAttributes<HTMLLinkElement>) => {
  const product = useProduct();

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
        src={product.logo}
        width={60}
        height={60}
        alt={`${product.name} Logo`}
      />
      <span className="font-semibold">{product.name}</span>
    </Link>
  );
};
