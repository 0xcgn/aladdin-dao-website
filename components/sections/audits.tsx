import Image from "next/image";
import { SectionHeader } from "../section-header";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const AuditFirmLogo = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    objectFit="cover"
    width={580}
    height={120}
    className="h-auto w-full max-w-[200px] mx-auto px-4"
    src={src}
    alt={alt}
  />
);

export const AuditsSection = () => {
  return (
    <div className="bg-slate-900 pt-20 pb-16 text-center md:text-right">
      <div className="container">
        <div className="flex flex-col md:flex-row-reverse ">
          <div className="w-full md:w-2/4 lg:3/12 xl:w-4/12 flex flex-col items-center md:items-end">
            <SectionHeader
              className="w-full text-secondary dark:text-primary md:text-right max-w-sm"
              preHeader="Designed from the ground up with security in mind"
              header="Audited and Verified"
              subheader="by the leading 3rd party security firms."
            />
            <p className="mt-8 mb-6 text-secondary dark:text-primary max-w-md">
              We know the importance of security, especially for new lending
              protocols. Read our audit reports or work with us as we expand our
              third party security efforts.
            </p>
            <Button className="mx-auto md:ml-auto md:mr-0" asChild>
              <Link href={siteConfig.links.auditReports} target="__blank">
                Audit reports
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="w-full md:w-2/4 lg:w-5/12 xl:w-8/12 flex flex-wrap py-8 justify-center items-center">
            <AuditFirmLogo
              src="/images/auditors/certik.png"
              alt="Certik Logo"
            />
            <AuditFirmLogo
              src="/images/auditors/peckshield.png"
              alt="PeckShield Logo"
            />
            <AuditFirmLogo
              src="/images/auditors/secbit.jpg"
              alt="SecBit Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
