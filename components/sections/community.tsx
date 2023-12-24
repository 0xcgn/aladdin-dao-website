"use client";

import Link from "next/link";
import { SectionHeader } from "../section-header";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Icons } from "../icons";
import { ExternalLink, MessagesSquare } from "lucide-react";
import { Section } from "../section";
import { useProduct } from "@/hooks/useSiteConfig";

interface CommunityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const CommunityCard = ({
  title,
  description,
  icon,
  href,
}: CommunityCardProps) => (
  <Link
    className="w-full sm:w-1/2 lg:w-1/3 grow-0 shrink-0 p-2"
    target="_blank"
    href={href}
  >
    <Card className="text-left h-full">
      <CardHeader>
        <h4 className="flex items-center font-bold">
          {icon}
          <small>{title}</small>
          <ExternalLink className="w-4 h-4 ml-2" />
        </h4>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  </Link>
);

export const CommunitySection = () => {
  const product = useProduct();

  return (
    <Section>
      <SectionHeader
        preHeader="governed by the"
        header="Community"
        subheader="
            get involved in our community. everyone is welcome!
          "
      />

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center">
        <CommunityCard
          title="(formerly Twitter)"
          description="Get the latest announcements, information and memes"
          icon={<Icons.twitter className="w-4 h-4 mr-3" />}
          href={product.socials.twitter}
        />

        <CommunityCard
          title="Forum"
          description="Discuss the future of DAO with community members"
          icon={<MessagesSquare className="w-6 h-6 mr-3" />}
          href={product.links.forum}
        />

        <CommunityCard
          title="Discord"
          description="Get involved in the community by asking questions"
          icon={<Icons.discord className="w-6 h-6 mr-3" />}
          href={product.socials.discord}
        />
      </div>
    </Section>
  );
};
