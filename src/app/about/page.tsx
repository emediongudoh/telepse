// Local imports
import { Break } from "@/components/break";
import { VideoPlayer } from "@/components/about/video-player";
import { ServicesAcordium } from "@/components/about/services-acordium";
import { TopTeam } from "@/components/about/top-team";
import { AboutStory } from "@/components/about/about-story";
import { TestimonialSlider } from "@/components/home/testimonial-slider";
import { CompanyPageBlock } from "@/components/company/company-page-block";
import { PageBanner } from "@/components/page-banner";

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-8">
      <PageBanner title="About us" />

      <AboutStory />

      <Break />

      <VideoPlayer />

      <ServicesAcordium />

      <TestimonialSlider />

      <TopTeam />

      <CompanyPageBlock />
    </section>
  );
}
