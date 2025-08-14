import Image from "next/image";
import Link from "next/link";

// Third-party imports
import moment from "moment";

interface BlogCardProps {
  preview: string;
  category: string;
  title: string;
  slug: string;
  content?: string;
  author: string;
  publishedDate: string;
}

export const BlogCard = ({
  preview,
  category,
  title,
  slug,
  content,
  author,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border p-4 shadow">
      <div className="flex flex-wrap gap-4">
        <div className="relative">
          <Image
            src={preview}
            alt={title}
            width={384}
            height={288}
            className="h-48 w-60 object-cover sm:h-60"
          />
          <span className="absolute top-4 left-4 bg-[#F5B341] px-2 py-1">
            {category}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4 sm:gap-8">
          <p className="text-muted-foreground">
            {moment(publishedDate).format("DD MMM, YYYY")}
          </p>
          <Link
            href={`/blog/${slug}`}
            className="hover:underline"
          >
            <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
          </Link>

          <p className="text-muted-foreground relative h-fit w-fit">
            By {author}{" "}
            <span className="absolute -top-2 -right-2 -left-0 h-1 w-8 origin-left rounded-full bg-[#F5B341]"></span>
          </p>
        </div>
      </div>

      <p className="hidden p-4 text-lg leading-loose sm:block">{content}</p>
    </div>
  );
};
