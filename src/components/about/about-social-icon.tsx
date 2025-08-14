interface AboutSocialIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  href: string;
}

export const AboutSocialIcon = ({
  Icon,
  label,
  href,
}: AboutSocialIconProps) => {
  return (
    <a
      className="flex items-center gap-2 text-white hover:underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer hover:bg-[#F5B341]"
    >
      <Icon className="size-24" /> {label}
    </a>
  );
};
