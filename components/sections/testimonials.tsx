import { SectionHeader } from "../section-header";
import { Tweet } from "../tweet";

export const TestimonialsSection = () => {
  return (
    <div className="py-12">
      <div className="container">
        <SectionHeader
          preHeader="Loved &"
          header="Trusted by DeFi veterans"
          subheader="Don't take it from us – here's what they have to say"
        />
        <div className="py-20 max-w-3xl mx-auto">
          <div className="columns-1 gap-4 sm:columns-2 md:columns-3 text-sm">
            <Tweet id="1735294726222336045" />
            <Tweet id="1721644032852435409" />
            <Tweet id="1735362750979698810" />
            <Tweet id="1735362750979698810" />
            <Tweet id="1730408679638257740" />
            <Tweet id="1735362750979698810" />
            <Tweet id="1735195720397836391" />
          </div>
        </div>
      </div>
    </div>
  );
};
