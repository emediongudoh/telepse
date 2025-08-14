import Link from "next/link";

// Third-party imports
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

// Local imports
import { Logo } from "../menu/logo";
import { NewsletterForm } from "../home/newsletter-form";
import { FooterLinks } from "./footer-links";
import { FooterSection } from "./footer-section";
import { SocialIcon } from "../social-icon";

const servicesLinks = [
  { href: "/case-study", text: "Case Study" },
  { href: "/talent", text: "Talent" },
  { href: "/blog", text: "Blog" },
];

const companyLinks = [
  { href: "/", text: "" },
  // { href: "/about", text: "About Us" },
  // { href: "/products", text: "Tech" },
];

export const Footer = () => {
  return (
    <section className="bg-[#FEE600]">
      <footer className="wrapper section sm:px-4 sm:py-8">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="flex max-w-[350px] flex-col gap-2">
            <div className="w-fit">
              <Logo />
            </div>
            <Link
              href="/about"
              className="text-xl font-semibold hover:underline"
            >
              Telepse Digital Marketing and Tech
            </Link>
            <p className="leading loose">
              Telepse means creative! We are a digital marketing agency trusted
              by SMEs for strategies that work. We also develop product
              requirements for tech startups.
            </p>
          </div>

          <NewsletterForm />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Company */}
          <FooterSection>
            <a href="mailto:services@telepse.com">services@telepse.com</a>
            <a href="tel:+2348107352681">(+234) 8107352681</a>
            <p> 10, Surulere street, oworonshoki, Lagos, Nigeria</p>
            <FooterLinks links={companyLinks} />
          </FooterSection>

          {/* Services */}
          <FooterSection title="Extras">
            <FooterLinks links={servicesLinks} />
          </FooterSection>

          <div className="md:ml-12">
            <FooterSection title="Social Channels">
              {/* Social icons */}
              <div className="flex gap-4">
                <SocialIcon
                  Icon={CiInstagram}
                  // label="Instagram"
                  href="https://www.instagram.com/telepsecompany/"
                />
                <SocialIcon
                  Icon={CiLinkedin}
                  // label="LinkedIn"
                  href="https://www.linkedin.com/company/telepsegroup"
                />
                <SocialIcon
                  Icon={CiFacebook}
                  // label="Facebook"
                  href="https://web.facebook.com/telepsecompany"
                />

                <SocialIcon
                  Icon={FaXTwitter}
                  // label="Twitter"
                  href="https://x.com/TelepseCompany"
                />
              </div>
            </FooterSection>
          </div>
        </div>
      </footer>
    </section>
  );
};
