import Image from "next/image";
// import { articleCategories, articles } from "@/mock-data";
import { ArticleThumbnail } from "../(home)/ArticleThumbnail";
import arrowRightIcon from "@/assets/images/arrow-right-icon.svg";
import { TopHeadlines } from "./TopHeadlines";
import { groq } from "next-sanity";
import { getClient } from "../../../../sanity/lib/client";
import { IArticleThumbnail } from "@/types";
import { TrendingArticles } from "@/components/TrendingArticles";

const articleCategoriesQuery = groq`
*[_type == 'article-categories']{
  name
}

`;
const lastWeekTrendingArticlesQuery = groq`
*[_type == 'article']{
  ...,
  categories,
  author->
}`;

const todayHeadlineArticlesQuery = groq`
*[_type == 'article']{
  ...,
  categories->
  author->
}
`;

const ArticlePage: React.FC = async function () {
  let articleCategories: IArticleThumbnail["categories"] | null = [];
  let todayHeadlineArticles: IArticleThumbnail[] | null = [];
  let lastWeekTrendingArticles: IArticleThumbnail[] | null = [];
  try {
    articleCategories = await getClient().fetch(articleCategoriesQuery);
  } catch (e) {
    articleCategories = null;
  }
  try {
    todayHeadlineArticles = await getClient().fetch(todayHeadlineArticlesQuery);
  } catch (e) {
    todayHeadlineArticles = null;
  }
  try {
    lastWeekTrendingArticles = await getClient().fetch(
      lastWeekTrendingArticlesQuery,
    );
  } catch (e) {
    lastWeekTrendingArticles = null;
  }

  return (
    <>
      <header className="mt-12 xl:mt-24">
        <div className="container">
          <div className="relative">
            <h1 className="text-center max-2xl:text-2xl">Article</h1>
            <p className="mx-auto mb-7 mt-5 max-w-xl text-center max-2xl:text-sm 2xl:mb-12">
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

            <div className="absolute bottom-0 left-1/2 mx-auto w-[calc(100%_-_(2_*_18px))] -translate-x-1/2 translate-y-1/2 bg-white p-4 text-title shadow-md 2xl:w-full 2xl:max-w-5xl 2xl:px-10 2xl:py-12">
              <div className="text-[0.625rem] font-medium text-paragraph xl:text-lg">
                Tips and Trick
              </div>
              <div className="mb-2 mt-1 max-w-3xl text-sm font-bold 2xl:mb-4 2xl:mt-2 2xl:text-2xl">
                This 400-Square-Foot New York Apartment Is Maximized With Custom
                Millwork
              </div>

              {/* TODO: CONVERT TO SHORT DATE */}
              <div className="flex items-center text-[0.75rem] 2xl:text-sm ">
                <Image
                  className="aspect-square rounded-full"
                  src={"/assets/images/article-author.png"}
                  alt=""
                  width={28}
                  height={28}
                />
                <div className="ml-2 mr-6 truncate font-bold">
                  By Morgan Goldberg
                </div>
                <div className="truncate font-medium text-paragraph">
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
            <h5 className="text-lg font-bold text-secondary max-2xl:text-sm">
              Daily News
            </h5>
            <h2 className="mb-7 mt-3 max-2xl:text-2xl">Today top headlines</h2>

            {/* TOP HEADLINES GALLERY */}
            {/* TODO: MAKE IT SLIDE AND REPLACE WITH CATEGORIZED ONE FOR MOBILE VIEW */}
            <TopHeadlines articles={todayHeadlineArticles} />
          </div>
        </section>

        {/* TRENDING TOPICS SECTION */}
        <section className="mt-24 xl:mt-48">
          <div className="container">
            <h5 className="text-secondary max-lg:text-sm">Trending Topics</h5>

            <div className="mb-7 mt-3 text-2xl font-bold text-title 2xl:text-[2.75rem]">
              Popular last week
            </div>

            <TrendingArticles
              articles={lastWeekTrendingArticles}
              categories={articleCategories}
            />
          </div>
        </section>
        {/* TRENDING TOPICS SECTION */}

        {/* CALL TO ACTION */}
        <section className="mt-24 xl:mt-44">
          <div className="container flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
            <h2 className="max-xl:text-2xl">Subscribe our newsletter</h2>
            <div>
              <button className="btn btn-primary flex items-center">
                <div>Learn More </div>
                <Image className="ml-3 inline" src={arrowRightIcon} alt="" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ArticlePage;
