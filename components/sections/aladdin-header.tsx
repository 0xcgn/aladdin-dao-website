import Link from "next/link";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "../page-header";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";
import { YoutubeModal } from "../youtube-modal";
import { EcosystemTvl } from "../ecosystem-tvl";
import { Section } from "../section";
import { SectionHeader } from "../section-header";
import Image from "next/image";

const partnerLogos = [
  {
    title: "Curve",
    image: "/images/partner-logos/curve-logo.png",
  },
  {
    title: "Convex",
    image: "/images/partner-logos/convex-logo.png",
  },
  {
    title: "Frax",
    image: "/images/partner-logos/frax-logo.png",
  },
  {
    title: "Lido",
    image: "/images/partner-logos/lido-logo.png",
  },
  {
    title: "Ethereum",
    image: "/images/partner-logos/ethereum-logo.png",
  },
  {
    title: "Liquity",
    image: "/images/partner-logos/liquity-logo.png",
  },
];

export const AladdinHeaderSection = () => {
  return (
    <Section className="h-5/6 text-center">
      <PageHeader className="pb-8 max-w-[720px] lg:max-w-[960px] mx-auto">
        <span className="w-full" style={{ color: "#ea8d27" }}>
          Aladdin DAO
        </span>
        <PageHeaderHeading className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
          Building the future of decentralized finance
        </PageHeaderHeading>
        <PageHeaderDescription className="mx-auto">
          Join the global community of builders and incubators of cutting edge
          DeFi protocols.
        </PageHeaderDescription>
        <div className="flex w-full items-center justify-center space-x-4 pb-8 pt-4 md:pb-10">
          <Button asChild>
            <Link href={siteConfig.socials.discord}>
              <Icons.discord className="w-4 h-4 mr-2" />
              Join the Community
            </Link>
          </Button>
          <YoutubeModal />
        </div>
        <EcosystemTvl />
      </PageHeader>

      <div className="pt-16">
        <span className="text-muted-foreground text-sm md:text-base">
          Building on top of giants.. not to extract, but to add Value
        </span>

        <div className="grid grid-cols-6 gap-8 lg:gap-12 mx-auto max-w-md lg:max-w-xl py-8">
          {partnerLogos.map((logo) => (
            <Image
              className="aspect-square"
              key={logo.title}
              src={logo.image}
              width={64}
              height={64}
              alt={`${logo.title} logo`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
