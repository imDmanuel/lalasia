import { defineType, defineField } from "sanity";

export default defineType({
  type: "document",
  name: "products",
  title: "Products",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Product name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "reference",
      name: "category",
      title: "Product catergory",
      validation: (Rule) => Rule.required(),
      to: {
        type: "product-categories",
      },
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Product image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    }),
    defineField({
      type: "string",
      name: "overview",
      title: "Product overview",
    }),
    defineField({
      type: "text",
      name: "detail",
      title: "Product details",
    }),
    defineField({
      type: "number",
      name: "price",
      title: "Price",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
