"use client";

import { useEffect, useState } from "react";

// Third-party imports
import { Dialog } from "@headlessui/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { X, MessageCircle, Send } from "lucide-react";

interface AutoChatPopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const AutoChatPopup = ({ isOpen, setIsOpen }: AutoChatPopupProps) => {
  const [step, setStep] = useState(0);
  const [businessName, setBusinessName] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [email, setEmail] = useState("");
  const [chatLog, setChatLog] = useState<
    { sender: "bot" | "user"; message: string }[]
  >([]);

  const steps = [
    {
      message:
        "Hi there, my name is Vivian by Telepse. I am a bot at your service. Allow me to identify your marketing needs.\n\nPlease tell me, what is the name of your business?",
      input: true,
      onSubmit: (val: string) => setBusinessName(val),
    },
    {
      message: (name: string) =>
        `Good to meet you, ${name}.\nPlease select the services you require:`,
      options: [
        "Content Marketing",
        "Social Media Marketing",
        "Digital Marketing",
        "Digital Technology",
      ],
    },
    {
      message: "Do you require any other service?",
      options: ["Yes", "No"],
    },
    {
      message:
        "Your responses have been helpful. Finally, please tell me your marketing audience:",
      options: ["Businesses", "Customers", "Both"],
    },
    {
      message:
        "Our team is happy to help. You will be contacted. Enter your email below:",
      input: true,
      onSubmit: (val: string) => setEmail(val),
    },
    {
      message: (name: string) =>
        `Hello ${name}. It's been great chatting. I will now direct you to book a free session with our team. You may be contacted before the session to assist us with more information.`,
      final: true,
    },
  ];

  const current = steps[step];

  const handleSubmit = (value: string) => {
    if (current.onSubmit) current.onSubmit(value);

    const next = steps[step + 1];
    const nextMessage =
      typeof next?.message === "function"
        ? next.message(businessName)
        : next?.message || "";

    setChatLog(prev => [
      ...prev,
      { sender: "user", message: value },
      { sender: "bot", message: nextMessage },
    ]);

    setStep(s => s + 1);
  };

  useEffect(() => {
    if (isOpen && chatLog.length === 0) {
      const first = steps[0];
      setChatLog([{ sender: "bot", message: first.message as string }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, chatLog.length]);

  return (
    <>
      {/* Chat bubble icon when closed */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="fixed right-4 bottom-4 z-50 cursor-pointer rounded-full bg-[#F5B341] p-3.5 shadow transition hover:bg-[#F5B341]/80"
        >
          <MessageCircle className="size-6" />
        </button>
      )}

      {/* Chat dialog */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="hide__scrollbar fixed right-4 bottom-20 z-50"
      >
        <div className="hide__scrollbar flex max-h-[80vh] w-96 flex-col gap-4 overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4 shadow">
          {/* Close icon (same spot as chat icon) */}
          <button
            onClick={() => setIsOpen(false)}
            className="fixed right-4 bottom-4 z-50 cursor-pointer rounded-full bg-white p-3.5 text-gray-800 shadow transition hover:bg-[#E6F0DD]"
          >
            <X className="size-6" />
          </button>

          {/* Message history */}
          <div className="flex flex-col gap-2">
            {chatLog.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] rounded-xl px-3 py-2 whitespace-pre-wrap ${
                  msg.sender === "bot"
                    ? "self-start bg-gray-100 text-left"
                    : "self-end bg-[#F5B341] text-black"
                }`}
              >
                {msg.message}
              </div>
            ))}
          </div>

          {/* Input or options */}
          {!current.final && current.input && (
            <form
              onSubmit={e => {
                e.preventDefault();
                const val = e.currentTarget.text.value;
                handleSubmit(val);
                e.currentTarget.reset();
              }}
              className="flex gap-2"
            >
              <Input
                placeholder="Type your message here..."
                autoComplete="off"
                type={step === 4 ? "email" : "text"}
                name="text"
                className="h-12 flex-1 focus:ring-black"
                required
              />
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="h-12"
              >
                Send <Send />{" "}
              </Button>
            </form>
          )}

          {current.options && (
            <div className="flex flex-wrap gap-2">
              {current.options.map(opt => (
                <Button
                  key={opt}
                  onClick={() => handleSubmit(opt)}
                  variant="secondary"
                >
                  {opt}
                </Button>
              ))}
            </div>
          )}

          {current.final && (
            <div className="text-right">
              <a
                href="https://calendly.com/emediong5135/30min"
                className="font-semibold underline"
              >
                Book free strategy session
              </a>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
};
