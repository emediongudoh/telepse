import Image from "next/image";
import Link from "next/link";

// Third-party imports
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  content: string;
  href: string;
}

export const ServiceCard = ({
  image,
  title,
  content,
  href,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border shadow">
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="h-48 w-96 rounded-tl-2xl rounded-tr-2xl object-cover sm:h-60"
      />

      <div className="flex flex-1 flex-wrap gap-2 p-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-lg leading-loose">{content}</p>

        <Link
          href={href}
          className="self-end"
        >
          <Button
            variant="ghost"
            size="lg"
            className="bg-[#F5B341] shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            Check it out <ArrowRightIcon className="size-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
