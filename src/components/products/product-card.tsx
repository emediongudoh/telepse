"use client";

import Image from "next/image";
import Link from "next/link";

// Local imports
import { BigTitle } from "../big-title";

interface ProductCardProps {
  name: string;
  image: string;
  desc: string;
}

export const ProductCard = ({ name, image, desc }: ProductCardProps) => {
  return (
    <Link
      href=""
      className="relative overflow-hidden rounded-2xl transition duration-300 hover:scale-105"
    >
      {/* Background split */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-[#FFF]" />
        <div className="bg-[#E6F0DD]" />
      </div>

      {/* Diagonal overlay shape */}
      <div className="absolute top-0 left-0 h-full w-[60%] -skew-x-24 transform bg-[#FFF]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse gap-8 px-6 py-10 md:flex-row md:items-center md:gap-12 lg:px-12 lg:py-16">
        {/* Text */}
        <div className="flex flex-1 flex-col gap-2 text-center md:text-left">
          <BigTitle
            title={name}
            isCentered={false}
          />
          <p className="text-lg leading-loose sm:text-xl">{desc}</p>
        </div>

        {/* Image */}
        <div className="flex flex-1 justify-center">
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="h-auto w-60 rounded-2xl object-contain sm:w-72 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </Link>
  );
};
