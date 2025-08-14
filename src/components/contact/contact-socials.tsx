import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

// Local imports
import { SocialIcon } from "../social-icon";

export const ContactSocials = () => {
  return (
    <div className="flex justify-center gap-4">
      <SocialIcon
        Icon={CiInstagram}
        href="https://www.instagram.com/telepsecompany/"
      />
      <SocialIcon
        Icon={CiLinkedin}
        href="https://www.linkedin.com/company/telepsegroup"
      />
      <SocialIcon
        Icon={CiFacebook}
        href="https://web.facebook.com/telepsecompany"
      />

      <SocialIcon
        Icon={FaXTwitter}
        href="https://x.com/TelepseCompany"
      />
    </div>
  );
};
