import { TbClock } from 'react-icons/tb'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ciclo',
  title: 'Ciclos',
  type: 'document',
  icon: TbClock,
  fields: [
    defineField({
      name: 'cicle',
      title: 'Ciclo',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'cicle',
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: 'cicle',
      slug: 'slug',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug.current,
      }
    }
  },
})
