import Image from "next/image";

// Local imports
import { SvgPattern } from "../svg-pattern";
import { MarketingIcons } from "./marketing-icons";
import { Title } from "../title";

interface MarketingIcon {
  image: string;
  text: string;
  path: string;
  id: string;
}

interface ServiceBannerProps {
  title: string;
  icons: MarketingIcon[];
}

export const ServiceBanner = ({ title, icons }: ServiceBannerProps) => {
  return (
    <div className="bg-brand-yellow relative flex min-h-[50vh] flex-col items-center justify-center sm:min-h-[70vh] md:mb-24">
      <div className="w-full -scale-y-100">
        <SvgPattern fill="#FFF" />
      </div>
      <SvgPattern fill="#FFF" />

      <div className="flex items-center justify-center gap-4 sm:mb-24">
        <Image
          src="/elements/Telepse_digital_marketing_agency_lagos_nigeria_element_4.png"
          alt="Telepse_digital_marketing_agency_lagos_nigeria_element_4"
          width={100}
          height={100}
          className="hidden size-24 -scale-x-100 object-contain sm:inline-block sm:size-40"
        />

        <Title
          size="lg"
          weight="bold"
        >
          {title}
        </Title>
      </div>

      <MarketingIcons icons={icons} />

      <div className="absolute bottom-0 w-full -rotate-180">
        <SvgPattern fill="#FFF" />
      </div>
    </div>
  );
};
