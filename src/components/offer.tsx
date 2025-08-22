import { CalendarClock } from "lucide-react";
import { Button } from "./ui/button";

// Local imports
import { Title } from "./title";
import { OfferList } from "./home/offer-list";

export const Offer = () => {
  return (
    <section
      className="section relative min-h-[70vh] items-center justify-center bg-cover bg-fixed bg-no-repeat py-16 bg-blend-multiply"
      style={{
        backgroundImage: `linear-gradient(to right, #FEE600, rgba(0, 0, 0, 0.5)), url("/Telepse_digital_marketing_agency_lagos_nigeria_banner_2.jpg")`,
      }}
    >
      <Title
        align="center"
        size="lg"
        weight="bold"
        color="white"
      >
        Start a 3 months
        <br /> social media marketing plan
      </Title>

      <OfferList />

      <Button
        variant="default"
        size="xl"
        className="bg-brand-yellow text-lg text-black hover:bg-black hover:text-white"
      >
        Free trial for 7 days <CalendarClock />
      </Button>
    </section>
  );
};
