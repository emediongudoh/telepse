import { Title } from "../title";
import { TelepseHighlights } from "./telepse-highlights";

export const WhatWeDo = () => {
  return (
    <section className="section wrapper">
      <Title
        align="center"
        size="lg"
        weight="normal"
      >
        Tailored marketing solutions <br /> for your business
      </Title>

      <TelepseHighlights />
    </section>
  );
};
