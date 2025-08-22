import { Banner } from "@/components/home/banner";
import { Break } from "@/components/break";
import { ClientLogos } from "@/components/client-logos";
import { IndustriesServed } from "@/components/home/industries-served";
import { LatestBlog } from "@/components/home/latest_blog";
import { OurServices } from "@/components/home/our-services";
import { SolutionsPitch } from "@/components/home/solutions-pitch";
import { TestimonialSlider } from "@/components/home/testimonial-slider";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <section className="flex flex-col gap-8">
      <Banner />
      <ClientLogos />
      <Break />
      <OurServices />
      <IndustriesServed />
      <WhyChooseUs />
      <TestimonialSlider />
      <SolutionsPitch />
      <LatestBlog posts={posts} />
    </section>
  );
}
