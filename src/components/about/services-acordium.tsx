import { serviceIcons } from "@/constants";
import { ServiceIcon } from "./service-icon";
import { BigTitle } from "../big-title";
import { SvgPattern } from "../svg-pattern";

export const ServicesAcordium = () => {
  return (
    <section
      style={{
        backgroundImage: `url(/home-bg.jpg)`,
      }}
      className="relative bg-cover bg-scroll bg-center bg-no-repeat"
    >
      <SvgPattern fill="#FFF" />

      <div className="wrapper relative flex flex-col gap-8 px-4 py-8 sm:gap-16 sm:py-16">
        <BigTitle title="Services" />

        <div className="relative flex flex-wrap items-start justify-center gap-8">
          {serviceIcons.map((item, index) => (
            <ServiceIcon
              key={index}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full rotate-180">
        <SvgPattern fill="#FFF" />
      </div>
    </section>
  );
};
