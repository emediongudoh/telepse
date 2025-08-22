import Image from "next/image";

// Local imports
import { Paragraph } from "../paragraph";

interface IndustryIconProps {
  icon: string;
  label: string;
}

export const OfferIcon = ({ icon, label }: IndustryIconProps) => {
  return (
    <div className="flex size-32 flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4">
      <Image
        src={icon}
        alt={label}
        width={100}
        height={100}
        className="size-10 object-cover"
      />
      <Paragraph size="xl">{label}</Paragraph>
    </div>
  );
};
