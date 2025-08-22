import Image from "next/image";

// Local imports
import { Title } from "../title";

export const SocialBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/Telepse_digital_marketing_agency_lagos_nigeria_home_bg_flipped.png)`,
      }}
      className="flex min-h-[50vh] flex-col items-center justify-center bg-cover bg-fixed bg-left-bottom bg-no-repeat"
    >
      <div className="flex items-end justify-center gap-4 p-4">
        <Title
          size="lg"
          weight="bold"
        >
          Social media marketing
        </Title>

        <Image
          src="/elements/Telepse_digital_marketing_agency_lagos_nigeria_element_4.png"
          alt="Element 1"
          width={100}
          height={100}
          className="size-24 object-contain sm:size-32"
        />
      </div>
    </div>
  );
};
