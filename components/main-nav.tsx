"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { ProductMenu } from "./product-menu-item";
import { Logo } from "./Logo";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Logo />
      <ProductMenu />
    </div>
  );
}
