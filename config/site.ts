import aladdinLogo from "../public/images/logos/aladdin-dao.svg";
import cleverLogo from "../public/images/logos/clever.svg";
import concentratorLogo from "../public/images/logos/concentrator.svg";
import fxLogo from "../public/images/logos/fx-protocol.svg";

const products = {
  aladdinV2: "https://app.aladdin.club/",
  concentrator: "https://concentrator.aladdin.club/",
  clever: "https://clever.aladdin.club/",
  fxProtocol: "https://fx.aladdin.club/",
  bridge: "https://bridge.aladdin.club/",
};

const socials = {
  twitter: "https://twitter.com/aladdindao",
  github: "https://github.com/AladdinDAO/",
  medium: "https://aladdindao.medium.com/",
  telegram: "https://t.me/aladdin_dao",
  discord: "https://discord.gg/JbZqMPCQps",
  youtube: "https://www.youtube.com/@aladdindao596",
};

const links = {
  app: "https://app.aladdin.club/#/home",
  forum: "https://forum.aladdin.club/",
  docs: "https://docs.aladdin.club/",
  governance: "https://vote.aladdin.club/#/",
  bugBounty: "https://docs.aladdin.club/security-bounty",
  auditReports:
    "https://github.com/AladdinDAO/aladdin-v3-contracts/tree/main/audit-reports",
  branding: "https://github.com/AladdinDAO/aladdin-assets",
};

const buildSiteConfig = (config: any) => ({
  name: "Aladdin DAO",
  logo: aladdinLogo,
  url: "https://aladdin.club",
  description: "Building The Future Of Decentralized Finance.",
  ogImage:
    "https://pbs.twimg.com/media/FGpFqJ-VEAQShSW?format=jpg&name=900x900",
  ...config,
  socials: { ...socials, ...(config.socials || {}) },
  links: { ...links, ...(config.links || {}) },
  products,
});

export const aladdinV2Config = buildSiteConfig({});

export const concentratorConfig = buildSiteConfig({
  name: "Concentrator",
  logo: concentratorLogo,
  url: "https://aladdin.club/concentrator",
  description: "",
  ogImage: "",
  socials: { ...socials, twitter: "https://twitter.com/0xconcentrator" },
  links: {
    ...links,
    app: "https://concentrator.aladdin.club/",
    docs: "https://docs.aladdin.club/concentrator",
    governance: "https://snapshot.org/#/concentratordao.eth",
  },
});

export const cleverConfig = buildSiteConfig({
  name: "CLever",
  logo: cleverLogo,
  url: "https://aladdin.club/clever",
  description: "",
  ogImage: "",
  socials: { ...socials, twitter: "https://twitter.com/0xc_lever" },
  links: {
    ...links,
    app: "https://clever.aladdin.club/clever/",
    docs: "https://docs.aladdin.club/clever",
    governance: "https://snapshot.org/#/veclev.eth",
  },
});

export const fxConfig = buildSiteConfig({
  name: "F(x) Protocol",
  logo: fxLogo,
  url: "https://aladdin.club/fx-protocol",
  description: "",
  ogImage: "",
  socials: { ...socials, twitter: "https://twitter.com/protocol_fx" },
  links: {
    ...links,
    app: "https://fx.aladdin.club/",
    docs: "https://docs.aladdin.club/f-x-protocol",
    governance: "https://snapshot.org/#/fxn.eth",
  },
});

export const siteConfig = aladdinV2Config;

export type SiteConfig = ReturnType<typeof buildSiteConfig>;
