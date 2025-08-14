import { CaseStudiesPreview } from "@/components/services/case-studies-preview";
import { ContentBanner } from "@/components/services/content-banner";
import { getContentMarketingCaseStudies } from "@/lib/case-studies";
import { ClientLogos } from "@/components/client-logos";
import { clientLogos } from "@/constants";
import { Offer } from "@/components/offer";
import { ServicesPageBlock } from "@/components/services/services-page-block";
import { ContentCTA } from "@/components/services/content-cta";
import { ContentSection } from "@/components/services/content-section";

export default async function ContentMarketingPage() {
  const caseStudies = await getContentMarketingCaseStudies();

  return (
    <>
      <ContentBanner title="Content marketing" />

      <ContentCTA />

      <ContentSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Brand Communication"
        description="Putting your ideal customer first. Defining the experience with you. Getting it right from the onset "
        imageSrc="/service_images/32716.jpg"
        listItems={["Buyer Persona", "Brand Manual kit", "Corporate Identity"]}
        imagePosition="middle"
      />
      <ContentSection
        bgColor="#FEE600"
        fill="#FFF"
        title="Strategy"
        description="Connect your ideas to success, right content, right platform, amazing results. But how?"
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Marketing Strategy session",
          "Budget & Timeline",
          "Perfomance Indicator",
        ]}
        imagePosition="left"
      />
      <ContentSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Design"
        description="Creative impressions that convert. Just like magic. "
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Social & General Graphics",
          "eBook & Brochure",
          "Copywrite",
        ]}
        imagePosition="middle"
      />

      <CaseStudiesPreview caseStudies={caseStudies} />

      <ClientLogos logos={clientLogos} />

      <Offer />

      <ServicesPageBlock
        title="Identify your marketing needs today"
        subtitle="Chat with Vivian, our dedicated bot"
        btnText="Let's talk"
      />
    </>
  );
}
