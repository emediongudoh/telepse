import Image from "next/image";

// Third-party imports
import { CalendarClock } from "lucide-react";
import { Button } from "../ui/button";

// Local imports
import { SvgPattern } from "../svg-pattern";
import { Title } from "../title";
import { Paragraph } from "../paragraph";

export const SolutionsBanner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(/Telepse_digital_marketing_agency_lagos_nigeria_home_bg_flipped.png)`,
      }}
      className="relative bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <div className="absolute top-1/8 w-full -translate-y-1/8">
        <SvgPattern fill="#FFF" />
      </div>

      <Image
        src="/elements/Telepse_digital_marketing_agency_lagos_nigeria_element_8.png"
        alt="Telepse_digital_marketing_agency_lagos_nigeria_element_8"
        width={100}
        height={100}
        className="absolute top-4 left-4 size-20 object-contain sm:size-28"
      />

      <div className="wrapper grid min-h-[90vh] grid-cols-1 items-center gap-8 p-4 md:grid-cols-2">
        {/* Telepse_digital_marketing_agency_lagos_nigeria_banner image */}
        <div className="relative flex items-center justify-center justify-self-center md:justify-start md:justify-self-start">
          <div className="relative">
            <Image
              src="/Telepse_digital_marketing_agency_lagos_nigeria_banner_2.jpg"
              alt="Telepse_digital_marketing_agency_lagos_nigeria_banner_2"
              width={500}
              height={500}
              className="h-60 w-80 rounded-2xl border-8 border-black object-cover sm:h-[400px] sm:w-[550px]"
            />
          </div>
        </div>

        {/* Banner content */}
        <div className="flex flex-col flex-wrap items-end justify-end gap-4 justify-self-end">
          <Title
            align="right"
            size="lg"
            weight="bold"
          >
            Marketing is like preparing a nice meal.
          </Title>
          <div className="max-w-lg">
            <Paragraph
              align="right"
              size="lg"
            >
              Attract your targeted audience. <br /> Satisfy an appetite
              (customers) that crave for more.
            </Paragraph>
          </div>

          <Button
            variant="ghost"
            size="xl"
            className="bg-black text-white hover:bg-black/80 hover:text-white"
          >
            Book session <CalendarClock />
          </Button>
        </div>
      </div>
    </section>
  );
};
