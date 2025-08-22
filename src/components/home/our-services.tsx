import { Star } from "lucide-react";

// Local imports
import { Title } from "../title";
import { ServiceList } from "./service-list";

export const OurServices = () => {
  return (
    <section className="wrapper section">
      <div className="flex items-center justify-center gap-4">
        <Star className="fill-secondary-yellow" />{" "}
        <Title
          align="center"
          size="lg"
          weight="normal"
        >
          Our Services
        </Title>{" "}
        <Star className="fill-secondary-yellow" />
      </div>

      <ServiceList />
    </section>
  );
};
