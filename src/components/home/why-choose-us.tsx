import Image from "next/image";
import Link from "next/link";

// Third-party imports
import { ArrowRightCircleIcon, CalendarClock, CircleCheck } from "lucide-react";
import { Button } from "../ui/button";

// Local imports
import { TELEPSE_HIGHLIGHTS } from "@/constants";
import { SvgPattern } from "../svg-pattern";
import { CountupCard } from "./countup-card";
import { Title } from "../title";

export const WhyChooseUs = () => {
  return (
    <section
      style={{
        backgroundImage: `url(/Telepse_digital_marketing_agency_lagos_nigeria_home_bg.jpg)`,
      }}
      className="relative bg-cover bg-scroll bg-center bg-no-repeat"
    >
      <SvgPattern fill="#FFF" />

      <div className="wrapper grid min-h-[90vh] grid-cols-1 items-center gap-8 p-4 py-16 md:grid-cols-2">
        {/* Banner image */}
        <div className="relative flex items-center justify-start justify-self-start">
          <Image
            src="/Telepse_digital_marketing_agency_lagos_nigeria_banner_2.jpg"
            alt="Telepse_digital_marketing_agency_lagos_nigeria_banner_2"
            width={500}
            height={500}
            className="h-60 w-80 rounded-2xl border-8 border-black object-cover sm:h-[400px] sm:w-[550px]"
          />

          <CountupCard />
        </div>

        {/* Banner content */}
        <div className="flex flex-col justify-center gap-4">
          <Title>Why succeed with us?</Title>

          <ul className="space-y-4">
            {TELEPSE_HIGHLIGHTS.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-lg"
              >
                <CircleCheck className="text-brand-yellow fill-black" /> {item}
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <Button
                variant="ghost"
                size="xl"
                className="border border-black bg-white hover:bg-black hover:text-white"
              >
                Learn more{" "}
                <ArrowRightCircleIcon className="size-7 -rotate-45" />
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="xl"
              className="border border-black text-black hover:bg-black hover:text-white"
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
