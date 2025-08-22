"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

// Local imports
import { CLIENT_LOGOS } from "@/constants";
import { Title } from "./title";

export const ClientLogos = () => {
  const pathname = usePathname();

  const displayHeading =
    pathname === "/" ||
    pathname.includes("services") ||
    pathname === "/solutions";

  // Show different number of logos depending on the route
  const DISPLAY_LOGOS = displayHeading
    ? CLIENT_LOGOS.slice(0, 5)
    : CLIENT_LOGOS.slice(0, 7);

  return (
    <section className="wrapper section">
      {/* {displayHeading && <Title align="center">Trusted by mega brands</Title>} */}

      <Title align="center">Trusted by mega brands</Title>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {DISPLAY_LOGOS.map((item, index) => (
          <Image
            key={index}
            src={item.logo}
            alt={item.client}
            width={100}
            height={100}
            className="size-10 object-contain opacity-50 sm:size-14"
          />
        ))}
      </div>
    </section>
  );
};
