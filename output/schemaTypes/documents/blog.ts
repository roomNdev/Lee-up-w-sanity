import {defineField, defineType} from 'sanity'
import {GiNotebook} from 'react-icons/gi'
import { format } from 'date-fns';

export default defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  icon: GiNotebook,
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
      title: 'Resumen',
      name: 'excerpt',
      type: 'normalText',
      description: 'Una pequeña descripción del post del blog',
    }),
    defineField({
      name: 'body',
      title: 'Cuerpo del Post',
      type: 'richText',
    }),
    defineField({
      name: 'bookAuthor',
      title: 'Autor del Libro',
      type: 'string',
    }),
    defineField({
      name: 'bookAuthorBio',
      title: 'Biografia del Autor del Libro',
      description: 'ingrese una URL de la biografia del autor',
      type: 'url',
    }),
    defineField({
      name: 'points',
      title: 'Puntuacion del libro',
      type: 'number',
      validation: (Rule) => [
        Rule.error('El puntaje debe ser mayor a 0 y menor a 5 ').lessThan(6).greaterThan(0)
      ],
    })
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
