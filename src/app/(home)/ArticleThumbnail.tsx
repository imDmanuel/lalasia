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
    <div className="flex space-x-3 xl:space-x-12 items-center">
      <Image
        className="object-cover xl:w-[260px] w-[110px] aspect-square"
        src={image}
        alt=""
        width={260}
        height={260}
      />

      <div>
        <div className="xl:paragraph-3 text-sm text-paragraph-600">
          {category}
        </div>
        <div className="text-base xl:header-3 font-bold text-title-600 xl:mt-5 xl:mb-3 mt-1 mb-4">
          {title}
        </div>
        <p className="hidden xl:paragraph-3">{summary}</p>
        <div className="flex space-x-2 items-center mt-4">
          <Image
            className="xl:w-7 aspect-square rounded-full object-cover"
            src={authorImage}
            alt=""
            width={28}
            height={28}
          />
          <div className="xl:header-6p truncate text-sm font-bold">
            By {author}
          </div>
          <p className="min-w-fit self-end hidden">{date}</p>
        </div>
      </div>
    </div>
  );
};
