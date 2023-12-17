import Link from "next/link";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "../page-header";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { Info, Play } from "lucide-react";
import { siteConfig } from "@/config/site";
import { YoutubeModal } from "../youtube-modal";
import { EcosystemTvl } from "../ecosystem-tvl";

// https://api.llama.fi/tvl/clever
// https://api.llama.fi/tvl/concentrator
// https://api.llama.fi/tvl/fx-protocol
// https://api.llama.fi/tvl/aladdin-dao

export const AladdinHeaderSection = () => {
  return (
    <div className="h-5/6 flex pb-24 pt-24 dark:bg-sample">
      <div className="inner"></div>
      <div className="container text-center drop-shadow-sm">
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
      </div>
    </div>
  );
};
