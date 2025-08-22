import Image from "next/image";

// Local import
import { SlickTitle } from "../slick-title";
import { Title } from "../title";
// import { YouTubeChannelEmbed } from "./youtube-channel-embed";

export const OurTalent = () => {
  return (
    <section className="section wrapper items-center justify-center">
      <SlickTitle title="Our Talent" />

      {/* <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <Image
          src="/Telepse_digital_marketing_agency_lagos_nigeria_2ttee.jpg"
          alt="Telepse_digital_marketing_agency_lagos_nigeria_2ttee"
          width={500}
          height={500}
        />

        <YouTubeChannelEmbed />
      </div> */}

      <div className="mt-16 space-y-4">
        <Image
          src="/Telepse_digital_marketing_agency_lagos_nigeria_2ttee.jpg"
          alt="Telepse_digital_marketing_agency_lagos_nigeria_2ttee"
          width={500}
          height={500}
          className="border-secondary-yellow rounded-2xl border-8"
        />

        <Title align="center">2ttee [musician]</Title>
      </div>
    </section>
  );
};
