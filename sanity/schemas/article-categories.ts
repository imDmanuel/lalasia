import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article-categories',
  title: 'Article Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
    })
  ],
})
