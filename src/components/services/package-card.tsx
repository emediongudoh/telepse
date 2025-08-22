import Image from "next/image";

// Third-party imports
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";

interface PackageCardProps {
  imageBg?: string;
  contentBg?: string;
  imageSrc: string;
  title: string;
  description: string;
  listItems?: string[];
}

export const PackageCard = ({
  imageBg = "#FFF",
  contentBg = "#FFF",
  imageSrc,
  title,
  description,
  listItems,
}: PackageCardProps) => {
  return (
    <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[3px_3px_0px_#000] sm:flex-row">
      <div
        style={{ backgroundColor: imageBg }}
        className="flex flex-1 items-center justify-center p-8"
      >
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          className={`size-40 rounded-2xl object-cover ${imageBg === "#000" ? "invert" : ""}`}
        />
      </div>

      <div
        style={{ backgroundColor: contentBg }}
        className={`flex flex-2 flex-col justify-between space-y-4 px-8 py-16 text-black ${contentBg === "#000" ? "text-white" : "text-black"}`}
      >
        <span className="text-lg font-medium uppercase">Social media</span>

        <Title
          size="sm"
          weight="bold"
          color={contentBg === "#000" ? "white" : "black"}
        >
          {title}
        </Title>
        <Paragraph size="lg">{description}</Paragraph>

        {listItems && (
          <ul className="space-y-6">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-lg sm:text-xl"
              >
                <Plus />
                {item}
              </li>
            ))}
          </ul>
        )}

        <Button
          variant="ghost"
          size="xl"
          className={`w-fit text-lg shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ${contentBg === "#FFF" ? "bg-black text-white" : "bg-white text-black"}`}
        >
          See pricing
        </Button>
      </div>
    </div>
  );
};
