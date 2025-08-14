"use client";

import { useState } from "react";
import { PageBanner } from "@/components/page-banner";
import { ProductHeading } from "@/components/products/product-heading";
import { ProductList } from "@/components/products/product-list";
import { ManualDialogPopup } from "@/components/contact/manual-dialog-popup";
import { PageBlock } from "@/components/page-block";

export default function ProductsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  // const closeDialog = () => setIsDialogOpen(false);

  return (
    <section
      style={{ backgroundImage: `url(/home-bg.jpg)` }}
      className="flex min-h-screen flex-col gap-12 bg-cover bg-scroll bg-center bg-no-repeat"
    >
      <PageBanner title="Our Tech Products" />
      <ProductHeading />
      <ProductList openDialog={openDialog} />

      {/* Page block */}
      <PageBlock
        title="Got an idea? "
        subtitle="Speak with us to design a product requirement structure for your dev and design team."
        btnText="Speak with us"
      />

      <ManualDialogPopup
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        openChatPopup={() => console.log("Start chat flow here")}
      />
    </section>
  );
}
