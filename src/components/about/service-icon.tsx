import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceIconProps {
  icon: string;
  title: string;
}

export const ServiceIcon = ({ icon, title }: ServiceIconProps) => {
  return (
    <Link
      href=""
      className="overlay-container relative z-10 flex size-52 transform flex-col items-center justify-center gap-8 bg-white p-8 shadow transition hover:scale-105 hover:bg-[#E6F0DD]"
    >
      <Image
        src={icon}
        alt={title}
        width={120}
        height={120}
        className="size-10 sm:size-20"
      />

      <div className="overlay">
        <div className="text">
          <h2 className="text-lg font-semibold uppercase">{title}</h2>
          <ArrowUpRight className="size-8" />
        </div>
      </div>
    </Link>
  );
};
