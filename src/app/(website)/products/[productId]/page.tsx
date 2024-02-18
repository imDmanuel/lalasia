import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { RelatedProductList } from "./RelatedProductList";
import { urlForImage } from "../../../../../sanity/lib/image";
import { groq } from "next-sanity";
import { getClient } from "../../../../../sanity/lib/client";
import { toast } from "react-hot-toast";

const client = getClient();

const productQuery = groq`*[_type=="products" && _id==$productId][0]{
  _id, name, image, overview, detail, price,
  "category": category->name

}
`;

export default async function ProductDetail({
  params: { productId },
}: {
  params: { productId: string };
}) {
  let product: IProduct | null = null;
  try {
    product = await getProductDetails(productId);
  } catch (e) {
    toast.error(
      "Error fetching product detail. Please refresh the page to try again",
    );
  }

  if (!product) {
    redirect("/not-found");
  }

  return (
    <main>
      <section className="mt-24">
        <div className="xs:space-x-12 container flex flex-col items-center space-x-0 space-y-7 md:flex-row md:space-x-6 md:space-y-0">
          <div className="w-full md:w-1/2">
            <Image
              className="w-full object-cover"
              src={urlForImage(product.image).url()}
              alt=""
              width={600}
              height={600}
            />
          </div>

          <div className="w-full md:w-1/2">
            <div>
              <h2 className="max-xl:text-2xl">White Aesthetic Chair</h2>

              <p className="mb-5 mt-1 text-sm 2xl:mb-7 2xl:mt-3">
                Combination of wood and wool
              </p>

              <h5 className="max-xl:text-sm">Color</h5>

              <div className="mb-5 mt-2 grid grid-cols-[repeat(4,30px)] grid-rows-[30px] 2xl:my-5 2xl:grid-cols-[repeat(4,50px)] 2xl:grid-rows-[50px]">
                <div className="bg-title"></div>
                <div className="bg-[#314443]"></div>
                <div className="bg-[#C5A26E]"></div>
                <div className="bg-[#D8DBE0]"></div>
              </div>

              <p className="max-xl:text-sm">
                Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
                facilisis facilisis ligula felis et a parturient aenean. Ac
                maecenas ultricies felis risus scelerisque duis posuere...
                {/* TODO: THE READMORE SHOULD JUST SHOW MORE DETAILS OF THE TRUNCATED CONTENT */}
                <Link href={"#"}>Read More</Link>
              </p>

              <div className="header-3 2xl:header-2 my-5 2xl:mb-12 2xl:mt-7">
                ${product.price}
              </div>
            </div>

            <div className="flex flex-col space-x-0 space-y-5 md:flex-row md:space-x-5 md:space-y-0">
              <button className="btn btn-primary flex-1">Buy Now</button>
              <button className="btn btn-secondary flex-1">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="mb-8 mt-24 text-lg font-bold 2xl:mb-7 2xl:mt-12 2xl:text-[2rem]">
            Related Items
          </div>

          {/* TODO: IMPLEMENT RELATED PRODUCT LIST */}
          <RelatedProductList />
        </div>
      </section>
    </main>
  );
}

const getProductDetails = async function (productId: IProduct["_id"]) {
  // TODO: IMPLEMENT API CALL
  const product = await client.fetch<IProduct>(productQuery, { productId });

  return product;
};
