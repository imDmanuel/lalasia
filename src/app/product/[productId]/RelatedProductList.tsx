import { IProduct } from "@/types";
import { ProducItem } from "@/components/ProductItem";
import { products as mockProducts } from "@/mock-data";
import Link from "next/link";

export const RelatedProductList: React.FC = function ({}) {
  const products: IProduct[] = [...mockProducts].splice(0, 4);
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <ProducItem {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
