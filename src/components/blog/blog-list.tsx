import { BlogCard } from "../home/blog-card";

interface BlogListProps {
  posts: {
    slug: string;
    mainImage: {
      asset: {
        url: string;
      };
    };
    categories: [{ title: string }];
    title: string;
    author: {
      name: string;
    };
    _createdAt: string;
  }[];
}

export const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 sm:py-16 md:grid-cols-2">
      {posts.map(item => (
        <BlogCard
          key={item.slug}
          preview={item.mainImage.asset.url}
          category={item.categories[0].title}
          title={item.title}
          slug={item.slug}
          // content={item.body}
          author={item.author.name}
          publishedDate={item._createdAt}
        />
      ))}
    </div>
  );
};
