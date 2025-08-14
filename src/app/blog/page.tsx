import { BlogList } from "@/components/blog/blog-list";
// import { PageBanner } from "@/components/page-banner";
import { getPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* <PageBanner
        title="Blog"
        subtitle="At Telepse, we share real-world insights, case studies, and
          forward-thinking approaches to help entrepreneurs, consultants, and
          marketers unlock new levels of growth and brand visibility."
      /> */}
      <BlogList posts={posts} />
    </>
  );
}
