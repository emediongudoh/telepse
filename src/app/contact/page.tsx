"use client";

import { useState } from "react";

// Local imports
import { ContactInfo } from "@/components/contact/contact-info";
import { SvgPattern } from "@/components/svg-pattern";
import { AutoDialogPopup } from "@/components/contact/auto-dialog-popup";
import { AutoChatPopup } from "@/components/contact/auto-chat-popup";
import { CompanyPageBlock } from "@/components/company/company-page-block";
import { ContactForm } from "@/components/contact/contact-form";
import { Title } from "@/components/title";

export default function ContactPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChatPopup = () => setIsChatOpen(true);

  return (
    <section className="bg-brand-yellow">
      <SvgPattern fill="#FFF" />

      <div className="section tiny--wrapper">
        <Title
          align="center"
          size="lg"
          weight="normal"
        >
          Get in touch with us
        </Title>

        <ContactInfo />

        <ContactForm />
      </div>

      <CompanyPageBlock />

      <AutoChatPopup
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
      />
      <AutoDialogPopup openChatPopup={openChatPopup} />
    </section>
  );
}
