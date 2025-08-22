"use client";

import Image from "next/image";

// Third-party imports
import { CalendarClock } from "lucide-react";
import { Button } from "../ui/button";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";
import { CountupCard } from "../home/countup-card";

export const SocialStory = () => {
  return (
    <section className="wrapper grid min-h-[90vh] grid-cols-1 items-center gap-8 p-4 md:grid-cols-2">
      {/* Banner content */}
      <div className="flex flex-col items-center gap-4 md:items-start">
        <Title
          size="lg"
          weight="normal"
        >
          Amplify your social presence. Gain business!
        </Title>

        <Paragraph size="lg">
          Explore our 3 in 1 social media marketing package. It includes content
          planning and strategy, content design, and account management.
        </Paragraph>

        <Paragraph size="lg">
          Advertising service is added as a bonus. Linkedin marketing is
          available on demand as an add on.
        </Paragraph>

        <Button
          variant="default"
          size="xl"
          className="bg-brand-yellow text-lg text-black hover:bg-black hover:text-white"
        >
          See pricing <CalendarClock />
        </Button>
      </div>

      {/* Telepse_digital_marketing_agency_lagos_nigeria_banner image */}
      <div className="relative flex items-center justify-center justify-self-center md:justify-end md:justify-self-end">
        <div className="relative">
          <Image
            src="/Telepse_digital_marketing_agency_lagos_nigeria_banner.jpg"
            alt="Telepse_digital_marketing_agency_lagos_nigeria_banner"
            width={500}
            height={500}
            className="h-60 w-80 rounded-2xl border-8 border-black object-cover sm:h-[400px] sm:w-[550px]"
          />
        </div>

        <CountupCard />
      </div>
    </section>
  );
};
