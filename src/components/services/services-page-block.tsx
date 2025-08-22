"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Third-party imports
import { PopupButton } from "react-calendly";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";

interface ServicesPageBlockProps {
  title: string;
  subtitle?: string;
  btnText?: string;
}

export const ServicesPageBlock = ({
  title,
  subtitle,
  btnText,
}: ServicesPageBlockProps) => {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("root");
    if (el) {
      setRootEl(el);
    }
  }, []);

  return (
    <section
      className="wrapper relative m-32 min-h-[60vh] rounded-2xl bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: `url(/bg-ctas.jpg)` }}
    >
      <div className="relative flex flex-col items-center justify-center gap-8 px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <Title
            align="left"
            size="lg"
            weight="normal"
            color="white"
          >
            {title}
          </Title>

          <Paragraph
            size="xl"
            className="text-muted-foreground"
          >
            {subtitle}
          </Paragraph>
        </div>

        {btnText && (
          <>
            {rootEl ? (
              <PopupButton
                url="https://calendly.com/emediong5135/30min"
                rootElement={rootEl}
                text={btnText}
                className="calendly-button"
              />
            ) : (
              <div>Loading...</div>
            )}
          </>
        )}

        <div className="absolute right-[-64px] bottom-0 z-10">
          <div className="-translate-y-16">
            <Image
              src="/Telepse_digital_marketing_agency_lagos_nigeria_vivian_chatbot.png"
              alt="Telepse_digital_marketing_agency_lagos_nigeria_vivian_chatbot"
              width={500}
              height={500}
              className="h-96 w-60 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
