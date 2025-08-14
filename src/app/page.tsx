import { Banner } from "@/components/home/banner";
import { Break } from "@/components/home/break";
import { ClientLogos } from "@/components/client-logos";
import { IndustriesServed } from "@/components/home/industries-served";
import { LatestBlog } from "@/components/home/latest_blog";
import { Offer } from "@/components/offer";
import { OurServices } from "@/components/home/our-services";
import { SolutionsPitch } from "@/components/home/solutions-pitch";
import { TestimonialSlider } from "@/components/home/testimonial-slider";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { clientLogos } from "@/constants";

export default function Home() {
  return (
    <>
      <Banner />
      <ClientLogos logos={clientLogos} />
      <Break />
      <OurServices />
      <IndustriesServed />
      <WhyChooseUs />
      <TestimonialSlider />
      <SolutionsPitch />
      <Offer />
      <div className="h-14 bg-[#FEE600]" />
      <LatestBlog />
    </>
  );
}
