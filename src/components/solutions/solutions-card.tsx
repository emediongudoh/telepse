import Image from "next/image";

// Third-party imports
import { CircleCheck } from "lucide-react";

// Local imports
import { SmallTitle } from "../small-title";

interface SolutionsCardProps {
  imageSrc: string;
  title: string;
  description: string;
  listItems?: string[];
}

export const SolutionsCard = ({
  imageSrc,
  title,
  description,
  listItems,
}: SolutionsCardProps) => {
  return (
    <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="flex flex-1 items-center justify-center bg-[#E6F0DD] p-8">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className="size-40 rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between space-y-4 p-8">
        <SmallTitle
          title={title}
          isCentered={false}
          isBold={false}
        />

        <p className="text-lg leading-loose sm:text-xl">{description}</p>

        {listItems && (
          <ul className="space-y-6">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-lg sm:text-xl"
              >
                <CircleCheck className="fill-black text-[#FEE600]" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
