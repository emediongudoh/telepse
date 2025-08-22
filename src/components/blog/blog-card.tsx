import Image from "next/image";
import Link from "next/link";

// Third-party imports
import moment from "moment";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";
import { urlFor } from "@/lib/sanity";

interface BlogCardProps {
  title: string;
  slug: string;
  main_image: string;
  preview: string;
  author?: { name: string };
  category?: string;
  publishedDate: string;
}

export const BlogCard = ({
  title,
  slug,
  main_image,
  preview,
  author,
  category,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border p-4 shadow">
      <div className="flex flex-wrap gap-4">
        <div className="relative">
          <Image
            src={urlFor(main_image).width(200).height(200).url()}
            alt={title}
            width={200}
            height={200}
            className="h-48 w-60 object-cover sm:h-60"
          />
          <span className="bg-secondary-yellow absolute top-4 left-4 px-2 py-1">
            {category}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4 sm:gap-8">
          <Paragraph
            size="sm"
            color="muted"
          >
            {moment(publishedDate).format("DD MMM, YYYY")}
          </Paragraph>
          <Link
            href={`/blog/${slug}`}
            className="hover:underline"
          >
            <Title size="sm">{title}</Title>
          </Link>

          <Paragraph className="relative h-fit w-fit">
            By {author?.name}{" "}
            <span className="bg-secondary-yellow absolute -top-2 -right-2 -left-0 h-1 w-8 origin-left rounded-full"></span>
          </Paragraph>
        </div>
      </div>

      <Paragraph className="hidden p-4 sm:block">{preview}</Paragraph>
    </div>
  );
};
