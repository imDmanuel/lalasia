"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { TopHeadlineItem } from "./TopHeadlineItem";
// import { articles } from "@/mock-data";
import { useRef } from "react";
import { IArticleThumbnail } from "@/types";
import { toast } from "react-hot-toast";

const TopHeadlines: React.FC<{ articles: IArticleThumbnail[] | null }> =
  function ({ articles }) {
    if (articles == null) {
      toast.error("Unable to fetch top headline items");
    }
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
          {articles?.map((article) => (
            <SwiperSlide key={`${article.title}-${article.author}`}>
              <TopHeadlineItem article={article} ref={itemRef} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    );
  };

export { TopHeadlines };
