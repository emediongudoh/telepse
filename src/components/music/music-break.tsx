"use client";

import { Typewriter } from "react-simple-typewriter";

// Local imports
import { Title } from "../title";

export const MusicBreak = () => {
  return (
    <section className="section items-center">
      {/* <span className="badge">Amplifying music from the sound mind:</span> */}
      <span className="badge">Telepse music</span>

      <Title
        align="center"
        size="lg"
        weight="normal"
      >
        Music promotion and talent management{" "}
        <span className="text-muted-foreground">
          <Typewriter
            words={[" ", "...amplifying music from the sound mind"]}
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
