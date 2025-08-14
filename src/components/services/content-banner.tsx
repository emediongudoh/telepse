import Image from "next/image";

// Local imports
import { BigTitle } from "../big-title";
import { SvgPattern } from "../svg-pattern";
import { MarketingIcons } from "./marketing-icons";

interface ContentBannerProps {
  title: string;
}

export const ContentBanner = ({ title }: ContentBannerProps) => {
  return (
    <div className="relative mb-40 flex min-h-[70vh] flex-col items-center justify-center bg-[#FEE600]">
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

      <MarketingIcons />

      <div className="absolute bottom-0 w-full -rotate-180">
        {/* Top wave */}
        {/* <div className="w-full -scale-y-100">
          <SvgPattern fill="#FFF" />
        </div> */}

        {/* Bottom wave */}
        <SvgPattern fill="#FFF" />
      </div>
    </div>
  );
};
