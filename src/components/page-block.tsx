"use client";

import { useEffect, useState } from "react";

// Third-party imports
import { PopupButton } from "react-calendly";

// Local imports
import { Title } from "./title";

interface PageBlockProps {
  title: string;
  subtitle?: string;
  btnText?: string;
  children?: React.ReactNode;
}

export const PageBlock = ({ title, btnText, children }: PageBlockProps) => {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("root");
    if (el) {
      setRootEl(el);
    }
  }, []);

  return (
    <section className="section min-h-[40vh] items-center justify-center bg-black text-white sm:min-h-[60vh]">
      <Title
        align="center"
        size="lg"
        weight="normal"
        color="white"
      >
        {title}
      </Title>

      <Title
        align="center"
        color="white"
      >
        {children}
      </Title>

      {btnText && (
        <>
          {rootEl ? (
            <PopupButton
              url="https://calendly.com/emediong5135/30min"
              rootElement={rootEl}
              text={btnText}
              className="calendly--button"
            />
          ) : (
            <div>Loading...</div>
          )}
        </>
      )}
    </section>
  );
};
