import { INDUSTRY_ICONS } from "@/constants";
import { IndustryIcon } from "./industry-icon";

export const IndustryList = () => {
  return (
    <>
      {INDUSTRY_ICONS.map((item, index) => (
        <IndustryIcon
          key={index}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </>
  );
};
