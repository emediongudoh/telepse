import Image from "next/image";
import Link from "next/link";

// Third-party imports
import moment from "moment";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";
import { urlFor } from "@/lib/sanity";

type Post = {
  title: string;
  slug: string;
  main_image: string;
  publishedAt: string;
};

export const RelatedPostCard = ({
  title,
  slug,
  main_image,
  publishedAt,
}: Post) => {
  return (
    <div className="flex gap-1">
      <Image
        src={urlFor(main_image).width(500).height(500).url()}
        alt={title}
        width={500}
        height={500}
        className="size-24 rounded-md object-cover"
      />

      <div className="px-4">
        <Link
          href={`/blog/${slug}`}
          className="hover:underline"
        >
          <Title size="xs">{title}</Title>
        </Link>

        <Paragraph
          size="sm"
          className="text-muted-foreground"
        >
          {moment(publishedAt).format("DD MMM, YYYY")}
        </Paragraph>
      </div>
    </div>
  );
};
