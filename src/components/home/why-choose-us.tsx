"use client";

import Image from "next/image";

// Third-party imports
import { ArrowRightCircleIcon, CalendarClock, CircleCheck } from "lucide-react";
import { Button } from "../ui/button";
import CountUp from "react-countup";

// Local imports
import { telepseHighlights } from "@/constants";
import { BigTitle } from "../big-title";
import { SvgPattern } from "../svg-pattern";

export const WhyChooseUs = () => {
  return (
    <section
      style={{
        backgroundImage: `url(/home-bg.jpg)`,
      }}
      className="relative bg-cover bg-scroll bg-center bg-no-repeat"
    >
      <SvgPattern fill="#FFF" />

      <div className="wrapper grid min-h-[90vh] grid-cols-1 items-center gap-8 p-4 md:grid-cols-2">
        {/* Banner image */}
        <div className="relative flex items-center justify-start justify-self-start">
          <Image
            src="/offer-banner.jpg"
            alt="Banner"
            width={400}
            height={400}
            className="h-48 w-[448px] rounded-2xl border-8 border-black object-cover sm:h-[448px]"
          />

          <div className="absolute bottom-0 left-1/4 flex -translate-x-1/4 translate-y-1/4 flex-wrap items-center gap-4 rounded-2xl bg-white p-4">
            <div className="rounded-2xl bg-[#F5B341] p-4">
              <Image
                src="/trend.png"
                alt="Trend"
                width={120}
                height={120}
                className="size-10 object-contain"
              />
            </div>

            <div className="font-semibold">
              <h2 className="text-xl sm:text-3xl">
                <CountUp
                  start={0}
                  end={600}
                  duration={5}
                  enableScrollSpy
                  scrollSpyDelay={500}
                />
                %
              </h2>
              <p className="text-muted-foreground text-xl">Increase in leads</p>
            </div>
          </div>
        </div>

        {/* Banner content */}
        <div className="flex flex-col justify-center gap-4">
          <BigTitle
            title="Why succeed with us?"
            isCentered={false}
          />

          <ul className="flex flex-col gap-4">
            {telepseHighlights.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-lg"
              >
                <CircleCheck className="fill-black text-[#FCDB67]" /> {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="ghost"
              size="lg"
              className="h-12 border border-black bg-white hover:bg-transparent"
            >
              Learn more <ArrowRightCircleIcon className="size-7 -rotate-45" />
            </Button>
            <Button
              variant="default"
              size="lg"
              className="h-12 border border-black hover:bg-transparent hover:text-black"
            >
              Book free consultation <CalendarClock />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full -rotate-180">
        <SvgPattern fill="#FFF" />
      </div>
    </section>
  );
};
