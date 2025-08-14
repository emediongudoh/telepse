import { contactInfo } from "@/constants";

export const ContactInfo = () => {
  return (
    <section className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
      {contactInfo.map((item, index) => (
        <div
          key={index}
          className="space-y-2 rounded-2xl bg-white p-4 sm:p-8"
        >
          <h2 className="text-xl font-semibold sm:text-2xl">{item.label}</h2>
          <p className="text-lg sm:text-xl">{item.value}</p>
        </div>
      ))}
    </section>
  );
};
