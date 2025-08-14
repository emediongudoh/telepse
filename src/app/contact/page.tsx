"use client";

import { useState } from "react";

// Local imports
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { SvgPattern } from "@/components/svg-pattern";
import { AutoDialogPopup } from "@/components/contact/auto-dialog-popup";
import { AutoChatPopup } from "@/components/contact/auto-chat-popup";
import { BigTitle } from "@/components/big-title";
import { ContactSocials } from "@/components/contact/contact-socials";

export default function ContactPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChatPopup = () => setIsChatOpen(true);

  return (
    <>
      <section
        style={{
          backgroundImage: `url(/home-bg.jpg)`,
        }}
        className="relative flex min-h-[80vh] flex-col items-center justify-center bg-cover bg-scroll bg-center bg-no-repeat"
      >
        <SvgPattern fill="#FFF" />

        <div className="mx-auto my-8 flex max-w-4xl flex-col items-center gap-8 p-4">
          <BigTitle title="Get in touch with us" />

          <ContactInfo />

          <ContactSocials />

          <ContactForm />
        </div>

        <AutoChatPopup
          isOpen={isChatOpen}
          setIsOpen={setIsChatOpen}
        />
        <AutoDialogPopup openChatPopup={openChatPopup} />
      </section>

      <div className="h-20 bg-white" />
    </>
  );
}
