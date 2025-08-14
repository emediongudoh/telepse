import { ServiceBanner } from "@/components/service-banner";
import { SmallTitle } from "@/components/small-title";
import { SolutionsContent } from "@/components/solutions/solutions-content";

export default function SolutionsPage() {
  return (
    <>
      <ServiceBanner
        image="/service_images/b2b-business-business-corporate-connection-partnership-concept.jpg"
        title="Solutions"
      />

      <div className="wrapper section">
        <SmallTitle title="Marketing is like preparing a nice meal. Attract your targeted audience. Satisfy an appetite that craves for more." />

        <SolutionsContent />
      </div>
    </>
  );
}
