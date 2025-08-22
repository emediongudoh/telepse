import { FAQS } from "@/constants";
import { Title } from "../title";
import { Paragraph } from "../paragraph";

export const FAQList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {FAQS.map((item, index) => (
        <div
          key={index}
          className="space-y-4"
        >
          <div className="border-l-4 border-l-white px-4">
            <Title>{item.title}</Title>
          </div>

          <Paragraph size="lg">{item.desc}</Paragraph>
        </div>
      ))}
    </div>
  );
};
