import Image from "next/image";
import { TopHeadlineItem } from "./TopHeadlineItem";
import { articleCategories, articles } from "@/mock-data";
import { ArticleThumbnail } from "../(home)/ArticleThumbnail";
import arrowRightIcon from "@/assets/images/arrow-right-icon.svg";

const ArticlePage: React.FC = function () {
  return (
    <>
      <header className="xl:mt-24 mt-12">
        <div className="container">
          <div className="relative">
            <h1 className="text-center max-xl:text-2xl">Article</h1>
            <p className="text-center max-w-xl mx-auto mt-5 mb-7 xl:mb-12 max-xl:text-sm">
              We display products based on the latest products we have, if you
              want to see our old products please enter the name of the item
            </p>

            {/* TODO: CONVERT SINGLE IMAGE TO SLIDER ALSO THE IMAGES IN THE SLIDER SHOULD CHANGE DEPENDING ON THE SCREEN SIZE, LOOK UP IMAGE SRCSET */}
            <Image
              src={"/assets/images/article-hero.png"}
              width={1240}
              height={550}
              alt=""
            />

            <div className="text-title bg-white xl:max-w-5xl mx-auto p-4 xl:py-12 xl:px-10 absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%_-_(2_*_18px))] xl:w-full translate-y-1/2 shadow-md">
              <div className="xl:text-lg font-medium text-[0.625rem] text-paragraph">
                Tips and Trick
              </div>
              <div className="font-bold text-sm xl:text-2xl max-w-3xl mt-1 mb-2 xl:mt-2 xl:mb-4">
                This 400-Square-Foot New York Apartment Is Maximized With Custom
                Millwork
              </div>

              {/* TODO: CONVERT TO SHORT DATE */}
              <div className="flex items-center text-[0.75rem] xl:text-sm ">
                <Image
                  className="rounded-full aspect-square"
                  src={"/assets/images/article-author.png"}
                  alt=""
                  width={28}
                  height={28}
                />
                <div className="font-bold ml-2 mr-6 truncate">
                  By Morgan Goldberg
                </div>
                <div className="font-medium text-paragraph truncate">
                  Tuesday, 17 May 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="mt-48">
          <div className="container">
            <h5 className="font-bold text-lg text-secondary max-xl:text-sm">
              Daily News
            </h5>
            <h2 className="mt-3 mb-7 max-xl:text-2xl">Today top headlines</h2>

            {/* TOP HEADLINES GALLERY */}
            {/* TODO: MAKE IT SLIDE AND REPLACE WITH CATEGORIZED ONE FOR MOBILE VIEW */}
            <div className="overflow-hidden">
              <div className="flex space-x-7 xl:space-y-7">
                {[...articles, ...articles].map((article) => (
                  <TopHeadlineItem
                    key={`${article.title}-${article.author}`}
                    {...article}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="xl:mt-48 mt-24">
          <div className="container">
            <h5 className="text-secondary max-lg:text-sm">Trending Topics</h5>

            <div className="text-2xl xl:text-[2.75rem] text-title font-bold mt-3 mb-7">
              Popular last week
            </div>

            {/* CATEGORIES */}
            <ul className="flex items-center space-x-4 text-paragraph font-medium text-sm xl:text-lg mb-5 xl:mb-12 overflow-auto">
              {articleCategories.map((category) => {
                const active = "All";
                return (
                  <li
                    className={`min-w-fit ${
                      category.toLowerCase() === active.toLowerCase()
                        ? "text-title font-bold"
                        : ""
                    }`}
                    key={category}
                  >
                    {category}
                  </li>
                );
              })}
            </ul>

            <div className="space-y-5 xl:space-y-4">
              {articles.map((article) => (
                <ArticleThumbnail
                  key={`${article.author}-${article.title}`}
                  {...article}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="xl:mt-44 mt-24">
          <div className="container flex md:flex-row flex-col space-y-4 md:space-y-0 justify-between">
            <h2 className="max-xl:text-2xl">Subscribe our newsletter</h2>
            <div>
              <button className="btn btn-primary flex items-center">
                <div>Learn More </div>
                <Image className="inline ml-3" src={arrowRightIcon} alt="" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ArticlePage;
