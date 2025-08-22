import Image from "next/image";

// Local imports
import { Title } from "./title";

interface SlickTitleProps {
  title: string;
}

export const SlickTitle = ({ title }: SlickTitleProps) => {
  return (
    <div className="mt-4 flex items-center justify-center gap-8">
      <Image
        src="/elements/Telepse_digital_marketing_agency_lagos_nigeria_element_2.png"
        alt="Telepse_digital_marketing_agency_lagos_nigeria_element_2"
        width={100}
        height={100}
        className="size-10 object-contain sm:size-20"
      />{" "}
      <Title
        size="lg"
        weight="normal"
      >
        {title}
      </Title>{" "}
      <Image
        src="/elements/Telepse_digital_marketing_agency_lagos_nigeria_element_1.png"
        alt="Telepse_digital_marketing_agency_lagos_nigeria_element_1"
        width={100}
        height={100}
        className="size-10 object-contain sm:size-20"
      />
    </div>
  );
};
