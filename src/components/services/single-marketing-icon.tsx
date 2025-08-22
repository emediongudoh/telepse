"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// Local imports
import { Title } from "../title";

interface SingleMarketingIconProps {
  image: string;
  text: string;
  path: string;
  id: string;
}

export const SingleMarketingIcon = ({
  image,
  text,
  path,
  id,
}: SingleMarketingIconProps) => {
  const router = useRouter();

  return (
    <div
      className="overlay-container relative flex size-full transform cursor-pointer flex-col items-center justify-center gap-8 rounded-2xl border bg-white p-8 shadow transition duration-300 hover:scale-105"
      onClick={() => router.push(`/services/${path}#${id}`)}
    >
      <Image
        src={image}
        alt="Content marketing"
        width={500}
        height={500}
        className="h-full w-full object-contain"
      />

      <div className="smi-overlay rounded-2xl">
        <div className="text">
          <Title
            size="xs"
            weight="bold"
            color="white"
          >
            {text}
          </Title>
        </div>
      </div>
    </div>
  );
};
