import Image from "next/image";
import Link from "next/link";

// Third-party imports
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

// Local imports
import { Paragraph } from "../paragraph";
import { Title } from "../title";

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
    <div className="space-y-1 rounded-2xl border shadow">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="h-48 w-96 rounded-tl-2xl rounded-tr-2xl object-cover sm:h-60"
      />

      <div className="flex flex-1 flex-wrap gap-2 p-4">
        <Title size="sm">{title}</Title>
        <Paragraph>{content}</Paragraph>

        <Link
          href={href}
          className="self-end"
        >
          <Button
            variant="ghost"
            size="xl"
            className="shadow-button"
          >
            Check it out <ArrowRightIcon className="size-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
