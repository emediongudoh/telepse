"use client";

import { useEffect, useState } from "react";

// Third-party imports
import { PopupButton } from "react-calendly";

// Local imports
import { BigTitle } from "./big-title";
import { SmallTitle } from "./small-title";

interface PageBlockProps {
  title: string;
  subtitle?: string;
  btnText?: string;
  children?: React.ReactNode;
}

export const PageBlock = ({
  title,
  subtitle,
  btnText,
  children,
}: PageBlockProps) => {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("root");
    if (el) {
      setRootEl(el);
    }
  }, []);

  return (
    <section className="relative min-h-[60vh] bg-black text-white">
      <div className="relative flex flex-col items-center justify-center gap-8 px-4 py-16">
        <BigTitle title={title} />

        <SmallTitle title={subtitle} />

        {children}

        {btnText && (
          <>
            {rootEl ? (
              <PopupButton
                url="https://calendly.com/emediong5135/30min"
                rootElement={rootEl}
                text={btnText}
                className="cursor-pointer rounded-md bg-[#FEE600] px-6 py-3 text-lg font-semibold text-black transition duration-300 hover:bg-white hover:text-black"
              />
            ) : (
              <div>Loading...</div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
