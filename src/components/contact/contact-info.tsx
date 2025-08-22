import { CONTACT_INFO } from "@/constants";
import { ContactItem } from "./contact-item";

export const ContactInfo = () => {
  return (
    <section className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
      {CONTACT_INFO.map((item, index) => (
        <ContactItem
          key={index}
          label={item.label}
          value={item.value}
        />
      ))}
    </section>
  );
};
