import { Paragraph } from "../paragraph";
import { Title } from "../title";

interface ContactItemProps {
  label: string;
  value: string;
}

export const ContactItem = ({ label, value }: ContactItemProps) => {
  return (
    <div className="rounded-2xl bg-white p-6">
      <Title size="sm">{label}</Title>

      <Paragraph size="lg">{value}</Paragraph>
    </div>
  );
};
