"use client";

import Image from "next/image";

// Third-party imports
import CountUp from "react-countup";

interface CaseStudyResultCardProps {
  label: string;
  value: number;
  bgSvg: string;
  textColor: string;
}

export const CaseStudyResultCard = ({
  label,
  value,
  bgSvg,
  textColor,
}: CaseStudyResultCardProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 rounded-2xl bg-transparent p-4 font-semibold">
      {/* Value with blob background */}
      <div className="relative flex items-center justify-center">
        <Image
          src={bgSvg}
          alt=""
          width={100}
          height={100}
          className="absolute top-1/2 left-1/2 -z-10 w-full max-w-[100px] -translate-x-1/2 -translate-y-1/2 sm:max-w-[160px]"
        />
        <h2
          className="z-10 text-3xl sm:text-5xl"
          style={{ color: textColor }}
        >
          <CountUp
            start={0}
            end={value}
            duration={5}
            enableScrollSpy
            scrollSpyDelay={500}
          />
          +%
        </h2>
      </div>

      {/* Label */}
      <p className="z-10 text-center text-lg sm:text-xl">{label}</p>
    </div>
  );
};
