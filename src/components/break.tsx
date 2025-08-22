"use client";

import { Typewriter } from "react-simple-typewriter";

// Local imports
import { Title } from "./title";

export const Break = () => {
  return (
    <section className="section items-center">
      <span className="badge">What is Telepse?</span>

      <Title
        align="center"
        size="lg"
        weight="normal"
      >
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
      </Title>
    </section>
  );
};
