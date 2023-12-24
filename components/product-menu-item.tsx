"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useProduct } from "@/hooks/useSiteConfig";

const MenuItem = ({ href, text }: { href: string; text: string }) => (
  <NavigationMenuItem>
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink
        target="_blank"
        className={navigationMenuTriggerStyle()}
      >
        {text}
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
);

// TODO: update the description ...etc.
const products: {
  title: string;
  href: string;
  description: string;
  logo: string;
}[] = [
  {
    title: "Aladdin DAO V2",
    href: "/",
    description:
      "Join the Community of Builders, Farmers, and Learners. Stake, Earn, Learn and Grow with Aladdin DAO V2.",
    logo: "/images/aladdin-logo.webp",
  },
  {
    title: "Concentrator",
    href: "/concentrator",
    description:
      "Enhance and Automate your yields on Convex vaults by concentrating all rewards into auto-compounding top-tier tokens.",
    logo: "/images/concentrator-logo.webp",
  },
  {
    title: "Clever",
    href: "/clever",
    description:
      "Deposit tokens in high-yielding collateral strategies, and claim your future yields today. They can be farmed, re-deposited, or used wherever you need them.",
    logo: "/images/clever-logo.webp",
  },
  {
    title: "f(x) Protocol",
    href: "/fx-protocol",
    description:
      "Split the volatility from your token by minting a stable token (fToken) or a volatile token (xToken). Lend, borrow, farm and trade your fToken or speculate on the future with your xToken.",
    logo: "/images/fx-logo.webp",
  },
];

export function ProductMenu() {
  const product = useProduct();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              {products.map((product, i) => (
                <ListItem
                  key={`product-${i}`}
                  href={product.href}
                  title={product.title}
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <MenuItem href={product.links.docs} text="Docs" />
        <MenuItem href={product.links.forum} text="Forum" />
        <MenuItem href={product.links.governance} text="Governance" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
