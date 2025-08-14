import Image from "next/image";

interface PersonCardProps {
  image: string;
  name: string;
  role: string;
}

export const PersonCard = ({ image, name, role }: PersonCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="h-48 rounded-2xl object-cover sm:h-60"
      />

      <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
      <p className="text-lg sm:text-xl">{role}</p>
    </div>
  );
};
