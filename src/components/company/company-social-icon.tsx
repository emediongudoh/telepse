interface CompanySocialIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
}

export const CompanySocialIcon = ({ Icon, href }: CompanySocialIconProps) => {
  return (
    <a
      className="transform text-white transition duration-300 hover:scale-110"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="size-12 sm:size-24" />
    </a>
  );
};
