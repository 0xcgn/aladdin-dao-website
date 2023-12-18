export const siteConfig = {
  name: "Aladdin DAO",
  url: "https://aladdin.club",
  description: "Building The Future Of Decentralized Finance.",
  ogImage:
    "https://pbs.twimg.com/media/FGpFqJ-VEAQShSW?format=jpg&name=900x900",
  socials: {
    twitter: "https://twitter.com/aladdindao",
    github: "https://github.com/AladdinDAO/",
    medium: "https://aladdindao.medium.com/",
    telegram: "https://t.me/aladdin_dao",
    discord: "https://discord.gg/JbZqMPCQps",
    youtube: "https://www.youtube.com/@aladdindao596",
  },
  links: {
    app: "https://app.aladdin.club/#/home",
    forum: "https://forum.aladdin.club/",
    docs: "https://docs.aladdin.club/",
    governance: "https://vote.aladdin.club/#/",
    bugBounty: "https://docs.aladdin.club/security-bounty",
    auditReports:
      "https://github.com/AladdinDAO/aladdin-v3-contracts/tree/main/audit-reports",
  },
  products: {
    aladdinV2: "https://app.aladdin.club/",
    concentrator: "https://concentrator.aladdin.club/",
    clever: "https://clever.aladdin.club/",
    fxProtocol: "https://fx.aladdin.club/",
    bridge: "https://bridge.aladdin.club/",
  },
};

export type SiteConfig = typeof siteConfig;
