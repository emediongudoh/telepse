interface SocialIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  href: string;
}

export const SocialIcon = ({ Icon, label, href }: SocialIconProps) => {
  return (
    <a
      className="flex items-center gap-2 text-black hover:underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer hover:bg-[#F5B341]"
    >
      <Icon className="size-7" /> {label}
    </a>
  );
};
