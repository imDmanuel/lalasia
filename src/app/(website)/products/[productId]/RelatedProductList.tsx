import { IProduct } from "@/types";
import { ProducItem } from "@/components/ProductItem";
import { products as mockProducts } from "@/mock-data";
import Link from "next/link";
import { getClient } from "../../../../../sanity/lib/client";
import { groq } from "next-sanity";

const relatedProductsQuery = groq`*[_type=="products"]{
  _id, name, image, overview, detail, price,
  "category": category->name

}
`;

export const RelatedProductList: React.FC = async function ({}) {
  const relatedProducts = await getRelatedProducts();
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-2 gap-7 md:grid-cols-3">
        {relatedProducts.map((product) => (
          <Link key={product._id} href={`/products/${product._id}`}>
            <ProducItem {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const getRelatedProducts = async () => {
  // TODO: IMPLEMENT RELATED PRODUCTS FETCHING

  return getClient().fetch<IProduct[]>(relatedProductsQuery);
};
