import { IArticleThumbnail } from "@/types";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";

export const ArticleThumbnail: React.FC<IArticleThumbnail> = function ({
  author,
  categories,
  date,
  coverImage,
  excerpt,
  title,
}) {
  return (
    <div className="flex items-center space-x-3 2xl:space-x-12">
      <Image
        className="aspect-square w-[110px] object-cover 2xl:w-[260px]"
        src={urlForImage(coverImage).url()}
        alt=""
        width={260}
        height={260}
      />

      <div>
        <div className="xl:paragraph-3 text-sm text-paragraph">
          {categories.reduce((resolvedString, currentValue, currentIndex) => {
            return currentIndex === 0
              ? currentValue.name
              : `${resolvedString}, ${currentValue.name}`;
          }, "")}
        </div>
        {/* TODO: LIMIT NUMBER OF LINES TO 2 */}
        <div className="2xl:header-3 mb-4 mt-1 text-base font-bold text-title 2xl:mb-3 2xl:mt-5">
          {title}
        </div>
        <p className="2xl:paragraph-3 max-xl:hidden">{excerpt}</p>
        <div className="mt-4 flex items-center space-x-2 text-[0.75rem] 2xl:text-sm">
          <Image
            className="aspect-square w-4 rounded-full object-cover 2xl:w-7"
            src={urlForImage(author.image).url()}
            alt=""
            width={28}
            height={28}
          />
          <div className="xl:header-6p truncate font-bold">
            By {author.name}
          </div>
          <p className="min-w-fit self-end max-2xl:hidden">{date}</p>
        </div>
      </div>
    </div>
  );
};
