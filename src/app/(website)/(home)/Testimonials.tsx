"use client";

import { testimonials } from "@/mock-data";
import { ITestimonial } from "@/types";
import Image from "next/image";
import starIcon from "@/assets/images/star-icon.png";
import quoteIcon from "@/assets/images/quotes-icon.svg";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { useDynamicSlidesPerView } from "@/hooks/dynamic-slides";
import { useRef } from "react";

export const Testimonials: React.FC = function () {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const slidesPerView = useDynamicSlidesPerView({
    containerRef,
    itemRef,
  });

  return (
    // TESTIMONIAL SLIDER CONTAINER
    <div className="overflow-hidden" ref={containerRef}>
      {/* TESTIMONIAL SLIDER */}
      {/* <div className="flex space-x-8"> */}
      <Swiper
        slidesPerView={1.3}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2.3,
          },
          768: {
            slidesPerView: 2.8,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
      >
        {testimonials.map(({ name, content, rating, image }) => (
          <SwiperSlide
            key={`${name}-${rating}`}
            className="sm:max-w-xs 2xl:max-w-lg"
          >
            <Testimonial
              name={name}
              content={content}
              rating={rating}
              image={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

const Testimonial: React.FC<ITestimonial> = function ({
  content,
  name,
  rating,
  image,
}) {
  return (
    <div className="2xl:p-8 p-4 shadow w-full">
      {/* Quote Icon */}
      <Image className="2xl:w-10 aspect-square w-8" src={quoteIcon} alt="" />
      {/* Content */}
      <p className="2xl:py-6 py-3 max-2xl:paragraph-1">{content}</p>

      {/* Person details */}
      <div className="flex items-center gap-3">
        {/* Image */}
        <div className="relative overflow-hidden rounded-full aspect-square 2xl:w-12 w-7">
          <Image className="object-cover" src={image} alt="" fill />
        </div>
        {/* Name */}
        <div className="font-bold 2xl:text-xl text-title text-sm min-w-fit">
          {name}
        </div>
        {/* Rating */}
        <div className="flex items-center ml-auto space-x-2 sm:pl-7">
          {/* Star Icon */}
          <Image className="w-6 aspect-square" src={starIcon} alt="" />
          <div className="font-bold 2xl:text-lg text-title text-sm">
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

Testimonial.displayName = "Testimonial";
