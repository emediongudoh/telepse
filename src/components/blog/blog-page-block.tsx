import Image from "next/image";
import Link from "next/link";

// Third-party imports
import { Button } from "../ui/button";
import { BookText, KeySquare } from "lucide-react";

// Local imports
import { Title } from "../title";
import { Paragraph } from "../paragraph";

export const BlogPageBlock = () => {
  return (
    <Link
      href="/unlock-ebook-now"
      className="relative h-80 w-full"
    >
      <Image
        src="/Telepse_digital_marketing_agency_lagos_nigeria_ebook_sales_block.jpg"
        alt="Telepse_digital_marketing_agency_lagos_nigeria_sales_block"
        width={500}
        height={500}
        className="h-80 w-full rounded-2xl object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 rounded-2xl bg-black/60">
        <Title
          align="center"
          weight="bold"
          color="white"
        >
          Unlock your free ebook
        </Title>

        <Paragraph
          align="center"
          size="xl"
          weight="bold"
          color="white"
          className="flex items-center gap-2"
        >
          <BookText /> 6 hacks for 2026 marketing
        </Paragraph>

        <Button
          variant="telepse_secondary"
          size="lg"
        >
          Unlock now <KeySquare />
        </Button>
      </div>
    </Link>
  );
};
