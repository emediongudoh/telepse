import Image from "next/image";

// Local imports
import { Title } from "./title";
import { Paragraph } from "./paragraph";

interface HeadingProps {
  title?: string;
  text?: string;
}

export const Heading = ({ title, text }: HeadingProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-end justify-center gap-4">
        <Title
          align="center"
          size="lg"
          weight="normal"
        >
          {title}
        </Title>

        <Image
          src="/elements/Telepse_digital_marketing_agency_lagos_nigeria_element_4.png"
          alt="Telepse_digital_marketing_agency_lagos_nigeria_element_4"
          width={100}
          height={100}
          className="size-20 object-contain sm:size-32"
        />
      </div>

      <Paragraph
        align="center"
        size="xl"
      >
        {text}
      </Paragraph>
    </div>
  );
};
