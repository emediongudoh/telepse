"use client";

import { Button } from "../ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Local imports
import { BigTitle } from "../big-title";
import { CaseStudyCard } from "../case-study/case-study-card";
import { SvgPattern } from "../svg-pattern";

interface CaseStudy {
  main_image: string;
  client: string;
  slug: string;
  who_is: string;
}

interface CaseStudiesPreviewProps {
  caseStudies: CaseStudy[];
}

export const CaseStudiesPreview = ({
  caseStudies,
}: CaseStudiesPreviewProps) => {
  return (
    <section className="relative mt-24 bg-[#FEE600]">
      <SvgPattern fill="#FFF" />

      <div
        style={{ backgroundImage: `url(/Frame-8.jpg)` }}
        className="wrapper absolute top-0 left-1/2 flex min-h-[35vh] w-full -translate-x-1/2 -translate-y-1/4 items-center justify-center rounded-2xl bg-cover bg-center text-white"
      >
        <div className="wrapper px-4">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-16">
            <BigTitle
              title="Request a callback"
              isCentered={false}
              isBold={false}
            />

            <div className="flex">
              <PhoneInput
                country={"ng"}
                value="Enter whatsapp"
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                  placeholder: "Enter whatsapp",
                }}
                inputStyle={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  width: "100%",
                  background: "white",
                  color: "black",
                  padding: "12px 16px",
                }}
                buttonStyle={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  background: "transparent",
                  padding: "12px 16px",
                }}
                containerClass="w-full h-14"
                inputClass="!h-14 !ml-10 !text-base !w-60 p-3 placeholder-gray-800 !rounded-tr-none !rounded-br-none"
                buttonClass="!h-14 !px-1 !border !border-gray-300 !bg-white !rounded-l-md focus:!outline-none"
                dropdownClass="!bg-white !text-black"
                enableSearch={true}
                placeholder="Enter WhatsApp number"
              />
              <Button
                variant="site"
                size="lg"
                className="h-14 rounded-tl-none rounded-bl-none text-black"
              >
                Request
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="-z-10">
        <SvgPattern fill="#FFF" />
      </div>

      <div className="wrapper section mt-40">
        <div className="flex items-center justify-between">
          <BigTitle
            title="View our case studies"
            isCentered={false}
            isBold={false}
          />

          <Button
            variant="default"
            size="lg"
            className="h-14 text-lg"
          >
            More case studies
          </Button>
        </div>

        <div className="items-stat flex min-h-[50vh] flex-wrap justify-center gap-8">
          {caseStudies.slice(0, 2).map((item, index) => (
            <CaseStudyCard
              key={index}
              main_image={item.main_image}
              client={item.client}
              slug={item.slug}
              who_is={item.who_is}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
