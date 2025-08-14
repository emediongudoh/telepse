"use client";

import Image from "next/image";
import Link from "next/link";

// Local imports
import { urlFor } from "@/lib/sanity";
import { usePathname } from "next/navigation";

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

  const isServices = pathname.includes("services");

  return (
    <Link
      href={`/case-study/${slug}`}
      className="flex flex-col gap-1 bg-[#E6F0DD] transition duration-300 hover:scale-105"
    >
      <Image
        src={urlFor(main_image).width(800).height(600).url()}
        alt={client}
        width={400}
        height={400}
        className="h-60 w-full object-cover"
      />

      <div className="flex flex-col gap-1 p-4">
        <h2 className="text-xl font-medium sm:text-2xl">{client}</h2>
        {!isServices && (
          <p
            className="text-lg leading-loose"
            dangerouslySetInnerHTML={{ __html: who_is }}
          />
        )}
      </div>
    </Link>
  );
};
