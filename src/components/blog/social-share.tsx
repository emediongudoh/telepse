"use client";

import { usePathname } from "next/navigation";

// Third-party imports
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

// Local imports
import { Paragraph } from "../paragraph";

export const SocialShare = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-8">
      <Paragraph
        size="sm"
        weight="bold"
        className="text-muted-foreground uppercase"
      >
        Share
      </Paragraph>

      <div className="flex items-center gap-4">
        {/* LinkedIn */}
        <LinkedinShareButton url={currentUrl}>
          <LinkedinIcon
            round={false}
            className="size-10 rounded-md sm:size-14"
          />
        </LinkedinShareButton>

        {/* Facebook */}
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon
            round={false}
            className="size-10 rounded-md sm:size-14"
          />
        </FacebookShareButton>

        {/* X (Twitter) */}
        <TwitterShareButton
          url={currentUrl}
          title={title}
        >
          <TwitterIcon
            round={false}
            className="size-10 rounded-md sm:size-14"
          />
        </TwitterShareButton>

        {/* WhatsApp */}
        <WhatsappShareButton
          url={currentUrl}
          title={title}
        >
          <WhatsappIcon
            round={false}
            className="size-10 rounded-md sm:size-14"
          />
        </WhatsappShareButton>

        {/* Email */}
        <EmailShareButton
          url={currentUrl}
          subject={title}
        >
          <EmailIcon
            round={false}
            className="size-10 rounded-md sm:size-14"
          />
        </EmailShareButton>
      </div>
    </div>
  );
};
