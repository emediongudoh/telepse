"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface SingleMarketingIconProps {
  image: string;
  text: string;
  id: string;
}

export const SingleMarketingIcon = ({
  image,
  text,
  id,
}: SingleMarketingIconProps) => {
  const router = useRouter();

  return (
    <div
      className="overlay-container relative flex size-full transform cursor-pointer flex-col items-center justify-center gap-8 rounded-2xl border bg-white p-8 shadow transition duration-300 hover:scale-105"
      onClick={() => router.push(`/services/content-marketing#${id}`)}
    >
      <Image
        src={image}
        alt="Content marketing"
        width={400}
        height={400}
        className="h-full w-full object-contain"
      />

      <div className="smi-overlay rounded-2xl">
        <div className="text">
          <h2 className="text-lg font-medium sm:text-xl">{text}</h2>
        </div>
      </div>
    </div>
  );
};
