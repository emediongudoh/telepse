import { SvgPattern } from "../svg-pattern";
import { Title } from "../title";
import { FAQList } from "./faq-list";

export const FAQs = () => {
  return (
    <section className="bg-brand-yellow relative py-8">
      <SvgPattern fill="#FFF" />

      <div className="wrapper section">
        <Title
          align="center"
          size="lg"
          weight="normal"
        >
          FAQs
        </Title>

        <FAQList />
      </div>
    </section>
  );
};
