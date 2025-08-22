import { SingleMarketingIcon } from "./single-marketing-icon";

interface MarketingIcon {
  image: string;
  text: string;
  path: string;
  id: string;
}

interface MarketingIconsProps {
  icons: MarketingIcon[];
}

export const MarketingIcons = ({ icons }: MarketingIconsProps) => {
  return (
    <div className="absolute bottom-0 left-1/2 z-10 mx-auto hidden w-full max-w-4xl -translate-x-1/2 translate-y-1/2 transform items-center justify-center gap-8 p-4 md:flex">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-center ${index % 2 !== 0 ? "h-32" : "h-40 w-52"}`}
        >
          <SingleMarketingIcon
            key={index}
            image={item.image}
            text={item.text}
            path={item.path}
            id={item.id}
          />
        </div>
      ))}
    </div>
  );
};
