import { defineType, defineField } from "sanity";

export default defineType({
  type: "document",
  name: "product-categories",
  title: "Product categories",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Category name",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
