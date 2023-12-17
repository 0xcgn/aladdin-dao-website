import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
// import { CommandMenu } from "@/components/command-menu"
import { IconProps, Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
// import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { ProductMenu } from "./product-menu-item";
import { SocialButton } from "./social-button";
import { MobileNav } from "./mobile-nav";
import Image from "next/image";
import { Logo } from "./Logo";

const socials = [
  {
    href: siteConfig.socials.twitter,
    Icon: Icons.twitter,
    label: "Twitter",
    iconClassName: "w-3 h-3",
  },
  {
    href: siteConfig.socials.discord,
    Icon: Icons.discord,
    label: "Discord",
  },
  {
    href: siteConfig.socials.github,
    Icon: Icons.gitHub,
    label: "Github",
    className: "hidden md:inline-flex",
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <MainNav />
        <MobileNav />
        <Logo className="md:hidden" />

        <div className="flex flex-1 items-center space-x-2 justify-end grow-0">
          <nav className="flex items-center">
            {socials.map((social) => (
              <SocialButton
                key={`header-social-${social.label}`}
                href={social.href}
                Icon={social.Icon}
                label={social.label}
                className={social.className}
                iconClassName={social.iconClassName}
              />
            ))}

            <ModeToggle />
            <Button asChild className="mx-2 hidden md:flex">
              <Link href={siteConfig.links.app}>Launch App</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
