import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

// Local imports
import { AboutSocialIcon } from "./about-social-icon";

export const AboutSocials = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <AboutSocialIcon
        Icon={CiInstagram}
        // label="Instagram"
        href="https://www.instagram.com/telepsecompany/"
      />
      <AboutSocialIcon
        Icon={CiLinkedin}
        // label="LinkedIn"
        href="https://www.linkedin.com/company/telepsegroup"
      />
      <AboutSocialIcon
        Icon={CiFacebook}
        // label="Facebook"
        href="https://web.facebook.com/telepsecompany"
      />
      <AboutSocialIcon
        Icon={FaXTwitter}
        // label="Twitter"
        href="https://x.com/TelepseCompany"
      />
    </div>
  );
};
