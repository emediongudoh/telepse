import { Title } from "../title";
import { IndustryList } from "./industry-list";

export const IndustriesServed = () => {
  return (
    <section className="wrapper section relative md:gap-16">
      <Title
        align="center"
        size="lg"
        weight="normal"
      >
        Industries Served
      </Title>

      <div className="relative flex flex-wrap items-start justify-center gap-8">
        <div className="absolute top-0 left-0 z-0 flex h-8 w-full items-center justify-center">
          <div className="bg-secondary-yellow h-0.5 w-4/5"></div>
        </div>

        <IndustryList />
      </div>
    </section>
  );
};
