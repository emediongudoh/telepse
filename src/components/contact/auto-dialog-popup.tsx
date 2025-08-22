"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Third-party imports
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Local imports
import { Paragraph } from "../paragraph";
import { Title } from "../title";

interface AutoDialogPopupProps {
  openChatPopup: () => void;
}

export const AutoDialogPopup = ({ openChatPopup }: AutoDialogPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  useEffect(() => {
    if (!hasAutoOpened) {
      const timeout = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [hasAutoOpened]);

  const handleChatClick = () => {
    setIsOpen(false);
    openChatPopup();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogContent className="overflow-visible border-0 bg-transparent p-0 shadow-none">
        {/* Elliptical container */}
        <div className="relative h-[350px] w-[500px]">
          {/* Yellow ellipse background */}
          <div
            className="absolute inset-0 -rotate-12"
            style={{
              clipPath: "ellipse(50% 50% at 50% 50%)",
              backgroundColor: "#FEE600",
            }}
          />

          {/* Black ellipse on top */}
          <div
            className="absolute inset-1 -rotate-12 overflow-hidden"
            style={{
              clipPath: "ellipse(50% 50% at 50% 50%)",
              backgroundColor: "black",
            }}
          />

          {/* Content wrapper */}
          <div className="relative flex h-full w-full flex-col justify-center px-16 pt-12 text-white">
            <div className="flex max-w-[70%] flex-col items-center gap-2 text-center">
              <Title className="text-brand-yellow">
                Hi there, my name is Vivian by Telepse
              </Title>
              <Paragraph
                size="lg"
                color="white"
                className="leading-normal"
              >
                I am a chatbot at your service. Allow me to identify your
                marketing needs.
              </Paragraph>

              <Button
                variant="primary"
                size="lg"
                className="h-12 w-fit rounded-full text-black"
                onClick={handleChatClick}
              >
                Let&apos;s talk
              </Button>
            </div>

            {/* Robot image wrapper */}
            <div className="absolute right-[-40px] bottom-0 z-10">
              <div className="-translate-y-16">
                <Image
                  src="/Telepse_digital_marketing_agency_lagos_nigeria_vivian_chatbot.png"
                  alt="Telepse_digital_marketing_agency_lagos_nigeria_vivian_chatbot"
                  width={500}
                  height={500}
                  className="h-96 w-72 scale-x-100 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Close button */}
          <button
            className="absolute top-4 -right-8 z-50 cursor-pointer rounded-full border-4 border-[#FEE600] bg-black p-3.5 text-2xl text-white"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
