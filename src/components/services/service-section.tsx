import Image from "next/image";

// Third-party imports
import { Star } from "lucide-react";
import { Button } from "../ui/button";

// Local imports
import { SvgPattern } from "../svg-pattern";
import { Title } from "../title";
import { Paragraph } from "../paragraph";

interface ServiceSectionProps {
  bgColor: string;
  fill: string;
  title: string;
  description: string;
  imageSrc: string;
  listItems?: string[];
  imagePosition?: "left" | "middle";
  id: string;
  btnText: string;
}

export const ServiceSection = ({
  bgColor,
  fill,
  title,
  description,
  imageSrc,
  listItems,
  imagePosition = "middle",
  id,
  btnText,
}: ServiceSectionProps) => {
  // Define the column order based on imagePosition
  const leftSection = (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Star
          className={`${bgColor === "#FFF" ? "fill-secondary-yellow" : "fill-white"} size-8 shrink-0`}
        />

        <div className="flex-1">
          <Title
            size="lg"
            weight="normal"
          >
            {title}
          </Title>
        </div>
      </div>

      <div className="flex gap-4">
        <Star
          className={`${bgColor === "#FFF" ? "fill-secondary-yellow" : "fill-white"} size-8 shrink-0`}
        />

        <Paragraph
          size="lg"
          className="flex-1"
        >
          {description}
        </Paragraph>
      </div>
    </div>
  );

  const imageSection = (
    <Image
      src={imageSrc}
      alt={title}
      width={500}
      height={500}
      className="h-48 w-full rounded-2xl border-8 border-black object-cover sm:h-96"
    />
  );

  const rightSection = (
    <ul className="space-y-6">
      {listItems?.map((item, index) => (
        <li
          key={index}
          className={`${bgColor === "#FFF" ? "border-l-secondary-yellow" : "border-l-white"} flex items-center gap-2 border-l-4 px-4 text-lg sm:text-xl`}
        >
          {item}
        </li>
      ))}

      <Button
        variant="ghost"
        size="xl"
        className={`${bgColor === "#FFF" ? "bg-secondary-yellow" : "bg-white"} shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`}
      >
        {btnText}
      </Button>
    </ul>
  );

  let gridContent;
  if (imagePosition === "left") {
    gridContent = (
      <>
        {imageSection}
        {leftSection}
        {listItems && rightSection}
      </>
    );
  } else {
    gridContent = (
      <>
        {leftSection}
        {imageSection}
        {listItems && rightSection}
      </>
    );
  }

  return (
    <section
      className="section min-h-[90vh] px-0"
      style={{ backgroundColor: bgColor }}
      id={id}
    >
      <SvgPattern fill={fill} />

      <div
        className={`wrapper grid grid-cols-1 items-center gap-6 px-4 sm:gap-8 ${listItems ? "md:grid-cols-3" : "md:grid-cols-2"}`}
      >
        {gridContent}
      </div>
    </section>
  );
};
