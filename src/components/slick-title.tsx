import Image from "next/image";

// Local imports
import { BigTitle } from "./big-title";

interface SlickTitleProps {
  title: string;
}

export const SlickTitle = ({ title }: SlickTitleProps) => {
  return (
    <div className="mt-4 flex items-center justify-center gap-4 sm:gap-16">
      <Image
        src="/element-2.png"
        alt="Element 2"
        width={100}
        height={100}
        className="size-10 object-contain sm:size-20"
      />{" "}
      <BigTitle title={title} />{" "}
      <Image
        src="/element-1.png"
        alt="Element 1"
        width={100}
        height={100}
        className="size-10 object-contain sm:size-20"
      />
    </div>
  );
};
