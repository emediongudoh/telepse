import { SERVICE_ICONS } from "@/constants";
import { ServiceIcon } from "./service-icon";

export const ServiceIconList = () => {
  return (
    <div className="flex flex-wrap items-start justify-center gap-8">
      {SERVICE_ICONS.map((item, index) => (
        <ServiceIcon
          key={index}
          icon={item.icon}
          title={item.title}
          href={item.href}
        />
      ))}
    </div>
  );
};
