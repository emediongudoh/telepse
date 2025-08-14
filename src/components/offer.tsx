"use client";

import { CalendarClock } from "lucide-react";
import { Button } from "./ui/button";

// Local imports
import { offerIcons } from "@/constants";
import { OfferIcon } from "./home/offer-icon";

export const Offer = () => {
  return (
    <div
      className="relative flex min-h-[60vh] flex-col items-center justify-center gap-8 bg-[#FEE600]/50 bg-cover bg-fixed bg-no-repeat px-4 py-8 bg-blend-multiply md:py-16"
      style={{
        backgroundImage: `linear-gradient(to right, #FEE600, rgba(0, 0, 0, 0.5)), url("/offer-banner.jpg")`,
      }}
    >
      <h1 className="text-center text-3xl font-semibold text-white sm:text-6xl">
        Start a 3 months
        <br /> social media marketing plan
      </h1>

      <div className="grid w-full max-w-md transform grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {offerIcons.map((item, index) => (
          <OfferIcon
            key={index}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>

      <Button
        variant="default"
        size="lg"
        className="h-14 bg-[#FEE600] text-lg text-black hover:bg-black hover:text-white"
      >
        Free trial for 7 days <CalendarClock />
      </Button>
    </div>
  );
};
