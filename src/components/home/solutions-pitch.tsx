"use client";

import { CalendarClock } from "lucide-react";
import { Button } from "../ui/button";
import { useMediaQuery } from "react-responsive";

// Local imports
import { Title } from "../title";
import { Offer } from "../offer";
import { SvgPattern } from "../svg-pattern";

export const SolutionsPitch = () => {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const isMediumScreen = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div>
      {/* Solutions pitch */}
      <section className="bg-brand-yellow section items-center px-4 py-16">
        <Title
          align="center"
          size="lg"
          weight="normal"
        >
          The present, the future are digital.{" "}
          {isSmallScreen && isMediumScreen && <br />}{" "}
          {!(isSmallScreen && isMediumScreen) && <br />} Gain ahead in marketing
          and transformation.
        </Title>

        <Button
          variant="ghost"
          size="xl"
          className="border border-black text-black hover:bg-black hover:text-white"
        >
          Book free consultation <CalendarClock />
        </Button>
      </section>

      {/* Offer */}
      <Offer />
      <SvgPattern fill="#FEE600" />
    </div>
  );
};
