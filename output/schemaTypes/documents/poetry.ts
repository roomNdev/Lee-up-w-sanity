import {defineField, defineType} from 'sanity'
import { RiQuillPenFill } from "react-icons/ri";
import { format } from 'date-fns';

export default defineType({
  name: 'poem',
  title: 'Escritura creativa',
  type: 'document',
  icon: RiQuillPenFill,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'Publicado el:',
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'genre',
      title: 'Género',
      type: 'array',
      of: [{type: 'reference', to: {type: 'genre'}}],
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      title: 'Imagen principal',
      name: 'coverImage',
      type: 'customImage',
    }),
    defineField({
      name: 'body',
      title: 'Texto',
      type: 'richText',
    }),
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), 'p, dd/MM/yyy')
          : '',
      };
    },
  },
})
