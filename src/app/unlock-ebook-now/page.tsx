import Image from "next/image";

// Local imports
import { Paragraph } from "@/components/paragraph";
import { Title } from "@/components/title";
import { EbookForm } from "@/components/unlock/ebook-form";

export default function UnlockEbookNow() {
  return (
    <section className="bg-brand-yellow">
      <div className="wrapper grid min-h-screen grid-cols-1 items-center gap-8 p-4 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <Title size="lg">Unlock free ebook</Title>

          <Paragraph
            size="xl"
            weight="bold"
            className="flex items-center gap-2"
          >
            <Image
              src="/Telepse_digital_marketing_agency_lagos_nigeria_ebook.png"
              alt="Telepse_digital_marketing_agency_lagos_nigeria_ebook"
              width={250}
              height={250}
              className="size-20 object-cover sm:size-40"
            />{" "}
            6 hacks for 2026 marketing
          </Paragraph>
        </div>

        <EbookForm />
      </div>
    </section>
  );
}
