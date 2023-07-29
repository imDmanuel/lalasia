import { IArticleThumbnail } from "@/types";
import Image from "next/image";

export const ArticleThumbnail: React.FC<IArticleThumbnail> = function ({
  author,
  category,
  date,
  image,
  summary,
  title,
  authorImage,
}) {
  return (
    <div className="flex space-x-3 2xl:space-x-12 items-center">
      <Image
        className="object-cover 2xl:w-[260px] w-[110px] aspect-square"
        src={image}
        alt=""
        width={260}
        height={260}
      />

      <div>
        <div className="xl:paragraph-3 text-sm text-paragraph">{category}</div>
        {/* TODO: LIMIT NUMBER OF LINES TO 2 */}
        <div className="text-base 2xl:header-3 font-bold text-title 2xl:mt-5 2xl:mb-3 mt-1 mb-4">
          {title}
        </div>
        <p className="max-xl:hidden 2xl:paragraph-3">{summary}</p>
        <div className="flex space-x-2 items-center text-[0.75rem] 2xl:text-sm mt-4">
          <Image
            className="w-4 2xl:w-7 aspect-square rounded-full object-cover"
            src={authorImage}
            alt=""
            width={28}
            height={28}
          />
          <div className="xl:header-6p truncate font-bold">By {author}</div>
          <p className="min-w-fit self-end max-xl:hidden">{date}</p>
        </div>
      </div>
    </div>
  );
};
