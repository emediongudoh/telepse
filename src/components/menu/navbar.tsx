"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Local imports
import { Logo } from "./logo";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isYellowPage =
    pathname === "/" ||
    pathname === "/tech" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/solutions" ||
    pathname === "/music" ||
    pathname === "/unlock-ebook-now";
  pathname.includes("services");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundClass =
    isYellowPage && !isScrolled ? "bg-brand-yellow" : "bg-white shadow";

  return (
    <section className={`sticky top-0 z-50 ${backgroundClass}`}>
      <header className="wrapper flex items-center justify-between px-4 py-3">
        <Logo />

        <DesktopMenu className="hidden items-center gap-6 md:flex" />

        <MobileMenu />
      </header>
    </section>
  );
};
