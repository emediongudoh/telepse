import { OFFER_ICONS } from "@/constants";
import { OfferIcon } from "./offer-icon";

export const OfferList = () => {
  return (
    <div className="flex w-full max-w-lg transform flex-wrap justify-center gap-8">
      {OFFER_ICONS.map((item, index) => (
        <OfferIcon
          key={index}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </div>
  );
};
