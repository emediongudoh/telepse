import Link from "next/link";

interface LinkItem {
  href: string;
  text: string;
}

interface FooterLinksProps {
  links?: LinkItem[];
}

export const FooterLinks = ({ links }: FooterLinksProps) => {
  return (
    <ul className="flex flex-col gap-4">
      {links?.map((link, index) => (
        <li key={index}>
          <Link
            className="hover:underline"
            href={link.href}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
