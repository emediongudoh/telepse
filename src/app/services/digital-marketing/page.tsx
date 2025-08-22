import { CaseStudiesPreview } from "@/components/services/case-studies-preview";
import { ServiceBanner } from "@/components/services/service-banner";
import { getDigitalMarketingCaseStudies } from "@/lib/case-studies";
import { ClientLogos } from "@/components/client-logos";
import { DIGITAL_MARKETING_ICONS } from "@/constants";
import { Offer } from "@/components/offer";
import { ServicesPageBlock } from "@/components/services/services-page-block";
import { ServiceCTA } from "@/components/services/service-cta";
import { ServiceSection } from "@/components/services/service-section";

export default async function DigitalMarketingPage() {
  const caseStudies = await getDigitalMarketingCaseStudies();

  return (
    <section className="flex flex-col gap-16">
      <ServiceBanner
        title="Digital marketing"
        icons={DIGITAL_MARKETING_ICONS}
      />

      <ServiceCTA
        caption1="Activate a digital strategy"
        btnText="Activate"
      >
        Generate sales <br /> from anywhere
      </ServiceCTA>

      <ServiceSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Email marketing"
        description="Close deals deploying emailing strategy. Reach prospects at inbox touchpoints that lead to sales."
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Mailing list building",
          "Customer lifecycle campaign",
          "Event campaign",
        ]}
        imagePosition="middle"
        id="email_marketing"
        btnText="Activate now"
      />
      <ServiceSection
        bgColor="#FEE600"
        fill="#FFF"
        title="Search engine optimization"
        description="Stay discoverABLE to clients on search engine. Dominate your industry keyword. Let's put in work."
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Industry keyword research",
          "Website audit & recommendation",
          "Implementing On-Page, Off-Page & Technical SEO",
        ]}
        imagePosition="left"
        id="seo"
        btnText="Activate now"
      />
      <ServiceSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Website conversion optimization"
        description="Customer journey should be adventurous, aesthetic and converting. Keep track of every visitor to your website."
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "UI/UX consulting",
          "Google analytics reporting",
          "Webforms and landing page",
        ]}
        imagePosition="middle"
        id="web_conversion"
        btnText="Activate now"
      />
      <ServiceSection
        bgColor="#FEE600"
        fill="#FFF"
        title="Google Ads Campaign"
        description="Meet your customers at their preferred digital channels. Unleash the power of remarketing! Get over 500% increase in customer acquisition rate."
        imageSrc="/service_images/32716.jpg"
        listItems={["Search Ads", "Display Ads", "YouTube Ads", "Shopping Ads"]}
        imagePosition="left"
        id="google_ads"
        btnText="Activate now"
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
