import Link from "next/link";
import { SectionHeader } from "../section-header";
import { siteConfig } from "@/config/site";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Icons } from "../icons";
import { ExternalLink, MessagesSquare } from "lucide-react";

export const CommunitySection = () => {
  return (
    <div className="container">
      <SectionHeader
        preHeader="governed by the"
        header="Community"
        subheader="
            get involved in our community. everyone is welcome!
          "
      />

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center mt-10">
        <Link
          className="w-full sm:w-1/2 lg:w-1/3 grow-0 shrink-0 p-2"
          href={siteConfig.socials.twitter}
        >
          <Card className="text-left h-full">
            <CardHeader>
              <h4 className="flex items-center font-bold">
                <Icons.twitter className="w-4 h-4 mr-3" />
                <small>(formerly Twitter)</small>
                <ExternalLink className="w-4 h-4 ml-2" />
              </h4>
            </CardHeader>
            <CardContent>
              <p>Get the latest announcements, information and memes</p>
            </CardContent>
          </Card>
        </Link>
        <Link
          className="w-full sm:w-1/2 lg:w-1/3 grow-0 shrink-0 p-2"
          href={siteConfig.links.forum}
        >
          <Card className="text-left h-full">
            <CardHeader>
              <h4 className="flex items-center font-bold text-md">
                <MessagesSquare className="w-6 h-6 mr-3" />
                <small>Forum</small>
                <ExternalLink className="w-4 h-4 ml-2" />
              </h4>
            </CardHeader>
            <CardContent>
              <p>Discuss the future of DAO with community members</p>
            </CardContent>
          </Card>
        </Link>
        <Link
          className="w-full sm:w-1/2 lg:w-1/3 grow-0 shrink-0 p-2"
          href={siteConfig.socials.discord}
        >
          <Card className="text-left h-full">
            <CardHeader>
              <h4 className="flex items-center font-bold text-md">
                <Icons.discord className="w-6 h-6 mr-3" />
                <small>Discord</small>
                <ExternalLink className="w-4 h-4 ml-2" />
              </h4>
            </CardHeader>
            <CardContent>
              <p>Get involved in the community by asking questions</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};
