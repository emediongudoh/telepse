import { AllBlogList } from "@/components/blog/all-blog-list";
import { HeroBanner } from "@/components/hero-banner";
import { getPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="flex flex-col gap-8">
      <HeroBanner
        image="/Telepse_digital_marketing_agency_lagos_nigeria_tech_banner.jpg"
        title="Blog list"
      />

      <AllBlogList posts={posts} />
    </section>
  );
}
