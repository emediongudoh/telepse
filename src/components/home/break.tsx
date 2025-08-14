"use client";

import { Typewriter } from "react-simple-typewriter";

export const Break = () => {
  return (
    <section className="section items-center">
      <span className="w-fit rounded-full bg-[#F5B341] px-4 py-2 text-lg font-medium">
        What is Telepse?
      </span>

      <h1 className="text-center text-3xl font-semibold sm:text-6xl">
        Telepse means creative{" "}
        <span className="text-muted-foreground">
          <Typewriter
            words={[" ", "...performance driven"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </section>
  );
};
