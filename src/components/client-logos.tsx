"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

// Local imports
import { SmallTitle } from "./small-title";

interface ClientLogosProps {
  logos: {
    logo: string;
    client: string;
  }[];
}

export const ClientLogos = ({ logos }: ClientLogosProps) => {
  const pathname = usePathname();

  const isHomePage = pathname === "/" || pathname.includes("services");
  const isCaseStudyPage = pathname.includes("case-study");

  // Show different number of logos depending on the route
  const displayLogos = isHomePage
    ? logos.slice(0, 5)
    : isCaseStudyPage
      ? logos.slice(0, 7)
      : logos;

  return (
    <section className="section wrapper overflow-x-clip">
      {isHomePage && <SmallTitle title="Trusted by mega brands" />}

      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {displayLogos.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 opacity-50"
          >
            <Image
              src={item.logo}
              alt={item.client}
              width={120}
              height={120}
              className="size-7 object-contain sm:size-14"
            />{" "}
            {/* {isHomePage && (
              <span className="text-lg font-medium whitespace-nowrap sm:text-xl">
                {item.client}
              </span>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
};
