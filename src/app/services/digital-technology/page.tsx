import { CaseStudiesPreview } from "@/components/services/case-studies-preview";
import { ServiceBanner } from "@/components/services/service-banner";
import { getDigitalTechnologyCaseStudies } from "@/lib/case-studies";
import { ClientLogos } from "@/components/client-logos";
import { DIGITAL_TECHNOLOGY_ICONS } from "@/constants";
import { ServicesPageBlock } from "@/components/services/services-page-block";
import { ServiceCTA } from "@/components/services/service-cta";
import { ServiceSection } from "@/components/services/service-section";

export default async function DigitalTechnologyPage() {
  const caseStudies = await getDigitalTechnologyCaseStudies();

  return (
    <section className="flex flex-col gap-8">
      <ServiceBanner
        title="Digital technology"
        icons={DIGITAL_TECHNOLOGY_ICONS}
      />

      <ServiceCTA
        caption1="Integrate tech in your business"
        btnText="Book session"
      >
        Get big <br /> on tech
      </ServiceCTA>

      <ServiceSection
        bgColor="#FEE600"
        fill="#FFF"
        title="Products requirement design"
        description="Developing an idea into a product or service could be painstaking. Document the requirements from start. Launch with precision and insights."
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Requirements gathering",
          "Product scope & dependencies",
          "Development requirements",
        ]}
        imagePosition="middle"
        id="prd"
        btnText="Book session now"
      />
      <ServiceSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Analytics intelligence"
        description="Collecting your unstructured data as secured assets and extracting intelligence to meet the business needs."
        imageSrc="/service_images/32716.jpg"
        listItems={["Google analytics", "SOL analytics", "Excel reporting"]}
        imagePosition="left"
        id="analytics_intelligence"
        btnText="Book session now"
      />
      <ServiceSection
        bgColor="#FEE600"
        fill="#FFF"
        title="Digital transform"
        description="Placing the customer at the fore front.  Reach your full potential with a digital technology transformation checklist."
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Data driven decisions",
          "Tech integrated system",
          "Marketing precision",
        ]}
        imagePosition="middle"
        id="digital_transform"
        btnText="Book session now"
      />

      <CaseStudiesPreview caseStudies={caseStudies} />

      <ClientLogos />

      <ServicesPageBlock
        title="Identify your marketing needs"
        subtitle="Chat with Vivian today, our dedicated chatbot"
        btnText="Chat now"
      />
    </section>
  );
}
