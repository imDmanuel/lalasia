import { IArticleThumbnail } from "@/types";
import Image from "next/image";
import React from "react";

export const TopHeadlineItem: React.FC<IArticleThumbnail> = function ({
  author,
  authorImage,
  category,
  date,
  image,
  summary,
  title,
}) {
  return (
    <div className="min-w-fit">
      <Image
        className="w-[327px] h-[180px] xl:w-[605px] xl:h-[340px] object-cover"
        src={image}
        alt=""
        width={605}
        height={340}
      />
      <div className="text-[0.75rem] xl:text-lg font-medium text-paragraph mt-4 xl:mt-5 xl:mb-2">
        {category}
      </div>
      <h3 className="max-xl:text-sm">{title}</h3>
      <p className="text-paragraph max-xl:text-[0.75rem] text-ellipsis mt-2 mb-3 xl:mt-3 xl:mb-4">
        {summary}
      </p>

      <div className="flex items-center text-[0.75rem] xl:text-sm">
        <Image
          className="w-5 xl:w-[28px] aspect-square rounded-full object-cover"
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
};
