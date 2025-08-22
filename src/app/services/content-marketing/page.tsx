import { CaseStudiesPreview } from "@/components/services/case-studies-preview";
import { ServiceBanner } from "@/components/services/service-banner";
import { getContentMarketingCaseStudies } from "@/lib/case-studies";
import { ClientLogos } from "@/components/client-logos";
import { Offer } from "@/components/offer";
import { ServicesPageBlock } from "@/components/services/services-page-block";
import { ServiceCTA } from "@/components/services/service-cta";
import { ServiceSection } from "@/components/services/service-section";
import { CONTENT_MARKETING_ICONS } from "@/constants";

export default async function ContentMarketingPage() {
  const caseStudies = await getContentMarketingCaseStudies();

  return (
    <section className="flex flex-col gap-8">
      <ServiceBanner
        title="Content marketing"
        icons={CONTENT_MARKETING_ICONS}
      />

      <ServiceCTA
        caption1="Creative"
        caption2="Magnetic"
        btnText="Start"
      >
        Win with content
      </ServiceCTA>

      <ServiceSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Brand message"
        description="Putting your ideal customer first. Defining the experience with you. Getting it right from the onset "
        imageSrc="/service_images/32716.jpg"
        listItems={["Buyer persona", "Brand manual kit", "Corporate identity"]}
        imagePosition="middle"
        id="brand_message"
        btnText="Get started"
      />
      <ServiceSection
        bgColor="#FEE600"
        fill="#FFF"
        title="Marketing strategy"
        description="Connect your ideas to success with the right content, right platform to get amazing results. But how?"
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Marketing strategy session",
          "Budget and timeline",
          "Perfomance indicator",
        ]}
        imagePosition="left"
        id="marketing_strategy"
        btnText="Get started"
      />
      <ServiceSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Content design"
        description="Creative impressions that convert. Just like magic. "
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Social and general graphics",
          "eBook and brochure",
          "Copywrite",
        ]}
        imagePosition="middle"
        id="content_design"
        btnText="Get started"
      />

      <CaseStudiesPreview caseStudies={caseStudies} />

      <ClientLogos />

      <Offer />

      <ServicesPageBlock
        title="Identify your marketing needs"
        subtitle="Chat with Vivian today, our dedicated chatbot"
        btnText="Chat now"
      />
    </section>
  );
}
