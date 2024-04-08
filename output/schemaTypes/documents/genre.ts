import { TbCategory } from 'react-icons/tb';
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'genre',
  title: 'Género',
  type: 'document',
  icon: TbCategory,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'SLUG',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug.current,
      };
    },
  },
})
