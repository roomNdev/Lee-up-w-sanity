import { MdPerson } from 'react-icons/md';
import {defineField, defineType} from 'sanity'

const shouldShow = (document) => {
  return document.member === false
}

export default defineType({
  name: 'author',
  title: 'Miembros y Autores',
  type: 'document',
  icon: MdPerson,

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Es requerido')
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => [
        Rule.required().error('Es requerido')
      ],
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => [
        Rule.required().error('Es requerido')
      ],
    }),
    defineField({
      name: 'role',
      title: 'Rol',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Es requerido')
      ],
    }),
    defineField({
      name: 'area',
      title: 'Área',
      type: 'array',
      of: [{type: 'reference', to: {type: 'areas'}}],
      
      validation: (Rule) => [
        Rule.required().error('Es requerido')
      ],
    }),
    defineField({
      name: 'member',
      title: '¿Es miembro del club?',
      type: 'boolean',
      validation: (Rule) => [
        Rule.required().error('Es requerido')
      ],
    }), 
    defineField({
      name: 'exmember',
      title: '¿Es ex miembro del club?',
      type: 'boolean',
      validation: (Rule) => [
        Rule.required().error('Es requerido')
      ],
      hidden: ({document}) => {
        return !shouldShow(document)
      },
      initialValue: false
    }), 
    defineField({
      name: 'cicle',
      title: 'Completa con el ciclo (solo si no es un miembro)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'ciclo'}}],
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          if (shouldShow(document) && currentValue === undefined)
            return "Este campo es requerido cuando no se es miembro"
          return true
        }),
      hidden: ({document}) => {
        return !shouldShow(document)
      },
    }),
    defineField({
      name: 'directive',
      title: '¿Es miembro de la directiva?',
      type: 'boolean',
      validation: (Rule) => [
        Rule.required().error('Es requerido')
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (Rule) => [
        Rule.required().error('Es requerido')
      ],
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      description: 'Que siga la siguiente estructura: tuusuario (sin @)',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      description: 'Que siga la siguiente estructura: facebook.com/tuusuario',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin',
      description: 'Que siga la siguiente estructura: linkedin.com/in/tuusuario',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      image: 'profileImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      }
    }
  },
})
