"use client";

import { useRouter } from "next/navigation";

// Third-party imports
import { Button } from "../ui/button";

// Local imports
import { Paragraph } from "../paragraph";
import { Title } from "../title";

export const PricingSection = () => {
  const router = useRouter();

  return (
    <section
      className="min-h-[50vh] border-t-4 border-white bg-cover bg-left-bottom bg-no-repeat"
      style={{
        backgroundImage: `url(/Telepse_digital_marketing_agency_lagos_nigeria_home_bg_flipped.png)`,
      }}
    >
      <div className="relative flex flex-col items-center justify-center gap-8 px-4 py-16">
        <Title weight="normal">Ready to start?</Title>

        <Paragraph size="lg">
          Opt in to a social media marketing package
        </Paragraph>

        <Button
          variant="default"
          size="xl"
          className="bg-black text-lg hover:bg-black/80"
          onClick={() =>
            router.push("/services/social-media-marketing#pricing")
          }
        >
          See pricing
        </Button>
      </div>
    </section>
  );
};
