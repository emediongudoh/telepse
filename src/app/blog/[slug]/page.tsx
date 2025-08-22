import Image from "next/image";

// Third-party imports
import { PortableText, PortableTextBlock } from "next-sanity";

// Local imports
import { getPost, getRelatedPosts } from "@/lib/posts";
import { urlFor } from "@/lib/sanity";
import { Title } from "@/components/title";
import { Paragraph } from "@/components/paragraph";
import { RelatedPosts } from "@/components/blog/related-posts";
import { SalesBlock } from "@/components/blog/sales-block";
import { SocialShare } from "@/components/blog/social-share";
import { BlogPageBlock } from "@/components/blog/blog-page-block";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

type CategoryObject = {
  title: string;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  const relatedPosts = await getRelatedPosts(
    slug,
    post.categories.map((cat: CategoryObject) => cat.title)
  );

  const { main_image, title, body } = post;

  // figure out where to inject (e.g. after 2nd block)
  const midPoint = Math.floor(body.length / 2);
  const firstHalf = body.slice(0, midPoint);
  const secondHalf = body.slice(midPoint);

  return (
    <section className="section wrapper grid grid-cols-12 gap-4 sm:gap-8">
      <div className="section col-span-full p-0 md:col-span-8">
        <Image
          src={urlFor(main_image).url()}
          alt={title}
          width={1000}
          height={1000}
          className="h-60 w-full rounded-2xl object-cover sm:h-96"
          priority
        />

        <Title
          // size="lg"
          weight="normal"
        >
          {title}
        </Title>

        <SocialShare title={title} />

        {/* First half of the blog */}
        <Paragraph size="lg">
          <PortableText value={firstHalf as PortableTextBlock[]} />
        </Paragraph>

        {/* Insert sales block here */}
        <div className="max-w-[350px]">
          <SalesBlock />
        </div>

        {/* Continue with the rest of the blog */}
        <Paragraph size="lg">
          <PortableText value={secondHalf as PortableTextBlock[]} />
        </Paragraph>

        <BlogPageBlock />
      </div>

      <div className="col-span-full space-y-6 md:col-span-4">
        <Paragraph
          size="sm"
          weight="bold"
          className="text-muted-foreground uppercase"
        >
          Related posts
        </Paragraph>

        <RelatedPosts r_posts={relatedPosts} />

        {/* Sales block */}
        <SalesBlock />
      </div>
    </section>
  );
}
