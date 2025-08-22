import { products } from "@/constants";
import { ProductCard } from "./product-card";

interface ProductListProps {
  openDialog: () => void;
}

export const ProductList = ({ openDialog }: ProductListProps) => {
  return (
    <section className="mt-12 flex flex-col gap-24">
      {products.map((item, index) => (
        <ProductCard
          key={index}
          name={item.name}
          image={item.image}
          desc={item.desc}
          href={item.href}
          hasArrow={item.hasArrow}
          openDialog={openDialog}
        />
      ))}
    </section>
  );
};
