import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

// Components import
import { Navbar } from "@/components/menu/navbar";
import { Footer } from "@/components/footer/footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Telepse",
  description: "Marketing & Tech Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${leagueSpartan.className} antialised`}
        id="root"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
