import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot/crop
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alternative Text (for accessibility)',
      type: 'string',
      description: 'Brief description of the logo.',
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}) 