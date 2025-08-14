"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Third-party imports
import { PopupButton } from "react-calendly";

// Local imports
import { BigTitle } from "../big-title";
import { SmallTitle } from "../small-title";

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
        <BigTitle
          title={title}
          isBold={false}
        />

        <SmallTitle title={subtitle} />

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

        <div className="absolute right-[-80px] bottom-0 z-10">
          <div className="-translate-y-16">
            <Image
              src="/1d8f84ae-4b48-4d38-aa64-1a1b2adf43f2-removebg-preview.png"
              alt="Vivian bot"
              width={400}
              height={400}
              className="h-96 w-72 -scale-x-100 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
