import { MdStar } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  icon: MdStar,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'writing',
      title: 'Escritura creativa: destacados',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'poem' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every Item should be unique').unique(),
        // Rule.required().error('At least one item is required'),
      ],
    }),
    defineField({
      name: 'posts',
      title: 'Reseñas: destacados',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every Item should be unique').unique(),
        // Rule.required().error('At least one item is required'),
      ],
    }),
    defineField({
      name: 'category',
      title: 'Featured Top category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      validation: (Rule) => [
        Rule.error('Every Item should be unique').unique(),
        // Rule.required().error('At least one item is required'),
      ],
    },
    )
  ],
});
