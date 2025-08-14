"use client";

import "react-phone-input-2/lib/style.css";

// Local imports
import { SvgPattern } from "../svg-pattern";
import { faqs } from "@/constants";
import { SmallTitle } from "../small-title";
import { PricingForm } from "../services/pricing-form";

export const Faq = () => {
  return (
    <section className="relative mt-72 bg-[#FEE600]">
      <SvgPattern fill="#FFF" />

      <div className="wrapper absolute top-0 left-1/2 hidden w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl sm:flex">
        <PricingForm />
      </div>

      <div className="-z-10">
        <SvgPattern fill="#FFF" />
      </div>

      <div className="wrapper section mt-60">
        <div className="flex min-h-[50vh] flex-wrap items-start justify-center gap-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="space-y-4"
              >
                <div className="border-l-4 border-l-white px-4">
                  <SmallTitle
                    title={item.title}
                    isCentered={false}
                    isBold={false}
                  />
                </div>

                <p className="text-lg leading-loose sm:text-xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
