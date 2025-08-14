import { CaseStudiesPreview } from "@/components/services/case-studies-preview";
import { ContentBanner } from "@/components/services/content-banner";
import { getContentMarketingCaseStudies } from "@/lib/case-studies";
import { ClientLogos } from "@/components/client-logos";
import { clientLogos } from "@/constants";
import { Offer } from "@/components/offer";
import { ServicesPageBlock } from "@/components/services/services-page-block";
import { ContentCTA } from "@/components/services/content-cta";
import { ContentSection } from "@/components/services/content-section";

export default async function DigitalTechnologyPage() {
  const caseStudies = await getContentMarketingCaseStudies();

  return (
    <>
      <ContentBanner title="Digital technology" />

      <ContentCTA />

      <ContentSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Analytics intelligence"
        description="Collecting your big data as secured assets and extracting intellignece to meet the business needs."
        imageSrc="/service_images/32716.jpg"
        listItems={["Google analytics", "SOL analytics", "Excel reporting"]}
        imagePosition="middle"
      />
      <ContentSection
        bgColor="#FEE600"
        fill="#FFF"
        title="Digital transformation"
        description="Placing the people at the fore front. Assisting businesses in their digital transition efforts. Reach your full potential with a digital technology transformation checklist."
        imageSrc="/service_images/32716.jpg"
        imagePosition="left"
      />
      <ContentSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Media monitoring"
        description="Monitor conversations across social media and web  relating to your brand and competitors. Set custom alerts, analyze sentiments and generate weekly reports. Apt way to manage the brand reputation. Making this possible with you."
        imageSrc="/service_images/32716.jpg"
        imagePosition="middle"
      />
      <ContentSection
        bgColor="#FEE600"
        fill="#FFF"
        title="Google Ads Campaign"
        description="Meet your customers at their preffered digital channels. Unleash the power of remarketing! Over 500% increase in customer acquisition rate."
        imageSrc="/service_images/32716.jpg"
        listItems={["Search Ads", "Display Ads", "YouTube Ads", "Shopping Ads"]}
        imagePosition="left"
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
