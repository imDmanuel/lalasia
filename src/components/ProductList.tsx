import { IProduct } from "@/types";
import { ProducItem } from "./ProductItem";
import { products as mockProducts } from "@/mock-data";

export const ProductList: React.FC = function ({}) {
  const products: IProduct[] = mockProducts;
  return (
    <div className="overflow-hidden">
      <div className="flex space-x-7">
        {products.map(({ category, description, image, name, price }) => (
          <ProducItem
            key={name}
            category={category}
            image={image}
            name={name}
            price={price}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};
