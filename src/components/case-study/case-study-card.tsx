"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Local imports
import { urlFor } from "@/lib/sanity";
import { Title } from "../title";
import { Paragraph } from "../paragraph";

interface CaseStudyCardProps {
  main_image: string;
  client: string;
  slug: string;
  who_is: string;
}

export const CaseStudyCard = ({
  main_image,
  client,
  slug,
  who_is,
}: CaseStudyCardProps) => {
  const pathname = usePathname();

  const hideDescription =
    pathname.includes("services") || pathname.includes("solutions");

  return (
    <Link
      href={`/case-study/${slug}`}
      className="bg-secondary-gray flex transform flex-col gap-1 transition duration-300 hover:scale-105"
    >
      <Image
        src={urlFor(main_image).width(800).height(600).url()}
        alt={client}
        width={500}
        height={500}
        className="h-60 w-full object-cover"
      />

      <div className="flex flex-col gap-1 p-4">
        <Title size="sm">{client}</Title>

        {!hideDescription && (
          <Paragraph>
            <p
              className="text-lg leading-loose"
              dangerouslySetInnerHTML={{ __html: who_is }}
            />
          </Paragraph>
        )}
      </div>
    </Link>
  );
};
