import { industryIcons } from "@/constants";
import { IndustryIcon } from "./industry-icon";
import { BigTitle } from "../big-title";

export const IndustriesServed = () => {
  return (
    <section className="wrapper section relative md:gap-16">
      <BigTitle title="Industries Served" />

      <div className="relative flex flex-wrap items-start justify-center gap-8">
        <div className="absolute top-0 left-0 z-0 flex h-8 w-full items-center justify-center">
          <div className="h-0.5 w-4/5 bg-[#F5B341]"></div>
        </div>

        {industryIcons.map((item, index) => (
          <IndustryIcon
            key={index}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};
