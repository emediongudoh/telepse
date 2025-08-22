import { SERVICE_IMAGES } from "@/constants";
import { ServiceCard } from "./service-card";

export const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {SERVICE_IMAGES.map((item, index) => (
        <ServiceCard
          key={index}
          image={item.image}
          title={item.title}
          content={item.content}
          href={item.href}
        />
      ))}
    </div>
  );
};
