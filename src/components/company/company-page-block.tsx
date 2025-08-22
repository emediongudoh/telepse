import { Title } from "../title";
import { CompanySocials } from "./company-socials";

export const CompanyPageBlock = () => {
  return (
    <section className="section min-h-[40vh] items-center justify-center bg-black sm:min-h-[60vh]">
      <Title
        align="center"
        size="lg"
        weight="normal"
        color="white"
      >
        Find us on social
      </Title>

      <CompanySocials />
    </section>
  );
};
