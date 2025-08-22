import Image from "next/image";

// Local imports
import { WHAT_WE_DO } from "@/constants";
import { Title } from "../title";

export const TelepseHighlights = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {WHAT_WE_DO.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="bg-brand-yellow rounded-full p-6">
            <Image
              src={item.icon}
              alt={item.title}
              width={100}
              height={100}
              className="size-16 object-contain"
            />
          </div>

          <Title size="sm">{item.title}</Title>
        </div>
      ))}
    </div>
  );
};
