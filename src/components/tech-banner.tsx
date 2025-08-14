import Image from "next/image";
import { BigTitle } from "./big-title";

interface TechBannerProps {
  title: string;
}

export const TechBanner = ({ title }: TechBannerProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(/products-banner.jpg)`,
      }}
      className="relative flex min-h-[60vh] flex-col items-start justify-center bg-cover bg-center bg-no-repeat px-8 py-12 text-white"
    >
      {/* Top-left arrow or decoration */}
      <div className="absolute top-6 left-6">
        <Image
          src="/arrow-left.svg" // You can replace this with your own arrow asset
          alt="Arrow"
          width={40}
          height={40}
        />
      </div>

      {/* Logo section */}
      <div className="z-10 mb-6 bg-white px-6 py-4 shadow-lg md:w-1/3">
        <Image
          src="/logo.png" // Replace with your actual logo image
          alt="Logo"
          width={160}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Text box */}
      <div className="z-10 max-w-xl rounded-md bg-black/70 px-6 py-4 backdrop-blur-md">
        <BigTitle title={title} />
        <p className="mt-2 text-lg leading-relaxed text-gray-200">
          Explore the tech powering our in-house innovation.
        </p>
      </div>
    </div>
  );
};
