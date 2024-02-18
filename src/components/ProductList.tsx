"use client";

import { IProduct } from "@/types";
import { ProducItem } from "./ProductItem";
import { products as mockProducts } from "@/mock-data";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";

export const ProductList: React.FC<{ products: IProduct[] }> = function ({
  products,
}) {
  // const products: IProduct[] = mockProducts;
  const productImageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // hardcodning the min width
  const imageMinWidth = 220;
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    // Calculate slidesperview and add a resize event handler to calculate it on resize
    calculateSlidesPerView();

    window.addEventListener("resize", calculateSlidesPerView);

    return () => window.removeEventListener("resize", calculateSlidesPerView);
  }, []);

  const calculateSlidesPerView = () => {
    const slideItemWidth =
      productImageRef.current?.offsetWidth || imageMinWidth;
    // if (slideItemWidth < imageMinWidth) {
    //   slideItemWidth = imageMinWidth;
    // }
    const containerWidth = containerRef.current?.offsetWidth || 1;

    // calculate the slides per view
    let slidesPerView = Math.round(containerWidth / slideItemWidth);
    slidesPerView = slidesPerView - 0.5;
    setSlidesPerView(slidesPerView);
    // console.table({ slideItemWidth, containerWidth, slidesPerView });
  };

  return (
    <div className="overflow-hidden" ref={containerRef}>
      {/* <div className="flex space-x-7"> */}
      <Swiper
        spaceBetween={28}
        slidesPerView={slidesPerView}
        breakpoints={
          {
            // 640: {},
            // 768: {},
            // 1024: {
            //   slidesPerView: 3.5,
            // },
            // 1280: {
            //   slidesPerView: 6.5,
            // },
            // 1536: {},
          }
        }
      >
        {products.map((product) => (
          <SwiperSlide
            key={product._id}
            className="shrink-0 basis-56 2xl:basis-96"
          >
            <Link className="min-w-fit" href={`/products/${product._id}`}>
              <ProducItem
                ref={productImageRef}
                key={product._id}
                {...product}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </div>
  );
};
