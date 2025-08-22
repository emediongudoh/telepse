import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

// Local imports
import { CompanySocialIcon } from "./company-social-icon";

export const CompanySocials = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <CompanySocialIcon
        Icon={CiInstagram}
        href="https://www.instagram.com/telepsecompany/"
      />
      <CompanySocialIcon
        Icon={CiLinkedin}
        href="https://www.linkedin.com/company/telepsegroup"
      />
      <CompanySocialIcon
        Icon={CiFacebook}
        href="https://web.facebook.com/telepsecompany"
      />
      <CompanySocialIcon
        Icon={FaXTwitter}
        href="https://x.com/TelepseCompany"
      />
    </div>
  );
};
