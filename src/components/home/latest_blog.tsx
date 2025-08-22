import Link from "next/link";

// Third-party imports
import { ArrowRight } from "lucide-react";

// Local imports
import { Title } from "../title";
import { BlogCard } from "../blog/blog-card";

type Post = {
  _id: string;
  title: string;
  slug: string;
  main_image: string;
  preview: string;
  author?: { name: string };
  categories?: { title: string }[];
  publishedAt: string;
};

export const LatestBlog = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="wrapper section">
      <div className="flex items-center justify-between">
        <Title
          size="lg"
          weight="normal"
        >
          Recent blog
        </Title>

        <Link
          href="/blog"
          className="flex items-center gap-2 text-lg hover:underline"
        >
          View more
          <ArrowRight />
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {posts.slice(0, 2).map(item => (
          <BlogCard
            key={item._id}
            title={item.title}
            slug={item.slug}
            main_image={item.main_image}
            preview={item.preview}
            author={item.author}
            category={item.categories?.map(c => c.title).join(", ")}
            publishedDate={item.publishedAt}
          />
        ))}
      </div>
    </section>
  );
};
