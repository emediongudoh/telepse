import Image from "next/image";

// Third-party imports
import PhoneInput from "react-phone-input-2";
import { Button } from "../ui/button";

// Local imports
import { Title } from "../title";

export const WhatsappForm = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/Telepse_digital_marketing_agency_lagos_nigeria_frame_8.jpg)`,
      }}
      className="absolute top-0 left-1/2 mx-auto flex min-h-[35vh] w-full max-w-5xl -translate-x-1/2 -translate-y-1/4 flex-col items-center justify-center gap-8 rounded-2xl bg-cover bg-center sm:flex-row"
    >
      <div className="flex items-center gap-2">
        <Image
          src="/Telepse_digital_marketing_agency_lagos_nigeria_whatsapp.png"
          alt="Telepse_digital_marketing_agency_lagos_nigeria_whatsapp"
          width={100}
          height={100}
          className="size-12 object-cover invert sm:size-24"
        />

        <Title color="white">Request a call</Title>
      </div>

      <div className="flex flex-col md:flex-row">
        <PhoneInput
          country={"ng"}
          value={""}
          inputProps={{
            name: "phone",
            required: true,
            placeholder: "Enter WhatsApp number",
          }}
          inputStyle={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            width: "100%",
            background: "white",
            color: "black",
            padding: "12px 16px",
          }}
          buttonStyle={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            background: "transparent",
            padding: "12px 16px",
          }}
          containerClass="w-full h-14"
          inputClass="!h-14 !ml-10 !text-base !w-60 p-3 placeholder-gray-600 !sm:rounded-tr-none !sm:rounded-br-none !rounded-none"
          buttonClass="!h-14 !px-1 !border !border-gray-300 !bg-white !rounded-l-none md:!rounded-l-md focus:!outline-none"
          dropdownClass="!bg-white !text-black"
          enableSearch={true}
          disableCountryCode={true}
          disableDropdown={false}
        />
        <Button
          variant="telepse_secondary"
          size="lg"
          className="sm:rounded-;l-none h-14 rounded-none text-black md:rounded-r-md"
        >
          Request
        </Button>
      </div>
    </div>
  );
};
