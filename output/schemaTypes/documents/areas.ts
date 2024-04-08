import { TbLayersIntersect } from "react-icons/tb";
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'areas',
  title: 'Áreas',
  type: 'document',
  icon: TbLayersIntersect,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
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
