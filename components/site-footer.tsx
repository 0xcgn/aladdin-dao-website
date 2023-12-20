import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./icons";
import { SocialButton } from "./social-button";
import Image from "next/image";
import { Separator } from "./ui/separator";

const Resources = () => (
  <div className="w-1/3 md:w-2/5 lg:w-1/5">
    <h4 className="font-bold mb-2">Resources</h4>
    <ul>
      <li>
        <Link href={siteConfig.links.docs} target="_blank">
          Docs
        </Link>
      </li>
      <li>
        <Link href={siteConfig.links.forum} target="_blank">
          Forum
        </Link>
      </li>
      <li>
        <Link href={siteConfig.links.governance} target="_blank">
          Governance
        </Link>
      </li>
      <li>
        <Link href={siteConfig.socials.medium} target="_blank">
          Blog
        </Link>
      </li>
      <li>
        <Link href={siteConfig.socials.discord} target="_blank">
          Discord
        </Link>
      </li>
    </ul>
  </div>
);

const Products = () => (
  <div className="w-1/3 md:w-2/5 lg:w-1/5">
    <h4 className="font-bold mb-2">Products</h4>
    <ul>
      <li>
        <Link target="_blank" href={siteConfig.products.aladdinV2}>
          Aladdin DAO V2
        </Link>
      </li>
      <li>
        <Link target="_blank" href={siteConfig.products.concentrator}>
          Concentrator
        </Link>
      </li>
      <li>
        <Link target="_blank" href={siteConfig.products.clever}>
          CLever
        </Link>
      </li>
      <li>
        <Link target="_blank" href={siteConfig.products.fxProtocol}>
          f(x) Protocol
        </Link>
      </li>
      <li>
        <Link target="_blank" href={siteConfig.products.bridge}>
          Bridge
        </Link>
      </li>
    </ul>
  </div>
);

const SecurityAndLegal = () => (
  <div className="w-1/3 md:w-2/5 lg:w-1/5 ">
    <h4 className="font-bold mb-2">Security</h4>
    <ul>
      <li>
        <Link href={siteConfig.links.auditReports} target="_blank">
          Audit Reports
        </Link>
      </li>
      <li>
        <Link href={siteConfig.links.bugBounty} target="_blank">
          Bug Bounty
        </Link>
      </li>
    </ul>
    <h4 className="font-bold my-2">Legal</h4>
    <ul>
      <li>
        <Link href="/privacy">Privacy Policy</Link>
      </li>
      <li>
        <Link href="/terms">Terms of Service</Link>
      </li>
    </ul>
  </div>
);

const Copyright = () => (
  <div className="container flex flex-col items-center justify-between py-2 md:h-20 md:flex-row">
    <p className="leading-md text-muted-foreground">
      © {new Date().getFullYear()} Aladdin DAO <br />
      <small>
        ENS: &nbsp;
        <Link href={"https://aladdindao.eth.limo/"} target="_blank">
          AladdinDao.eth
        </Link>
      </small>
      <br />
    </p>
    <p className="text-center text-xs leading-loose text-muted-foreground md:text-left">
      Built by{" "}
      <a
        href={"https://dub.sh/x-0xcgn"}
        target="_blank"
        rel="noreferrer"
        className="font-medium underline underline-offset-4"
      >
        @0xCgn
      </a>
      . The source code is available on{" "}
      <a
        href={"https://dub.sh/aladdin-ws-gh"}
        target="_blank"
        rel="noreferrer"
        className="font-medium underline underline-offset-4"
      >
        GitHub
      </a>
      .
      <br />
      This project is in beta. Use at your own risk.
    </p>
  </div>
);

const socials = [
  // {
  //   href: siteConfig.socials.medium,
  //   Icon: Icons.medium,
  //   label: "Medium",
  // },

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
    href: siteConfig.socials.youtube,
    Icon: Icons.youtube,
    label: "Youtube",
  },
  {
    href: siteConfig.socials.github,
    Icon: Icons.gitHub,
    label: "Github",
  },
  // {
  //   href: siteConfig.socials.telegram,
  //   Icon: Icons.telegram,
  //   label: "Telegram",
  // },
];

export function SiteFooter() {
  return (
    <footer className="text-sm md:px-8 border-t-1 border-t pt-8 md:pt-24">
      <div className="container flex flex-col md:flex-row mb-8 gap-4">
        <div className="w-full items-center md:items-start md:w-2/5 lg:w-1/5 flex flex-col gap-4 pr-4">
          <Image
            className="h-16 w-16 md:h-12 md:w-12"
            src={"/images/aladdin-dao-logo.webp"}
            width={60}
            height={60}
            alt="Aladdin DAO Logo"
          />
          <span className="text-muted-foreground">
            Building the future of Decentralized Finance
          </span>
          <div className="flex items-center">
            {socials.map((social, i) => (
              <>
                <SocialButton
                  key={`footer-social-${social.label}`}
                  href={social.href}
                  Icon={social.Icon}
                  label={social.label}
                  iconClassName={social.iconClassName}
                />
                {i < socials.length - 1 && (
                  <Separator className="mx-1" orientation="vertical" />
                )}
              </>
            ))}
          </div>
        </div>

        <div className="w-1/2 mx-auto mb-4 md:hidden">
          <Separator />
        </div>

        <div className="w-full md:w-3/5 lg:w-4/5 flex flex-row sm:flex-row justify-center md:justify-end text-center md:text-left">
          <Products />
          <Resources />
          <SecurityAndLegal />
        </div>
      </div>

      <Separator />
      <Copyright />
    </footer>
  );
}
