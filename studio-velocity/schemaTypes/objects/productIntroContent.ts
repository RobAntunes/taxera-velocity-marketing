import { defineType, defineField, type ValidationRule } from 'sanity'

export default defineType({
  name: 'productIntroContent',
  title: 'Product Introduction Section',
  type: 'object',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Main Title (e.g., Velocity)',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Subtitle (e.g., A Taxera Product)',
      type: 'string',
      description: 'Leave blank if this is static in the code.',
    }),
    defineField({
      name: 'descriptionLine1',
      title: 'Description Line 1',
      type: 'text',
      rows: 3,
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionLine2',
      title: 'Description Line 2',
      type: 'text',
      rows: 3,
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
    defineField({
      name: 'videoSection',
      title: 'Video Section',
      type: 'videoEmbed', // Reference to videoEmbed object
      validation: (Rule: ValidationRule) => Rule.required(),
    }),
  ],
}) 