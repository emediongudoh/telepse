import { Button } from "../ui/button";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";

interface ServiceCTAProps {
  children: React.ReactNode;
  caption1: string;
  caption2?: string;
  btnText: string;
}

export const ServiceCTA = ({
  children,
  caption1,
  caption2,
  btnText,
}: ServiceCTAProps) => {
  return (
    <div className="mt-10 mr-8 mb-10 ml-8 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border-2 bg-white px-8 py-12 shadow-[5px_5px_0px_black] md:mx-auto md:flex-row">
      <div className="flex-2">
        <Title
          size="lg"
          weight="normal"
        >
          {children}
        </Title>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="border-l-secondary-yellow border-l-4 px-4">
          <Paragraph size="xl">{caption1}</Paragraph>
        </div>

        {caption2 && (
          <div className="border-l-secondary-yellow border-l-4 px-4">
            <Paragraph size="xl">{caption2}</Paragraph>
          </div>
        )}

        <Button
          variant="default"
          size="xl"
          className="bg-secondary-yellow text-lg text-black hover:bg-black hover:text-white"
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};
