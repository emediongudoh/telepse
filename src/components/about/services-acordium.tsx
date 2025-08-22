import { SvgPattern } from "../svg-pattern";
import { Title } from "../title";
import { ServiceIconList } from "./service-icon-list";

export const ServicesAcordium = () => {
  return (
    <section
      style={{
        backgroundImage: `url(/Telepse_digital_marketing_agency_lagos_nigeria_home_bg.jpg)`,
      }}
      className="relative bg-cover bg-scroll bg-center bg-no-repeat pt-8 pb-24"
    >
      <SvgPattern fill="#FFF" />

      <div className="section">
        <Title
          align="center"
          size="lg"
          weight="normal"
        >
          Services
        </Title>

        <ServiceIconList />
      </div>

      <div className="absolute bottom-0 w-full rotate-180">
        <SvgPattern fill="#FFF" />
      </div>
    </section>
  );
};
