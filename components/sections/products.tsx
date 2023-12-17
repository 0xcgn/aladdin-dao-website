import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "../section-header";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  appLink: string;
  docsLink: string;
  image: string;
}

const ProductCard = ({
  title,
  description,
  appLink,
  docsLink,
  image,
}: ProductCardProps) => (
  <Card className="flex flex-col text-center">
    <CardHeader>
      <Image
        className="mx-auto"
        src={image}
        width={64}
        height={64}
        alt={`${title} logo`}
      />
      <h3 className="font-bold py-2">{title}</h3>
    </CardHeader>
    <CardContent className="grow">{description}</CardContent>
    <CardFooter className="justify-center gap-2">
      <Button asChild size="sm" variant="outline">
        <Link href={docsLink} target="_blank">
          <ExternalLink className="w-4 h-4 mr-2" />
          Learn More
        </Link>
      </Button>
      <Button asChild size="sm">
        <Link href={appLink}>Enter App</Link>
      </Button>
    </CardFooter>
  </Card>
);

export const ProductsSection = () => {
  return (
    <div className="container flex flex-col py-12 pb-24">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SectionHeader
          className="sm:text-left justify-center p-6"
          preHeader="To date Aladdin has built three"
          header="Ecosystem Products"
          subheader=" Each protocol offers powerful new tools for DeFi users and adds new, composable DeFi money lego."
        />
        <ProductCard
          title="Concentrator"
          description="Concentrator is a yield enhancer that boosts yields on Convex vaults by concentrating all rewards into auto-compounding top-tier tokens."
          appLink="https://concentrator.aladdin.club/"
          docsLink="https://docs.aladdin.club/concentrator"
          image="/images/concentrator-logo.webp"
        />

        <ProductCard
          title="Clever"
          description="Deposit top quality tokens to CLever in high-yielding collateral strategies, and claim your future yields today. They can be farmed, re-deposited, or used wherever you need them."
          appLink="https://clever.aladdin.club/clever/"
          docsLink="https://docs.aladdin.club/clever"
          image="/images/clever-logo.webp"
        />

        <ProductCard
          title="f(x) Protocol"
          description="Create one of 2 derivatives for your Token: a stable token (fToken) and a volatile token (xToken). Lend, borrow, farm and trade your fToken or speculate on the future with your xToken."
          appLink="https://fx.aladdin.club/"
          docsLink="https://docs.aladdin.club/f-x-protocol"
          image="/images/fx-protocol-logo.webp"
        />
      </div>
    </div>
  );
};
