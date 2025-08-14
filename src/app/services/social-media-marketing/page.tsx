import { TestimonialSlider } from "@/components/home/testimonial-slider";
import { CaseStudiesPreview } from "@/components/services/case-studies-preview";
import { OurSolutions } from "@/components/services/our-solutions";
import { SocialBanner } from "@/components/services/social-banner";
import { getContentMarketingCaseStudies } from "@/lib/case-studies";
import { Faq } from "@/components/solutions/faq";
import { ServicesPageBlock } from "@/components/services/services-page-block";

export default async function ContentMarketingPage() {
  const caseStudies = await getContentMarketingCaseStudies();

  return (
    <>
      <SocialBanner title="Social media marketing" />

      <OurSolutions />

      <CaseStudiesPreview caseStudies={caseStudies} />

      <TestimonialSlider />

      <Faq />

      <ServicesPageBlock
        title="Identify your marketing needs today"
        subtitle="Chat with Vivian, our dedicated bot"
        btnText="Let's talk"
      />
    </>
  );
}
