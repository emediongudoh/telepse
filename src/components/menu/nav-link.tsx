"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  label: string;
  href: string;
}

export const NavLink = ({ label, href }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:bg-secondary rounded-md px-2 py-1.5 font-medium ${isActive && "bg-secondary"}`}
    >
      {label}
    </Link>
  );
};
