import Image from "next/image";

// Local imports
import { Title } from "../title";

interface IndustryIconProps {
  icon: string;
  label: string;
}

export const IndustryIcon = ({ icon, label }: IndustryIconProps) => {
  return (
    <div className="relative z-10 flex flex-col items-center gap-8">
      {/* The "clip" element */}
      <div className="bg-secondary-yellow absolute -top-4 size-3.5 rotate-45"></div>

      <div className="w-26 transform rounded-full border bg-white p-4 shadow transition hover:scale-105 sm:w-42 sm:px-12 sm:py-8">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={icon}
            alt={label}
            width={100}
            height={100}
            className="size-8 sm:size-16"
          />

          <Title
            align="center"
            size="xs"
          >
            {label}
          </Title>
        </div>
      </div>
    </div>
  );
};
