import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import articleCategories from "./schemas/article-categories";
import post from "./schemas/post";
import author from "./schemas/author";
import article from "./schemas/article";
import productCategories from "./schemas/product-categories";
import product from "./schemas/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    articleCategories,
    blockContent,
    article,
    productCategories,
    product,
  ],
};
