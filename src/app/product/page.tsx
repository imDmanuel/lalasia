import { NextPage } from "next";
import Image from "next/image";
import heroImage from "@/assets/images/product-page-hero-image.png";
import { SearchProperty } from "@/components/SearchProperty";
import filterIcon from "@/assets/images/filter-icon.svg";
import sortIcon from "@/assets/images/sort-icon.svg";
import { Suspense } from "react";
import { AllProductList } from "./AllProductList";

const ProductPage: NextPage = function () {
  return (
    <>
      <header className="mt-12 xlmt-24">
        <h1 className="max-xl:header-3p text-center">Products</h1>
        <p className="max-xl:text-sm text-center max-w-xl mx-auto mt-5 mb-12 xl:mb-24">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
        {/* TODO: IMPLEMENT INTO A SLIDER */}
        <div className="relative">
          <Image
            className="object-cover inset-0 top-0 left-0 right-0 bottom-0 w-full h-full absolute -z-10"
            src={heroImage}
            alt=""
          />

          {/* TODO: ADD GRADIENT OVERLAY */}
          <div className="flex items-center xl:pt-36 xl:pb-40 pt-10 pb-7 text-white">
            <div>
              <div className="bg-primary inline-block rounded-full text-[0.625rem] xl:text-sm font-medium xl:py-2 xl:px-4 py-1 px-3">
                Discount
              </div>

              <h2 className="max-xl:text-base text-white mt-3 mb-1 xl:mt-4 xl:mb-5">
                Ramadhan Sale Offer
              </h2>

              <div className="header-3 max-xl:text-sm">
                Get 40% off for the first transaction on Lalasia
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="mt-12 xl:mt-24">
          <div className="container">
            <div className="flex space-x-5">
              <SearchProperty buttonText="Find Now" />

              {/* Filter button */}
              <button className="py-7 bg-white shadow px-14 flex items-center space-x-3 max-xl:hidden">
                <Image src={filterIcon} alt="" />
                <div className="paragraph-3">Filter</div>
              </button>
            </div>
          </div>
        </section>

        <section className="mt-7 xl:mt-24">
          <div className="container">
            {/* SECTION HEADER */}
            <div className="flex justify-between xl:mb-24 mb-8">
              <h2 className="max-xl:text-lg flex items-center ">
                Total Products{" "}
                <span className="ml-3 inline-block text-sm xl:text-base text-primary font-bold px-3 py-0.5 xl:px-4 xl:py-1 rounded-full bg-placeholder">
                  184
                </span>
              </h2>

              <button className="flex space-x-3 text-title bg-placeholder shadow px-5 py-3">
                <Image className="w-6 aspect-square" src={sortIcon} alt="" />
                <div>Sort By</div>
              </button>
            </div>

            {/* TODO: REPLACE THE LOADING TEXT WITH LOADING SKELETON */}
            <Suspense fallback={<div>Loading...</div>}>
              <AllProductList />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductPage;
