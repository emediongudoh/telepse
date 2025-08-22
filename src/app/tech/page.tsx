"use client";

import { useState } from "react";

// Local imports
import { HeroBanner } from "@/components/hero-banner";
import { ProductList } from "@/components/products/product-list";
import { ManualDialogPopup } from "@/components/contact/manual-dialog-popup";
import { PageBlock } from "@/components/page-block";
import { Heading } from "@/components/heading";

export default function TechPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);

  return (
    <section className="bg-brand-yellow flex flex-col gap-12">
      <HeroBanner
        image="/Telepse_digital_marketing_agency_lagos_nigeria_tech_banner.jpg"
        title="Our Tech Products"
      />

      <Heading
        title="Moving ideas to products"
        text="We have designed product requirements for our internal clients below:"
      />

      <ProductList openDialog={openDialog} />

      {/* Page block */}
      <PageBlock
        title="Got an idea? "
        btnText="Speak with us"
      >
        Speak with us to design a product requirement structure <br /> for your
        dev and design team.
      </PageBlock>

      <ManualDialogPopup
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        openChatPopup={() => console.log("Start chat flow here")}
      />
    </section>
  );
}
