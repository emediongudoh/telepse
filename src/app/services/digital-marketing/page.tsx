import { CaseStudiesPreview } from "@/components/services/case-studies-preview";
import { ContentBanner } from "@/components/services/content-banner";
import { getContentMarketingCaseStudies } from "@/lib/case-studies";
import { ClientLogos } from "@/components/client-logos";
import { clientLogos } from "@/constants";
import { Offer } from "@/components/offer";
import { ServicesPageBlock } from "@/components/services/services-page-block";
import { ContentCTA } from "@/components/services/content-cta";
import { ContentSection } from "@/components/services/content-section";

export default async function DigitalMarketingPage() {
  const caseStudies = await getContentMarketingCaseStudies();

  return (
    <>
      <ContentBanner title="Digital marketing" />

      <ContentCTA />

      <ContentSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Email marketing"
        description="Close deals deploying emailing strategy. Reach prospects at every touchpoint that leads to sales."
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Mailing list building",
          "Customer lifecycle campaign",
          "Event campaign",
        ]}
        imagePosition="middle"
      />
      <ContentSection
        bgColor="#FEE600"
        fill="#FFF"
        title="Search engine optimization"
        description="Stay DiscoverABLE to clients on search engine. Dominate your industry keyword. Let's put in work."
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Mailing list building",
          "Customer lifecycle campaign",
          "Event campaign",
        ]}
        imagePosition="left"
      />
      <ContentSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Website Design & Conversion Optimization"
        description="Customer journey should be adventurous, aesthetic and converting. Keep track of every visitor to the website."
        imageSrc="/service_images/32716.jpg"
        listItems={["UI/UX consulting", "Google analytics reporting"]}
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
