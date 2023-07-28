import { products } from "@/mock-data";
import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { RelatedProductList } from "./RelatedProductList";

const ProductDetail = async function ({
  params: { productId = undefined },
}: {
  params: { productId: string | undefined };
}) {
  const product = await getProductDetails(Number(productId));
  if (!product) {
    redirect("/not-found");
  }

  return (
    <main>
      <section className="mt-24">
        <div className="container flex flex-col md:flex-row items-center xs:space-x-12 md:space-x-6 space-x-0 space-y-7 md:space-y-0">
          <div className="w-full md:w-1/2">
            <Image
              className="object-cover w-full"
              src={product?.image}
              alt=""
              width={600}
              height={600}
            />
          </div>

          <div className="w-full md:w-1/2">
            <div>
              <h2 className="max-xl:text-2xl">White Aesthetic Chair</h2>

              <p className="mt-1 mb-5 xl:mt-3 xl:mb-7 text-sm">
                Combination of wood and wool
              </p>

              <h5 className="max-xl:text-sm">Color</h5>

              <div className="mt-2 mb-5 xl:my-5 grid grid-cols-[repeat(4,30px)] grid-rows-[30px] xl:grid-cols-[repeat(4,50px)] xl:grid-rows-[50px]">
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

              <div className="header-3 xl:header-2 my-5 xl:mt-7 xl:mb-12">
                ${product.price}
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0">
              <button className="btn btn-primary flex-1">Buy Now</button>
              <button className="btn btn-secondary flex-1">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-lg xl:text-[2rem] font-bold mt-24 mb-8 xl:mt-12 xl:mb-7">
            Related Items
          </div>

          {/* TODO: IMPLEMENT RELATED PRODUCT LIST */}
          <RelatedProductList />
        </div>
      </section>
    </main>
  );
};

const getProductDetails = async function (productId: IProduct["id"]) {
  // TODO: IMPLEMENT API CALL
  return products.find(({ id }) => productId == id);
};

export default ProductDetail;
