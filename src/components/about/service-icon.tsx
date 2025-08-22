import Image from "next/image";
import Link from "next/link";

// Third-party imports
import { ArrowUpRight } from "lucide-react";

// Local imports
import { Title } from "../title";

interface ServiceIconProps {
  icon: string;
  title: string;
  href: string;
}

export const ServiceIcon = ({ icon, title, href }: ServiceIconProps) => {
  return (
    <Link
      href={href}
      className="group hover:bg-secondary-gray relative z-10 flex size-52 transform flex-col items-center justify-center gap-4 bg-white p-8 shadow transition hover:scale-105 sm:gap-8"
    >
      <Image
        src={icon}
        alt={title}
        width={100}
        height={100}
        className="size-24 object-cover"
      />

      <div className="absolute inset-0 h-full w-full bg-black opacity-0 transition duration-500 ease-in-out group-hover:opacity-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20px]">
          <Title
            align="center"
            size="sm"
            color="white"
          >
            {title}
          </Title>
          <ArrowUpRight className="size-8 text-white" />
        </div>
      </div>
    </Link>
  );
};
