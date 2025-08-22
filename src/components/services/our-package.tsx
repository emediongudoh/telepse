import { SlickTitle } from "../slick-title";
import { PackageCard } from "./package-card";

export const OurPackage = () => {
  return (
    <section className="section mx-auto max-w-3xl">
      <SlickTitle title="Our package" />

      <div className="flex flex-col gap-8">
        <PackageCard
          contentBg="#F5B341"
          imageSrc="/service_icons/Telepse_digital_marketing_agency_lagos_nigeria_content_plan.png"
          title="Content Plan & Strategy"
          description="Engage customers effortlessly with strategically curated contents. Take control of your audience. We have a plan for you."
        />

        <PackageCard
          contentBg="#000"
          imageSrc="/service_icons/Telepse_digital_marketing_agency_lagos_nigeria_design.png"
          title="Design"
          description="Tell your brand story with consistent creativity. Visually appealing designs that prompt action."
        />

        <PackageCard
          contentBg="#F5B341"
          imageSrc="/service_icons/Telepse_digital_marketing_agency_lagos_nigeria_content_management.png"
          title="Content Management"
          description="Got the strategy and designs ready? Leave the rest to us. Let's manage your business pages and provide reports."
        />

        <PackageCard
          imageBg="#000"
          imageSrc="/service_icons/Telepse_digital_marketing_agency_lagos_nigeria_linkedin.png"
          title="LinkedIn Marketing"
          description="Focus on a business to business strategy deploying our  Linkedin Marketing plan "
          listItems={[
            "Business page management",
            "Business group management",
            "Sales navigator enablement",
            "Leads generation",
            "Bi-weekly newsletter",
          ]}
        />
      </div>
    </section>
  );
};
