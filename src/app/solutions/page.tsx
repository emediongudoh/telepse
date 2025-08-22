import { ClientLogos } from "@/components/client-logos";
import { CaseStudiesPreview } from "@/components/services/case-studies-preview";
import { ServicesPageBlock } from "@/components/services/services-page-block";
import { SolutionSection } from "@/components/solutions/solution-section";
import { SolutionsBanner } from "@/components/solutions/solutions-banner";
import { WhatWeDo } from "@/components/solutions/what-we-do";
import { getSolutionCaseStudies } from "@/lib/case-studies";

export default async function SolutionsPage() {
  const caseStudies = await getSolutionCaseStudies();

  return (
    <section className="flex flex-col gap-8">
      <SolutionsBanner />

      <WhatWeDo />

      <SolutionSection
        bgColor="#FEE600"
        fill="#FFF"
        title="Business to Business Marketing"
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Social Media Marketing",
          "Linkedin marketing",
          "Content Marketing",
          "SEO",
          "Search ads",
          "Meta & Instagram leads ad",
          "Email Marketing",
          "Web traffic & Optimization",
        ]}
        id="marketing_strategy"
        btnText="Book session now"
      >
        Turn opportunities to clients by building a quality relationship. <br />{" "}
        Just like recipe, we combine a proven strategy to achieve your marketing
        goals.
      </SolutionSection>

      <SolutionSection
        bgColor="#FFF"
        fill="#FEE600"
        title="Business to Customer Marketing"
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Social Media Marketing ",
          "Youtube Ads",
          "Twitter Ads",
          "Meta & Instagram Ads",
          "Shopping Ads / Banner Ads",
          "Web / Store traffic",
        ]}
        id="content_design"
        btnText="Book session now"
      >
        Sales are surely tasty. Serve your products across multiple marketing
        channels. Let&apos;s develop a framework, tailor made for you.
      </SolutionSection>

      <SolutionSection
        bgColor="#FEE600"
        fill="#FFF"
        title="Online advertising"
        imageSrc="/service_images/32716.jpg"
        listItems={[
          "Marketing strategy session",
          "Budget and timeline",
          "Perfomance indicator",
        ]}
        id="marketing_strategy"
        btnText="Book session now"
      >
        Got an online advert campaign coming up? <br /> Turn up the heat with
        us.
      </SolutionSection>

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
