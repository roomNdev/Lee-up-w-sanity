import { MdImage } from 'react-icons/md';
import {defineType, defineField } from 'sanity';

export default defineType({
  name: 'customImage',
  title: 'Image',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error("Alt text can't be empty").required(),
      // options: {
      //   isHighlighted: true,
      // },
    })
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      alt: 'alt',
    },
  },
});
