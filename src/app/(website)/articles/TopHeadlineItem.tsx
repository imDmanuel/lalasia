import { IArticleThumbnail } from "@/types";
import Image from "next/image";
import React, { forwardRef } from "react";
import { urlForImage } from "../../../../sanity/lib/image";

const TopHeadlineItem = forwardRef<
  HTMLDivElement,
  { article: IArticleThumbnail }
>(function ({ article }, ref) {
  return (
    <div className="w-full" ref={ref}>
      <Image
        className="h-[180px] w-[327px] object-cover 2xl:h-[340px] 2xl:w-[605px]"
        src={urlForImage(article.coverImage).url()}
        alt=""
        width={605}
        height={340}
      />
      <div className="mt-4 text-[0.75rem] font-medium text-paragraph 2xl:mb-2 2xl:mt-5 2xl:text-lg">
        {article.categories
          .map((category) => {
            return category.name;
          })
          .join(", ")}
      </div>
      <h3 className="max-xl:text-sm">{article.title}</h3>
      <p className="mb-3 mt-2 text-ellipsis text-paragraph max-2xl:text-[0.75rem] 2xl:mb-4 2xl:mt-3">
        {article.excerpt}
      </p>

      <div className="flex items-center text-[0.75rem] 2xl:text-sm">
        <Image
          className="aspect-square w-5 rounded-full object-cover 2xl:w-[28px]"
          src={urlForImage(article.authorImage).url()}
          alt=""
          width={28}
          height={28}
        />

        <div className="truncate pl-2 pr-6 font-bold text-title">
          By {article.author.name}
        </div>

        <div className="truncate text-paragraph">{article.date}</div>
      </div>
    </div>
  );
});

TopHeadlineItem.displayName = "TopHeadlineItem";

export { TopHeadlineItem };
