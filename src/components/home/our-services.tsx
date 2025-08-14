import { Star } from "lucide-react";

// Local imports
import { serviceImages } from "@/constants";
import { ServiceCard } from "./service-card";
import { BigTitle } from "../big-title";

export const OurServices = () => {
  return (
    <section className="wrapper section">
      <div className="flex items-center justify-center gap-4">
        <Star className="fill-[#F5B341]" /> <BigTitle title="Our Services" />{" "}
        <Star className="fill-[#F5B341]" />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {serviceImages.map((item, index) => (
          <ServiceCard
            key={index}
            image={item.image}
            title={item.title}
            content={item.content}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
};
