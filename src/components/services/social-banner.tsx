import Image from "next/image";

// Local imports
import { BigTitle } from "../big-title";
import { SvgPattern } from "../svg-pattern";

interface SocialBannerProps {
  title: string;
}

export const SocialBanner = ({ title }: SocialBannerProps) => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#FEE600]">
      {/* Top wave */}
      <div className="w-full -scale-y-100">
        <SvgPattern fill="#FFF" />
      </div>

      {/* Bottom wave */}
      <SvgPattern fill="#FFF" />

      <div className="mb-20 flex items-end justify-center gap-4">
        <Image
          src="/element-4.png"
          alt="Element 1"
          width={120}
          height={120}
          className="size-24 -scale-x-100 object-contain sm:size-32"
        />

        <BigTitle title={title} />
      </div>
    </div>
  );
};
