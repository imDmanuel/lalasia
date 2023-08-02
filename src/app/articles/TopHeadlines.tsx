"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { TopHeadlineItem } from "./TopHeadlineItem";
import { articles } from "@/mock-data";
import { useDynamicSlidesPerView } from "@/hooks/dynamic-slides";
import { useRef } from "react";

const TopHeadlines = function () {
  const itemRef = useRef(null);
  const containerRef = useRef(null);
  return (
    <div className="overflow-hidden">
      {/* <div className="flex space-x-7 2xl:space-y-7"> */}
      <Swiper
        slidesPerView={1.2}
        ref={containerRef}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2.3,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
      >
        {articles.map((article) => (
          <SwiperSlide key={`${article.title}-${article.author}`}>
            <TopHeadlineItem {...article} ref={itemRef} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export { TopHeadlines };
