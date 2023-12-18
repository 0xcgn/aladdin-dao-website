import { AladdinHeaderSection } from "@/components/sections/aladdin-header";
import { AuditsSection } from "@/components/sections/audits";
import { CommunitySection } from "@/components/sections/community";
import { ProductsSection } from "@/components/sections/products";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="relative pb-12 lg:pb-24">
      <AladdinHeaderSection />
      <ProductsSection />
      <AuditsSection />
      <TestimonialsSection />
      <CommunitySection />
    </div>
  );
}
