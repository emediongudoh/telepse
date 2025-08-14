import Image from "next/image";

// Third-party imports
import { CircleCheck } from "lucide-react";

// Local imports
import { BigTitle } from "../big-title";
import { SvgPattern } from "../svg-pattern";

interface ContentSectionProps {
  bgColor: string;
  fill: string;
  title: string;
  description: string;
  imageSrc: string;
  listItems?: string[];
  imagePosition?: "left" | "middle";
}

export const ContentSection = ({
  bgColor,
  fill,
  title,
  description,
  imageSrc,
  listItems,
  imagePosition = "middle", // Default
}: ContentSectionProps) => {
  // Define the column order based on imagePosition
  const leftSection = (
    <div className="space-y-4">
      <BigTitle
        title={title}
        isCentered={false}
        isBold={false}
      />
      <p className="text-lg leading-loose sm:text-xl">{description}</p>
    </div>
  );

  const imageSection = (
    <Image
      src={imageSrc}
      alt={title}
      width={500}
      height={500}
      className="h-48 w-full rounded-4xl border-12 border-black object-cover sm:h-96"
    />
  );

  const rightSection = (
    <ul className="space-y-6">
      {listItems?.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-2 text-lg sm:text-xl"
        >
          <CircleCheck className="fill-black text-[#FEE600]" />
          {item}
        </li>
      ))}
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
      className="section min-h-[90vh] py-8 sm:py-16"
      style={{ backgroundColor: bgColor }}
    >
      <SvgPattern fill={fill} />

      <div
        className={`wrapper grid grid-cols-1 items-center gap-6 px-4 sm:gap-12 ${listItems ? "md:grid-cols-3" : "md:grid-cols-2"}`}
      >
        {gridContent}
      </div>
    </section>
  );
};
