import { ProducItem } from "@/components/ProductItem";
import { products } from "@/mock-data";

export const AllProductList: React.FC = function () {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7">
        {products.map((product) => (
          <ProducItem key={product.name} {...product} />
        ))}
      </div>

      {/* TODO: CREATE PAGINATION COMPONENT */}
      <div>
        <div></div>
      </div>
    </>
  );
};
