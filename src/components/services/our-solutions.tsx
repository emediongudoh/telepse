import { SlickTitle } from "../slick-title";
import { SolutionsCard } from "../solutions/solutions-card";

export const OurSolutions = () => {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8 sm:py-16">
      <SlickTitle title="Our solutions" />

      <div className="flex flex-col gap-8">
        <SolutionsCard
          imageSrc="/service_icons/content.png"
          title="Content Plan & Strategy"
          description="Engage customers effortlessly with strategically curated contents. Take control of your audience. We have a plan for you."
        />

        <SolutionsCard
          imageSrc="/service_icons/web-design.png"
          title="Design"
          description="Tell your brand story with consistent creativity. Visually appealing designs that prompt action."
        />

        <SolutionsCard
          imageSrc="/service_icons/content-management.png"
          title="Management"
          description="Got the strategy and designs ready? Leave the rest to us. Let's manage your business pages and provide reports."
        />

        <SolutionsCard
          imageSrc="/service_icons/business.png"
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
