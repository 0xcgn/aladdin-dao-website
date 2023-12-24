"use client";

import * as React from "react";
import Link from "next/link";
import { AlignLeft } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Logo } from "./Logo";
import { useProduct } from "@/hooks/useSiteConfig";
import { siteConfig } from "@/config/site";

const NavItem = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Button variant="ghost" asChild className="w-full">
      <Link href={href} target="_blank">
        {text}
      </Link>
    </Button>
  </li>
);

export function MobileNav() {
  const product = useProduct();

  return (
    <div className="mr-4 md:hidden inline">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <AlignLeft className="w-4 h-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <ul className="grow w-full flex flex-col my-8">
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full">
                    Products
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-accent border-t">
                  <ul>
                    <NavItem
                      href={siteConfig.products.aladdinV2}
                      text="Aladdin DAO V2"
                    />
                    <NavItem
                      href={siteConfig.products.concentrator}
                      text="Concentrator"
                    />
                    <NavItem href={siteConfig.products.clever} text="CLever" />
                    <NavItem
                      href={siteConfig.products.fxProtocol}
                      text="f(x) Protocol"
                    />
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
            <NavItem href={product.links.docs} text="Documentation" />
            <NavItem href={product.links.forum} text="Forum" />
            <NavItem href={product.links.governance} text="Governance" />
            <li className="mt-auto">
              <Button asChild className="w-full">
                <Link href={product.links.app} target="_blank">
                  Launch App
                </Link>
              </Button>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
