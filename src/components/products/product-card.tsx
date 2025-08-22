import Image from "next/image";

// Third-party imports
import { ArrowUpRight } from "lucide-react";

// Local imports
import { SvgPattern } from "../svg-pattern";
import { Title } from "../title";

interface ProductCardProps {
  name: string;
  image: string;
  desc: string;
  href?: string;
  hasArrow?: boolean;
  openDialog?: () => void;
}

export const ProductCard = ({
  name,
  image,
  desc,
  href,
  hasArrow,
  openDialog,
}: ProductCardProps) => {
  return (
    <div
      className="relative -mt-4 flex min-h-[90vh] w-full flex-col items-center justify-center gap-8 bg-cover bg-fixed bg-center bg-no-repeat p-8 bg-blend-multiply"
      style={{
        backgroundImage: `linear-gradient(to right, #FEE600, rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
    >
      <div className="relative w-full max-w-[700px] bg-white px-4 py-8 shadow-lg transition duration-300 hover:scale-105">
        <div className="absolute -top-12 left-1/2 flex h-32 w-48 -translate-x-1/2 items-center justify-center border-4 border-black bg-white p-2">
          <Image
            src="/client_logos/bank-bri-seeklogo.png"
            alt="Client logo placeholder"
            width={100}
            height={100}
            className="h-32 w-48 object-contain"
          />
        </div>

        <div className="mt-24 flex flex-col items-center justify-center gap-4">
          {name === "Vivian AI Chat Bot" ? (
            <div
              className="flex cursor-pointer items-center gap-4"
              onClick={openDialog}
            >
              <Title
                align="center"
                weight="bold"
              >
                {name}
              </Title>{" "}
              <ArrowUpRight className="size-12" />
            </div>
          ) : (
            <a
              href={href}
              target="_blank"
              className="flex items-center gap-4"
            >
              <Title
                align="center"
                weight="bold"
              >
                {name}
              </Title>{" "}
              {hasArrow && <ArrowUpRight className="size-12" />}
            </a>
          )}

          <div
            className="space-y-2 text-center text-lg leading-loose"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>

        <div className="absolute -bottom-8 w-full -scale-y-180 -rotate-180 overflow-hidden leading-none">
          <SvgPattern fill="#FFF" />
        </div>
      </div>
    </div>
  );
};
