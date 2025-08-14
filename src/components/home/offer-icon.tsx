import Image from "next/image";

interface IndustryIconProps {
  icon: string;
  title: string;
}

export const OfferIcon = ({ icon, title }: IndustryIconProps) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border bg-white p-4 shadow">
      <Image
        src={icon}
        alt={title}
        width={120}
        height={120}
        className="size-10 object-cover sm:size-10"
      />
      <h2 className="text-center sm:text-xl">{title}</h2>
    </div>
  );
};
