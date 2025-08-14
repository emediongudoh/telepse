import Image from "next/image";

interface IndustryIconProps {
  icon: string;
  title: string;
}

export const IndustryIcon = ({ icon, title }: IndustryIconProps) => {
  return (
    <div className="relative z-10 flex flex-col items-center gap-8">
      {/* The "clip" element */}
      <div className="absolute -top-4 size-3.5 rotate-45 bg-[#F5B341]"></div>

      <div className="w-42 transform rounded-full border bg-white px-12 py-8 shadow transition hover:scale-105">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={icon}
            alt={title}
            width={100}
            height={100}
            className="size-8 sm:size-16"
          />

          <h2 className="text-center text-xl font-semibold">{title}</h2>
        </div>
      </div>
    </div>
  );
};
