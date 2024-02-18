"use client";

import { ArticleThumbnail } from "@/app/(website)/(home)/ArticleThumbnail";
import { IArticleThumbnail } from "@/types";
import React from "react";
import { toast } from "react-hot-toast";

export const TrendingArticles: React.FC<{
  categories: IArticleThumbnail["categories"] | null;
  articles: IArticleThumbnail[] | null;
}> = ({ categories, articles }) => {
  if (categories == null) {
    toast.error("Unable to fetch article categories");
  }
  if (categories == null) {
    toast.error("Unable to fetch trending topics");
  }

  return (
    <>
      {/* CATEGORIES */}
      <ul className="mb-5 flex items-center space-x-4 overflow-auto text-sm font-medium text-paragraph 2xl:mb-12 2xl:text-lg">
        {/* TODO: RENDER A KIND OF NOT FOUND COMPONENT IF FETCH WAS UNSUCCESSFUL OR EMPTY */}
        {categories?.map((category) => {
          const active = "All";
          return (
            <li
              className={`min-w-fit ${
                category.name.toLowerCase() === active.toLowerCase()
                  ? "font-bold text-title"
                  : ""
              }`}
              key={category.name}
            >
              {category.name}
            </li>
          );
        })}
      </ul>

      <div className="space-y-5 2xl:space-y-4">
        {/* TODO: RENDER A KIND OF NOT FOUND COMPONENT IF FETCH WAS UNSUCCESSFUL OR EMPTY */}
        {articles?.map((article) => {
          console.log(article);
          return (
            <ArticleThumbnail
              key={`${article.author}-${article.title}`}
              {...article}
            />
          );
        })}
      </div>

      <button className="mx-auto flex border border-screen-line px-6 py-3 text-sm font-bold text-title transition-colors duration-300 hover:bg-secondary hover:text-white 2xl:text-base">
        Load More
      </button>
    </>
  );
};
