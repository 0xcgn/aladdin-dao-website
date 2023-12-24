import {
  aladdinV2Config,
  cleverConfig,
  concentratorConfig,
  fxConfig,
} from "@/config/site";
import { usePathname } from "next/navigation";

export const useProduct = () => {
  const pathname = usePathname();

  if (pathname.includes("concentrator")) return concentratorConfig;
  if (pathname.includes("clever")) return cleverConfig;
  if (pathname.includes("fx-protocol")) return fxConfig;

  return aladdinV2Config;
};
