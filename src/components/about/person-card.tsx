import Image from "next/image";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";

interface PersonCardProps {
  image: string;
  name: string;
  role: string;
}

export const PersonCard = ({ image, name, role }: PersonCardProps) => {
  return (
    <div className="space-y-2">
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="size-52 rounded-2xl object-cover sm:h-60 sm:w-full"
      />

      <div>
        <Title
          align="center"
          size="sm"
          weight="bold"
        >
          {name}
        </Title>
        <Paragraph
          align="center"
          size="xl"
        >
          {role}
        </Paragraph>
      </div>
    </div>
  );
};
