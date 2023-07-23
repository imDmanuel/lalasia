import { IProduct } from "@/types";
import { ProducItem } from "./ProductItem";
import { products as mockProducts } from "@/mock-data";
import Link from "next/link";

export const ProductList: React.FC = function ({}) {
  const products: IProduct[] = mockProducts;
  return (
    <div className="overflow-hidden">
      <div className="flex space-x-7">
        {products.map((product) => (
          <Link
            className="min-w-fit"
            key={product.id}
            href={`/product/${product.id}`}
          >
            <ProducItem key={product.id} {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
