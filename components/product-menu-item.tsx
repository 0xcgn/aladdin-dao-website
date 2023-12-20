"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/config/site";

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
    href: "https://aladdin.aladdin.club",
    description:
      "Join the Community of Builders, Farmers, and Learners. Stake, Earn, Learn and Grow with Aladdin DAO V2.",
    logo: "/images/aladdin-logo.webp",
  },
  {
    title: "Concentrator",
    href: "https://concentrator.aladdin.club",
    description:
      "Enhance and Automate your yields on Convex vaults by concentrating all rewards into auto-compounding top-tier tokens.",
    logo: "/images/concentrator-logo.webp",
  },
  {
    title: "Clever",
    href: "https://clever.aladdin.club",
    description:
      "Deposit tokens in high-yielding collateral strategies, and claim your future yields today. They can be farmed, re-deposited, or used wherever you need them.",
    logo: "/images/clever-logo.webp",
  },
  {
    title: "f(x) Protocol",
    href: "https://fx.aladdin.club",
    description:
      "Split the volatility from your token by minting a stable token (fToken) or a volatile token (xToken). Lend, borrow, farm and trade your fToken or speculate on the future with your xToken.",
    logo: "/images/fx-logo.webp",
  },
];

const AladdinDAOBig = () => (
  <li className="row-span-3">
    <NavigationMenuLink asChild>
      <a
        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
        href={siteConfig.links.app}
      >
        <Icons.logo className="h-6 w-6" />
        <div className="mb-2 mt-4 text-lg font-medium">Aladdin DAO V2</div>
        <p className="text-sm leading-tight text-muted-foreground">
          Follow the light to stake, earn, learn and grow
        </p>
      </a>
    </NavigationMenuLink>
  </li>
);

export function ProductMenu() {
  console.log("hihi");
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
                  target="_blank"
                  title={product.title}
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <MenuItem href={siteConfig.links.docs} text="Docs" />
        <MenuItem href={siteConfig.links.forum} text="Forum" />
        <MenuItem href={siteConfig.links.governance} text="Governance" />
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
