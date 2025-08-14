import Image from "next/image";

// Third-party imports
import CountUp from "react-countup";

// Local imports
import { BigTitle } from "../big-title";

export const ShortStory = () => {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-12 gap-8 px-4 py-8">
      {/* Left */}
      <div className="col-span-9 space-y-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="font-semibold text-[#F5B341] uppercase">
            About Telepse
          </p>
          {/* <SmallTitle title="Short Story" /> */}
          <BigTitle
            title="Short story"
            isCentered={false}
          />
          <p className="text-lg leading-loose">
            We are a digital marketing agency trusted by small and medium size
            businesses for strategies that work. We also develop product
            requirements for tech startups. Telepse is committed to helping
            businesses increase conversion across multiple digital marketing
            channels with detailed understanding of their goals.
          </p>
          <p className="text-lg leading-loose">
            At Telepse we believe there&apos;s a better way to serve marketing.
            A more personalized, less intrusive way where your customers become
            loyal rather than serviced. We&apos;re definitely keen about it and
            our mission makes the process effortless for the businesses that
            need it.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <Image
            src="/offer-banner.jpg"
            alt="Offer banner"
            width={400}
            height={400}
            className="col-span-4 h-96 w-full object-cover"
          />

          <div className="col-span-8 space-y-2">
            <BigTitle
              title="We're more than just a digital agency"
              isCentered={false}
            />
            <p className="text-lg leading-loose">
              We focus on our clients&apos; success. This is through digital
              marketing services especially with tailored strategy because it is
              one of the least understood aspect for great marketing and we see
              opportunities. It is exciting to expose everyone to our team of
              proffesionals who are readily enabled to support.
            </p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="col-span-3 space-y-4">
        <Image
          src="/offer-banner-2.jpg"
          alt="Offer banner"
          width={400}
          height={400}
          className="h-96 w-full object-cover"
        />

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">
            <CountUp
              start={0}
              end={10}
              duration={5}
              enableScrollSpy
              scrollSpyDelay={500}
            />
            +
          </h2>

          <p className="text-lg font-medium uppercase">years experience</p>
        </div>
      </div>
    </div>
  );
};
