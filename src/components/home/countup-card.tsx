"use client";

import Image from "next/image";

// Third-party imports
import CountUp from "react-countup";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";

export const CountupCard = () => {
  return (
    <div className="absolute bottom-0 left-1/4 hidden translate-y-1/4 items-center justify-center gap-4 rounded-2xl border bg-white p-6 sm:flex sm:w-auto sm:justify-start">
      <div className="bg-secondary-yellow rounded-2xl p-4">
        <Image
          src="/Telepse_digital_marketing_agency_lagos_nigeria_trend.png"
          alt="Telepse_digital_marketing_agency_lagos_nigeria_trend"
          width={100}
          height={100}
          className="size-5 object-contain sm:size-10"
        />
      </div>

      <div className="font-semibold">
        <Title weight="bold">
          <CountUp
            start={0}
            end={600}
            duration={5}
            enableScrollSpy
            scrollSpyDelay={500}
          />
          %
        </Title>
        <Paragraph
          size="xl"
          weight="medium"
        >
          Increase in leads
        </Paragraph>
      </div>
    </div>
  );
};
