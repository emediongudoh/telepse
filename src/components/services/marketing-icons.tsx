import { marketingIcons } from "@/constants";
import { SingleMarketingIcon } from "./single-marketing-icon";

export const MarketingIcons = () => {
  return (
    <div className="absolute bottom-0 left-1/2 z-50 mx-auto hidden w-full max-w-4xl -translate-x-1/2 translate-y-1/2 transform grid-cols-1 place-items-center gap-8 p-4 sm:grid-cols-2 md:grid md:grid-cols-3">
      {marketingIcons.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-center ${index === 1 ? "h-40" : "h-48 w-64"}`}
        >
          <SingleMarketingIcon
            key={index}
            image={item.image}
            text={item.text}
            id={item.id}
          />
        </div>
      ))}
    </div>
  );
};
