import { products } from "@/constants";
import { SlickProductCard } from "./slick-product-card";

interface ProductListProps {
  openDialog: () => void;
}

export const ProductList = ({ openDialog }: ProductListProps) => {
  return (
    <section className="flex flex-col gap-12">
      <div className="mt-12 flex flex-col gap-24">
        {products.map((item, index) => (
          <SlickProductCard
            key={index}
            name={item.name}
            image={item.image}
            desc={item.desc}
            href={item.href}
            hasArrow={item.hasArrow}
            openDialog={openDialog}
          />
        ))}
      </div>
    </section>
  );
};
