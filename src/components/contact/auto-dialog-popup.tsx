"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Third-party imports
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Local imports
import { SmallTitle } from "../small-title";

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
              <SmallTitle
                title="Hi there, my name is Vivian by Telepse"
                className="text-[#FEE600]"
              />
              <p className="text-lg">
                I am a chatbot at your service. Allow me to identify your
                marketing needs.
              </p>
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
                  src="/1d8f84ae-4b48-4d38-aa64-1a1b2adf43f2-removebg-preview.png"
                  alt="Vivian bot"
                  width={400}
                  height={400}
                  className="h-96 w-72 -scale-x-100 object-contain"
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
