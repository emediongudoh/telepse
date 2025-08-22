import { Title } from "../title";

interface FooterSectionProps {
  title?: string;
  children: React.ReactNode;
}

export const FooterSection = ({ title, children }: FooterSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Title
        size="sm"
        weight="bold"
      >
        {title || ""}
      </Title>
      {children}
    </div>
  );
};
