import { SectionHeader } from "@/components/section-header";
import { AladdinHeaderSection } from "@/components/sections/aladdin-header";
import { AuditsSection } from "@/components/sections/audits";
import { CommunitySection } from "@/components/sections/community";
import { ProductsSection } from "@/components/sections/products";
import { StatisticsSection } from "@/components/sections/statistics";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { Card } from "@/components/ui/card";
import Image from "next/image";

import Balance from "react-wrap-balancer";

export default function Home() {
  return (
    <div className="relative pb-12 lg:pb-24">
      <AladdinHeaderSection />
      <div className="container max-w-6xl pb-24">
        <SectionHeader
          header=""
          subheader="Building on top of giants.. not to extract, but to add Value"
        />
        <div className="flex justify-center gap-12 py-12">
          <Image
            src="/images/partner-logos/curve-logo.png"
            width={64}
            height={64}
            alt="Curve logo"
          />
          <Image
            src="/images/partner-logos/convex-logo.png"
            width={64}
            height={64}
            alt="Convex logo"
          />
          <Image
            src="/images/partner-logos/frax-logo.png"
            width={64}
            height={64}
            alt="Frax logo"
          />
          <Image
            src="/images/partner-logos/lido-logo.png"
            width={64}
            height={64}
            alt="Lido logo"
          />
          <Image
            src="/images/partner-logos/ethereum-logo.png"
            width={64}
            height={64}
            alt="Ethereum logo"
          />
          <Image
            src="/images/partner-logos/liquity-logo.png"
            width={64}
            height={64}
            alt="Liquity logo"
          />
        </div>
        <div className="text-center grid grid-cols-3 gap-12 py-12">
          <div>
            <Balance
              as="h3"
              className="pb-6 w-3/4 font-semibold text-2xl leading-tight tracking-tighter"
            >
              Auto Compound Governance Tokens
            </Balance>
            <div className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            </div>
          </div>
          <div>
            <Balance
              as="h3"
              className="pb-6 w-3/4 font-semibold text-2xl leading-tight tracking-tighter"
            >
              Access your future yields now
            </Balance>
            <div className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
              veniam officia expedita velit, exercitationem cupiditate porro
            </div>
          </div>
          <div>
            <Balance
              as="h3"
              className="pb-6 w-3/4 font-semibold text-2xl leading-tight tracking-tighter"
            >
              Plan and Grow sustainably
            </Balance>
            <div className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            </div>
          </div>
        </div>
      </div>

      <ProductsSection />
      <AuditsSection />
      <TestimonialsSection />
      <CommunitySection />
    </div>
  );
}
