import { NextPage } from "next";
import Image from "next/image";
import heroImage from "@/assets/images/product-page-hero-image.png";
import { SearchProperty } from "@/components/SearchProperty";
import filterIcon from "@/assets/images/filter-icon.svg";
import sortIcon from "@/assets/images/sort-icon.svg";
import { Suspense } from "react";
import { AllProductList } from "./AllProductList";
import { groq } from "next-sanity";
import { getClient } from "../../../../sanity/lib/client";
import { IProduct } from "@/types";
import { toast } from "react-hot-toast";

const initialProductsQuery = groq`*[_type=="products"][0...8]{
  _id, name, image, overview, detail, price,
  "category": category->name

}
`;

const productsCountQuery = groq`count(*[_type=="products"])`;

export default async function ProductPage() {
  let products: IProduct[] | null = [];
  try {
    products = await getClient().fetch<IProduct[]>(initialProductsQuery);
  } catch (e) {
    // TODO: SHOW ERROR MESSAGE
    products = null;
  }

  let totalProductsCount: string = "0";

  try {
    totalProductsCount = await getClient().fetch<string>(productsCountQuery);
  } catch (e) {
    // TODO: SHOW ERROR MESSAGE
  }

  return (
    <>
      <header className="xlmt-24 mt-12">
        <h1 className="max-xl:header-3p text-center">Products</h1>
        <p className="mx-auto mb-12 mt-5 max-w-xl text-center max-xl:text-sm 2xl:mb-24">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
        {/* TODO: IMPLEMENT INTO A SLIDER */}
        <div className="relative">
          <Image
            className="absolute inset-0 bottom-0 left-0 right-0 top-0 -z-10 h-full w-full object-cover"
            src={heroImage}
            alt=""
          />

          {/* TODO: ADD GRADIENT OVERLAY */}
          <div className="bg-gradient-overlay absolute inset-0 -z-10"></div>
          <div className="flex items-center pb-7 pt-10 text-white 2xl:pb-40 2xl:pt-36">
            <div>
              <div className="inline-block rounded-full bg-primary px-3 py-1 text-[0.625rem] font-medium 2xl:px-4 2xl:py-2 2xl:text-sm">
                Discount
              </div>

              <h2 className="mb-1 mt-3 text-white max-xl:text-base 2xl:mb-5 2xl:mt-4">
                Ramadhan Sale Offer
              </h2>

              <div className="header-3 max-2xl:text-sm">
                Get 40% off for the first transaction on Lalasia
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="mt-12 2xl:mt-24">
          <div className="container">
            <div className="flex space-x-5">
              {/* TODO: IMPLEMENT SEARCH FILTERING */}
              <SearchProperty buttonText="Find Now" />

              {/* Filter button */}
              <button className="flex items-center space-x-3 bg-white px-10 py-5 shadow max-2xl:hidden">
                <Image src={filterIcon} alt="" className="w-4" />
                <div className="text-base">Filter</div>
              </button>
            </div>
          </div>
        </section>

        <section className="mt-7 2xl:mt-24">
          <div className="container">
            {/* SECTION HEADER */}
            <div className="mb-8 flex justify-between 2xl:mb-24">
              <h2 className="flex items-center max-xl:text-lg ">
                Total Products{" "}
                <span className="ml-3 inline-block rounded-full bg-placeholder px-3 py-0.5 text-sm font-bold text-primary 2xl:px-4 2xl:py-1 2xl:text-base">
                  {totalProductsCount}
                </span>
              </h2>

              <button className="flex items-center space-x-1 bg-placeholder px-3 py-2 text-sm text-title shadow 2xl:space-x-3 2xl:px-5 2xl:py-3 2xl:text-base">
                <Image
                  className="aspect-square w-4 2xl:w-6"
                  src={sortIcon}
                  alt=""
                />
                <div className="text-sm 2xl:text-base">Sort By</div>
              </button>
            </div>

            {/* TODO: REPLACE THE LOADING TEXT WITH LOADING SKELETON */}
            <Suspense fallback={<div>Loading...</div>}>
              <AllProductList
                initialData={products}
                totalProductsCount={Number(totalProductsCount)}
              />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}
