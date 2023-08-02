import { IArticleThumbnail } from "@/types";
import Image from "next/image";
import React, { forwardRef } from "react";

const TopHeadlineItem = forwardRef<HTMLDivElement, IArticleThumbnail>(function (
  { author, authorImage, category, date, image, summary, title },
  ref
) {
  return (
    <div className="w-full" ref={ref}>
      <Image
        className="w-[327px] h-[180px] 2xl:w-[605px] 2xl:h-[340px] object-cover"
        src={image}
        alt=""
        width={605}
        height={340}
      />
      <div className="text-[0.75rem] 2xl:text-lg font-medium text-paragraph mt-4 2xl:mt-5 2xl:mb-2">
        {category}
      </div>
      <h3 className="max-xl:text-sm">{title}</h3>
      <p className="text-paragraph max-2xl:text-[0.75rem] text-ellipsis mt-2 mb-3 2xl:mt-3 2xl:mb-4">
        {summary}
      </p>

      <div className="flex items-center text-[0.75rem] 2xl:text-sm">
        <Image
          className="w-5 2xl:w-[28px] aspect-square rounded-full object-cover"
          src={authorImage}
          alt=""
          width={28}
          height={28}
        />

        <div className="font-bold text-title pl-2 pr-6 truncate">
          By {author}
        </div>

        <div className="text-paragraph truncate">{date}</div>
      </div>
    </div>
  );
});

TopHeadlineItem.displayName = "TopHeadlineItem";

export { TopHeadlineItem };
