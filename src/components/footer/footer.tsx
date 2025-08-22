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
import { Paragraph } from "../paragraph";
import { Mail, MapPinHouse, Phone } from "lucide-react";

const servicesLinks = [
  { href: "/case-study", text: "Case Study" },
  { href: "/music", text: "Music" },
  { href: "/blog", text: "Blog" },
];

export const Footer = () => {
  return (
    <section className="bg-brand-yellow">
      <footer className="wrapper section p-4 sm:py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Telepse */}
          <div className="flex max-w-[400px] flex-col">
            <div className="w-fit">
              <Logo />
            </div>
            <Link
              href="/about"
              className="text-xl font-semibold hover:underline"
            >
              <Paragraph weight="bold">
                Telepse Digital Marketing and Tech
              </Paragraph>
            </Link>
            <p className="text-md -mt-2 leading-relaxed break-words whitespace-normal">
              Telepse means creative! We are a digital marketing agency trusted
              by SMEs for strategies that work. We also develop product
              requirements for tech startups.
            </p>
            {/* <Paragraph size="sm">
              
            </Paragraph> */}

            <div className="mt-2 flex flex-wrap gap-4">
              <Paragraph>
                <a
                  href="mailto:services@telepse.com"
                  className="flex items-center gap-2"
                >
                  <Mail /> services@telepse.com
                </a>
              </Paragraph>
              <Paragraph>
                <a
                  href="tel:+2348107352681"
                  className="flex items-center gap-2"
                >
                  <Phone /> (+234) 8107352681
                </a>
              </Paragraph>
            </div>

            <Paragraph className="flex items-center gap-2">
              <MapPinHouse /> 10, Surulere street, Oworo, Lagos, Nigeria
            </Paragraph>
          </div>

          {/* Extras */}
          <div className="mt-18 grid grid-cols-12 gap-4">
            <div className="col-span-full md:col-span-4">
              <FooterSection title="Extras">
                <FooterLinks links={servicesLinks} />
              </FooterSection>
            </div>

            <div className="col-span-full flex flex-col items-end gap-4 md:col-span-8">
              <NewsletterForm />

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
        </div>
      </footer>
    </section>
  );
};
