import { RelatedPostCard } from "./related-post-card";

type Post = {
  _id: string;
  title: string;
  slug: string;
  main_image: string;
  publishedAt: string;
};

export const RelatedPosts = ({ r_posts }: { r_posts: Post[] }) => {
  return (
    <div className="space-y-4">
      {r_posts.map(p => (
        <RelatedPostCard
          key={p._id}
          title={p.title}
          slug={p.slug}
          main_image={p.main_image}
          publishedAt={p.publishedAt}
        />
      ))}
    </div>
  );
};
