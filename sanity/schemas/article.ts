import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "article",
  title: "Article",
  fields: [
    defineField({
      type: "image",
      title: "Cover image",
      name: "coverImage",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "array",
      name: "categories",
      title: "Categories",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "reference",
          to: {
            type: "article-categories",
          },
        },
      ],
    }),
    defineField({
      type: "string",
      validation: (Rule) => Rule.required(),
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "string",
      title: "Excerpt",
      validation: (Rule) => Rule.required(),
      name: "excerpt",
    }),
    defineField({
      type: "slug",
      name: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 90,
      },
    }),
    defineField({
      type: "reference",
      name: "author",
      title: "Author",
      validation: (Rule) => Rule.required(),
      to: {
        type: "author",
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Article body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
