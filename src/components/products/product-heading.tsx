import Image from "next/image";

// Local imports
import { SmallTitle } from "../small-title";

export const ProductHeading = () => {
  return (
    <div className="space-y-4 text-center">
      <div className="flex items-end justify-center gap-4">
        <SmallTitle title="Moving ideas to products" />

        <Image
          src="/element-4.png"
          alt="Element 1"
          width={100}
          height={100}
          className="size-20 object-contain sm:size-28"
        />
      </div>

      <p className="text-2xl">
        We have designed product requirements for our internal clients below:
      </p>
    </div>
  );
};
