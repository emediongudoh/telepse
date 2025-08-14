import Link from "next/link";

// Third-party imports
import { ArrowRight } from "lucide-react";

// Local imports
import { blogPreviews } from "@/constants";
import { BlogCard } from "./blog-card";
import { SvgPattern } from "../svg-pattern";
import { BigTitle } from "../big-title";

export const LatestBlog = () => {
  return (
    <section className="section p-0 md:gap-0">
      <SvgPattern fill="#FEE600" />

      <div className="wrapper section">
        <div className="flex items-center justify-between">
          <BigTitle title="Recent blog" />

          <Link
            href="/blog"
            className="flex items-center gap-2 text-lg"
          >
            View more
            <ArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogPreviews.map((item, index) => (
            <BlogCard
              key={index}
              preview={item.preview}
              category={item.category}
              title={item.title}
              slug={item.slug}
              content={item.content}
              author={item.author}
              publishedDate={item.publishedDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
