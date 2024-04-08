import { MdPhoto } from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'principalPhoto',
  title: 'Foto de la pagina principal',
  type: 'document',
  icon: MdPhoto,
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
    defineField({
      name: 'principalPhoto',
      title: 'Foto principal',
      type: "customImage",
      validation: (Rule) => [
        Rule.required().error('At least one item is required'),
      ],
    })
  ],
  validation: (Rule) => [
    Rule.required().error('At least one item is required')
  ],
  preview: {
    select: {
      title: 'title',
      image: 'principalPhoto',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
})