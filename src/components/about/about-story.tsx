"use client";

import Image from "next/image";

// Third-party imports
import CountUp from "react-countup";

// Local imports
import { Paragraph } from "../paragraph";
import { Title } from "../title";

export const AboutStory = () => {
  return (
    <section className="section wrapper p-0">
      {/* Short story */}
      <div className="grid grid-cols-12 items-center gap-4 p-4 md:gap-8">
        <div className="col-span-full space-y-4 md:col-span-8">
          <Paragraph
            size="lg"
            weight="bold"
            className="text-secondary-yellow uppercase"
          >
            About Telepse
          </Paragraph>

          <Title
            size="lg"
            weight="normal"
          >
            Short story
          </Title>

          <Paragraph size="lg">
            We are a digital marketing agency trusted by small and medium size
            businesses for strategies that work. We also develop product
            requirements for tech startups. Telepse is committed to helping
            businesses increase conversion across multiple digital marketing
            channels with detailed understanding of their goals.
          </Paragraph>

          <Paragraph size="lg">
            At Telepse we believe there&apos;s a better way to serve marketing.
            A more personalized, less intrusive way where your customers become
            loyal rather than serviced. We&apos;re definitely keen about it and
            our mission makes the process effortless for the businesses that
            need it.
          </Paragraph>
        </div>

        <div className="col-span-full space-y-4 md:col-span-4">
          <Image
            src="/Telepse_digital_marketing_agency_lagos_nigeria_banner_2.jpg"
            alt="Telepse_digital_marketing_agency_lagos_nigeria_banner_2"
            width={500}
            height={500}
            className="h-52 w-full rounded-2xl border-8 border-black object-cover sm:h-[400px]"
          />

          <div className="flex flex-col items-center justify-center">
            <Title>
              <CountUp
                start={0}
                end={10}
                duration={5}
                enableScrollSpy
                scrollSpyDelay={500}
              />
              +
            </Title>

            <Paragraph className="uppercase">years experience</Paragraph>
          </div>
        </div>
      </div>

      {/* We are more than a digital agency */}
      <div className="grid grid-cols-12 items-center gap-4 p-4 md:gap-8">
        <div className="col-span-full md:col-span-4">
          <Image
            src="/Telepse_digital_marketing_agency_lagos_nigeria_banner_3.jpg"
            alt="Telepse_digital_marketing_agency_lagos_nigeria_banner_3"
            width={500}
            height={500}
            className="col-span-4 h-52 w-80 rounded-2xl border-8 border-black object-cover sm:h-100 sm:w-full"
          />
        </div>

        <div className="col-span-full space-y-2 md:col-span-8">
          <Title
            size="lg"
            weight="normal"
          >
            We&apos;re more than just a digital agency
          </Title>
          <Paragraph size="lg">
            We focus on our clients&apos; success. This is through digital
            marketing services especially with tailored strategy because it is
            one of the least understood aspect for great marketing and we see
            opportunities. It is exciting to expose everyone to our team of
            proffesionals who are readily enabled to support.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};
