import { TestimonialSlider } from "@/components/home/testimonial-slider";
import { CaseStudiesPreview } from "@/components/services/case-studies-preview";
import { OurPackage } from "@/components/services/our-package";
import { SocialBanner } from "@/components/services/social-banner";
import { getSocialMediaMarketingCaseStudies } from "@/lib/case-studies";
import { FAQs } from "@/components/solutions/faq";
import { SocialStory } from "@/components/services/social-story";
import { PricingGrid } from "@/components/services/pricing-grid";
import { PricingSection } from "@/components/services/pricing-section";

export default async function SocialMediaMarketingPage() {
  const caseStudies = await getSocialMediaMarketingCaseStudies();

  return (
    <section className="flex flex-col gap-8">
      <SocialBanner />

      <SocialStory />

      <OurPackage />

      <PricingGrid />

      <CaseStudiesPreview caseStudies={caseStudies} />

      <TestimonialSlider />

      <div>
        <FAQs />

        <PricingSection />
      </div>
    </section>
  );
}
